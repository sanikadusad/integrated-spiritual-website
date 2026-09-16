# Volunteering Backend Analysis

## Routes

### Public / Authenticated Endpoints (`volunteerRoutes.js`)
* `GET /` (Optional Auth) - `listOpportunities`
* `GET /my` (Auth) - `getMyVolunteering`
* `GET /:id` (Optional Auth) - `getOpportunityById`
* `POST /:id/apply` (Auth) - `applyToOpportunity`
* `DELETE /:id/application` (Auth) - `cancelMyApplication`

### Admin Endpoints (Auth + Role 'admin')
* `GET /admin/all` - `adminListOpportunities`
* `GET /admin/stats` - `adminGetStats`
* `POST /uploads/banner` - `uploadVolunteerBanner` (Uses storage middleware)
* `POST /` - `createOpportunity`
* `PUT /:id` - `updateOpportunity`
* `PATCH /:id/publish` - `publishOpportunity`
* `PATCH /:id/unpublish` - `unpublishOpportunity`
* `PATCH /:id/close` - `closeOpportunity`
* `PATCH /:id/complete` - `completeOpportunity`
* `PATCH /:id/cancel` - `cancelOpportunity`
* `DELETE /:id` - `deleteOpportunity`
* `GET /:id/applications` - `listApplications`
* `GET /:id/attendance` - `getAttendance`
* `PUT /:id/attendance` - `upsertAttendance`
* `PATCH /applications/:applicationId/approve` - `approveApplication`
* `PATCH /applications/:applicationId/reject` - `rejectApplication`
* `PATCH /applications/:applicationId/cancel` - `cancelApplication`
* `PATCH /applications/:applicationId/complete` - `completeApplication`
* `POST /applications/:applicationId/certificate` - `issueVolunteerCertificate`

## Request Contracts (Validation)
**POST / (Create Opportunity):**
Required: `title`, `description`, `date`, `time`, `location`, `capacity`.
Optional: `skills_required`, `status`.

**PUT /:id (Update Opportunity):**
Optional: `title`, `description`, `date`, `time`, `location`, `capacity`, `skills_required`.

**PUT /:id/attendance (Upsert Attendance):**
Required: `attendance` (Array of `{ userId, hours, status }`).

## Dependencies
* `../db.js`
* `../utils/storage.js`
* `../utils/scheduleTime.js`
* `../middleware/authMiddleware.js`
* `./volunteerHelpers.js` (Local utility)

## SQL Verification
Controllers query:
* `volunteer_opportunities` (SELECT, INSERT, UPDATE, DELETE)
* `volunteer_applications` (SELECT, INSERT, UPDATE, DELETE)
* `volunteer_attendance` (SELECT, INSERT, UPDATE)
* `volunteer_certificates` (SELECT, INSERT)

These strictly correspond to tables defined in `volunteering.sql`.
All columns (`id`, `title`, `description`, `date`, `time`, `location`, `capacity`, `status`, `skills_required`, `created_at`, `updated_at`, etc) exist and have compatible primary/foreign keys.
