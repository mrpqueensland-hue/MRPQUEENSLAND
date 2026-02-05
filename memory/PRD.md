# MRP Workforce Crisis Advocacy Website

## Original Problem Statement
Create a bold, attention-getting advocacy website about Queensland Health wage negotiation breakdown with Medical Radiation Professionals (MRPs). The key argument: Queensland Government's own workforce gap report shows MRPs as a major concern (909 FTE shortage projected, only 58% of demand met by 2032), but the Health Minister's press release completely ignores this crisis.

## User Personas
- Queensland public seeking healthcare information
- Healthcare workers (especially MRPs)
- Media/journalists
- Politicians and policy makers
- Anyone concerned about healthcare quality

## Core Requirements
- Bold, confrontational design (brutalist aesthetic)
- Reference to 1950s "Carry On Movies" era of healthcare
- Email signup for updates (not petition)
- QR code posters and social media graphics
- NOT union branded - independent advocacy
- Footer disclaimer about independence
- Domain name suggestions with MRP

## What's Been Implemented (Feb 2025)
- [x] Hero section with bold messaging "IT'S NOT 1950 ANYMORE"
- [x] Crisis stats section (909 FTE gap, 58% demand, 42% shortfall)
- [x] Reality Check - Minister vs Report comparison
- [x] "What are MRPs?" educational bento grid
- [x] Email signup with MongoDB storage
- [x] QR code poster with dynamic generation
- [x] Social media graphics (2 variants)
- [x] Domain name suggestions section
- [x] Footer with independence disclaimer
- [x] Brutalist design with Anton/Public Sans/JetBrains Mono fonts
- [x] High contrast dark theme with signal red accents

## Architecture
- Frontend: React with Tailwind CSS, Shadcn UI components
- Backend: FastAPI with MongoDB
- Email storage: MongoDB collection `email_signups`

## API Endpoints
- POST /api/signup - Register email for updates
- GET /api/signups/stats - Get signup count

## Backlog (P0/P1/P2)
- P1: Add downloadable PDF versions of posters
- P1: Add social share buttons with pre-filled text
- P2: Admin dashboard to view signups
- P2: Email confirmation/double opt-in

## Next Tasks
1. Test email signup flow end-to-end
2. Verify mobile responsiveness
3. Consider adding more poster designs
