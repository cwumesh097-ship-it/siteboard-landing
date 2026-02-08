# API Contracts — SiteBoard

## Endpoints

### POST /api/signups
- **Body**: `{ name, company_name, city, whatsapp }`
- **Response**: `{ id, name, company_name, city, whatsapp, created_at }`

### GET /api/signups
- **Response**: Array of signups, ordered by created_at desc

### GET /api/signups/stats
- **Response**: `{ total_signups, cities[], recent_signups[] }`

### DELETE /api/signups/:id
- **Response**: `{ message: "Deleted successfully" }`

## Database: PostgreSQL (Neon)
- Table: `signups` — id, name, company_name, city, whatsapp, created_at

## Frontend Integration
- SignupForm → POST /api/signups (replace localStorage mock)
- Dashboard page → GET /api/signups/stats + GET /api/signups
