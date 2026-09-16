# Volunteering Backend Integration

## 1. Files Added
* `backend/routes/volunteerRoutes.js`
* `backend/controllers/volunteerController.js`
* `backend/controllers/volunteerAdminController.js`
* `backend/controllers/volunteerAttendanceController.js`
* `backend/controllers/volunteerHelpers.js`

## 2. Shared Files Changed
* `backend/index.js` (Route mounted)
*(No core infra like `db.js` or `authMiddleware.js` was replaced)*

## 3. Routes Added
Mounted under `/api/volunteering`:
* `GET /`
* `GET /my`
* `GET /admin/all`
* `GET /admin/stats`
* `POST /uploads/banner`
* `GET /:id`
* `POST /:id/apply`
* `DELETE /:id/application`
* `POST /`
* `PUT /:id`
* `PATCH /:id/publish`
* `PATCH /:id/unpublish`
* `PATCH /:id/close`
* `PATCH /:id/complete`
* `PATCH /:id/cancel`
* `DELETE /:id`
* `GET /:id/applications`
* `GET /:id/attendance`
* `PUT /:id/attendance`
* `PATCH /applications/:applicationId/approve`
* `PATCH /applications/:applicationId/reject`
* `PATCH /applications/:applicationId/cancel`
* `PATCH /applications/:applicationId/complete`
* `POST /applications/:applicationId/certificate`

## 4. Middleware Behavior Verified
* `optionalAuth` used where public fallback exists.
* `requireAuth` properly returns 401.
* `requireRole('admin')` properly returns 403.
* File upload (`createImageUpload`) handles banner POST.

## 5. SQL Verification
Statically verified queries in controllers map exactly to `volunteering.sql`.
* **Tables Verified**: `volunteer_opportunities`, `volunteer_applications`, `volunteer_attendance`, `volunteer_certificates`.
* Primary/Foreign keys (`opportunity_id`, `user_id`) verified compatible.
* Results: **NO SCHEMA MISMATCHES.**

## 6. Validation Rules (Frontend-Independent)
**POST/PUT Opportunity (`validateOpportunityBody`)**
* **Required**: `title` (String), `description` (String), `volunteer_type` ('online' or 'offline'), `event_date` (YYYY-MM-DD), `start_time` (HH:MM:SS), `end_time` (HH:MM:SS)
* **Conditional**: `meeting_url` required if online, `location` required if offline.
* **Optional**: `capacity` (Positive Integer), `category` (String), `banner_url` (String), `requirements` (String), `status` (Enum).
* **Constraints**: `end_time` must be after `start_time`. Capacity must be a positive integer.

**PUT Attendance**
* **Required**: `attendance` array containing elements with `{ userId, hours, status }` to upsert records.

## 7. Tests Executed & Classifications

**DATABASE TESTING STATUS: BLOCKED**
*Because PostgreSQL is unavailable, any test that successfully traverses auth/middleware but fails gracefully at `pool.query` is classified as `ROUTE VERIFIED` or `BLOCKED` depending on context, NOT as a `PASS`.*

* **GET /api/volunteering/my** (Unauthenticated) ➔ **PASS** (401 Auth enforced)
* **GET /api/volunteering/admin/all** (Authenticated as User) ➔ **PASS** (403 Role enforced)
* **POST /api/volunteering** (Admin Auth, invalid body) ➔ **PASS** (400 Validation enforced)
* **GET /api/volunteering/my** (Authenticated User) ➔ **ROUTE VERIFIED / BLOCKED** (Fails at DB)
* **GET /api/volunteering/admin/all** (Admin Auth) ➔ **ROUTE VERIFIED / BLOCKED** (Fails at DB)
* **GET /api/volunteering** (Optional Auth) ➔ **ROUTE VERIFIED / BLOCKED** (Fails at DB)
* **GET /api/volunteering/999** (Optional Auth) ➔ **ROUTE VERIFIED / BLOCKED** (Fails at DB)

## 8. Regressions
Testing other modules confirmed `backend/index.js` mounts remain intact:
* **POST /api/auth/login** ➔ **ROUTE VERIFIED / BLOCKED** (500 DB error)
* **GET /api/meditation** ➔ **ROUTE VERIFIED / BLOCKED** (500 DB error)
* **GET /api/events** ➔ **ROUTE VERIFIED / BLOCKED** (500 DB error)
* **GET /api/community/groups** ➔ **ROUTE VERIFIED / BLOCKED** (500 DB error)

## 9. Unresolved Issues / Blockers
* **Database Blocker**: Cannot verify controller-to-database integration until PostgreSQL is available.
* Frontend integration for Volunteering is unstarted.
