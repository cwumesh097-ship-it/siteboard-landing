from fastapi import FastAPI, APIRouter, Depends, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection (kept for backward compat)
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# PostgreSQL
from database import init_db, get_session, Signup

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Pydantic Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class SignupCreate(BaseModel):
    name: str
    company_name: str
    city: str
    whatsapp: str

class SignupResponse(BaseModel):
    id: str
    name: str
    company_name: str
    city: str
    whatsapp: str
    created_at: datetime

    class Config:
        from_attributes = True

class DashboardStats(BaseModel):
    total_signups: int
    cities: List[str]
    recent_signups: List[SignupResponse]


# Routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


# Signup endpoints
@api_router.post("/signups", response_model=SignupResponse)
async def create_signup(data: SignupCreate, session: AsyncSession = Depends(get_session)):
    signup = Signup(
        name=data.name.strip(),
        company_name=data.company_name.strip(),
        city=data.city.strip(),
        whatsapp=data.whatsapp.strip(),
    )
    session.add(signup)
    await session.commit()
    await session.refresh(signup)
    return signup

@api_router.get("/signups", response_model=List[SignupResponse])
async def get_signups(session: AsyncSession = Depends(get_session)):
    result = await session.execute(
        select(Signup).order_by(Signup.created_at.desc())
    )
    signups = result.scalars().all()
    return signups

@api_router.get("/signups/stats", response_model=DashboardStats)
async def get_signup_stats(session: AsyncSession = Depends(get_session)):
    # Total count
    count_result = await session.execute(select(func.count(Signup.id)))
    total = count_result.scalar() or 0

    # Unique cities
    cities_result = await session.execute(
        select(Signup.city).distinct()
    )
    cities = [row[0] for row in cities_result.all()]

    # Recent signups (last 50)
    recent_result = await session.execute(
        select(Signup).order_by(Signup.created_at.desc()).limit(50)
    )
    recent = recent_result.scalars().all()

    return DashboardStats(
        total_signups=total,
        cities=cities,
        recent_signups=recent,
    )

# Admin login
ADMIN_EMAIL = "info@aiclex.in"
ADMIN_PASSWORD = "Umesh@2003##**"

class AdminLogin(BaseModel):
    email: str
    password: str

@api_router.post("/admin/login")
async def admin_login(data: AdminLogin):
    if data.email == ADMIN_EMAIL and data.password == ADMIN_PASSWORD:
        return {"success": True, "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")


@api_router.delete("/signups/{signup_id}")
async def delete_signup(signup_id: str, session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Signup).where(Signup.id == signup_id))
    signup = result.scalar_one_or_none()
    if not signup:
        raise HTTPException(status_code=404, detail="Signup not found")
    await session.delete(signup)
    await session.commit()
    return {"message": "Deleted successfully"}


# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup():
    await init_db()
    logger.info("Database tables created / verified")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
