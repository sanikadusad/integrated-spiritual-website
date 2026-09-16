# Frontend ↔ Backend API Contract Integrity

This statically audits all API requests made by the frontend against the registered backend routes.

| Frontend File / Feature | Method | Frontend Endpoint | Backend Endpoint | Match | Auth | Expected Response | Status |
|-------------------------|--------|-------------------|------------------|-------|------|-------------------|--------|
| `authService.ts` | POST | `/api/auth/register` | `/api/auth/register` | YES | None | User/Token | MATCH |
| `authService.ts` | POST | `/api/auth/login` | `/api/auth/login` | YES | None | User/Token | MATCH |
| `meditationService.ts` | GET | `/api/meditation` | `/api/meditation` | YES | Optional | Array | MATCH |
| `eventsService.ts` | GET/POST/etc | `/api/events/*` | `/api/events/*` | YES | Varies | Events | MATCH |
| `communityService.ts`| GET/POST/etc | `/api/community/*` | `/api/community/*`| YES | Varies | Community | MATCH |
| `volunteeringService.ts`| GET/POST/etc| `/api/volunteering/*`|`/api/volunteering/*`|YES | Varies | Volunteering | MATCH |
| `coursesService.ts` | GET/POST/etc | `/api/courses/*` | N/A | NO | Varies | Courses | **NO BACKEND IMPLEMENTATION** |
| `profileService.ts` | GET/PUT | `/api/users/profile` | N/A | NO | Required | Profile | **NO BACKEND IMPLEMENTATION** |
| `productsService.ts` (if any)| GET | `/api/products` | N/A | NO | None | Products | **NO BACKEND IMPLEMENTATION** |

**Conclusion**: The integrated features (Events, Community, Volunteering, Meditation, Auth) have symmetrical API contracts. The original baseline UI features for Courses and User Profiles are effectively orphaned as their expected backend routes are missing from the `backend/routes/` directory.
