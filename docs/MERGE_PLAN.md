# Merge Plan

This plan maps exactly how we will combine the original frontend and Phase 2 frontend without destroying the original routes. 
The backend has NO conflicting files (all Phase 2 routes are purely additive in their own route files, except `index.js` which needs manual merging).

## Frontend Merge Map

| File/Directory | Source | Action | Reason | Risk | Verification |
| -------------- | ------ | ------ | ------ | ---- | ------------ |
| `src/routes/AppRoutes.tsx` | Phase 2 | MERGE MANUALLY | Phase 2 deleted `/courses`, `/meditation`, and `/admin/courses`. We must keep the original routes and ADD the Phase 2 routes. | HIGH | Verify `npm run build` |
| `src/features/dashboard/userNavConfig.tsx` | Phase 2 | MERGE MANUALLY | Phase 2 deleted original sidebar links. We must manually ADD Events and Community links. | MED | Sidebar shows all links |
| `src/features/dashboard/mentor/mentorNavConfig.tsx`| Phase 2 | MERGE MANUALLY | Phase 2 overwrote mentor links. | MED | Sidebar shows all links |
| `src/features/dashboard/admin/adminNavConfig.tsx` | Phase 2 | MERGE MANUALLY | Phase 2 overwrote admin links. | MED | Sidebar shows all links |
| `src/features/community/` | Phase 2 | IMPORT PHASE2 | Entirely new directory | LOW | Builds cleanly |
| `src/features/events/` | Phase 2 | IMPORT PHASE2 | Entirely new directory | LOW | Builds cleanly |
| `src/features/volunteering/` | Phase 2 | IMPORT PHASE2 | Entirely new directory | LOW | Builds cleanly |
| `src/features/courses/` | Original | KEEP ORIGINAL | Phase 2 deleted this folder. Do not overwrite! | HIGH | Verify course routes work |
| `src/features/meditation/` | Original | KEEP ORIGINAL | Phase 2 deleted this folder. Do not overwrite! | HIGH | Verify meditation routes work |
| `src/features/dashboard/DashboardPage.tsx` | Phase 2 | MERGE MANUALLY | Dashboard widgets must be combined (original + upcoming events) | MED | Build |
| `src/components/DashboardSidebar/` | Original | KEEP ORIGINAL | Phase 2 modified `DashboardSidebar.tsx` but we should retain original structure and add props if needed. | MED | Build |

## Backend Merge Map

| File/Directory | Source | Action | Reason | Risk | Verification |
| -------------- | ------ | ------ | ------ | ---- | ------------ |
| `backend/index.js` | Phase 2 | MERGE MANUALLY | Need to ADD `app.use('/api/events')` etc. without breaking original routes. | MED | Server starts |
| `backend/db.js` | Phase 2 | IGNORE | We can keep original DB pool | LOW | Queries run |
| `backend/routes/communityRoutes.js`| Phase 2 | IMPORT PHASE2 | New route | LOW | Endpoint responds |
| `backend/routes/eventsRoutes.js` | Phase 2 | IMPORT PHASE2 | New route | LOW | Endpoint responds |
| `backend/routes/volunteerRoutes.js`| Phase 2 | IMPORT PHASE2 | New route | LOW | Endpoint responds |
| `backend/controllers/community*.js`| Phase 2 | IMPORT PHASE2 | New controllers | LOW | Endpoint responds |
| `backend/controllers/events*.js` | Phase 2 | IMPORT PHASE2 | New controllers | LOW | Endpoint responds |
| `backend/controllers/volunteer*.js`| Phase 2 | IMPORT PHASE2 | New controllers | LOW | Endpoint responds |
