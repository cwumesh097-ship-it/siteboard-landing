# SiteBoard - Pre-Launch Landing Page + Leads Dashboard

## Overview
Landing page for SiteBoard (real estate SaaS) to collect pre-launch signups, with an admin dashboard to view leads.

## Stack
- **Frontend**: React + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI + SQLAlchemy (async)
- **Database**: PostgreSQL (Neon)

## Pages
1. `/` — Landing page (Hero, Problem, Solution, Audience, Pre-launch, Signup form, Footer)
2. `/dashboard` — Leads dashboard (stats cards, search, table, delete)

## API Endpoints
- `POST /api/signups` — Create a new lead
- `GET /api/signups` — List all leads (desc by date)
- `GET /api/signups/stats` — Dashboard stats (total, cities, recent)
- `DELETE /api/signups/:id` — Delete a lead
