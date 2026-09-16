# Community Backend Analysis

## 1. Routes and Controllers

### `routes/communityRoutes.js`
All community routes are protected by `requireAuth` middleware at the router level (`router.use(requireAuth)`).

#### Admin Routes (requireRole('admin'))
* `GET /admin/groups` ➔ `adminGetGroups`
* `GET /admin/groups/:id` ➔ `adminGetGroupById`
* `PATCH /admin/groups/:id` ➔ `adminUpdateGroupStatus`
* `GET /admin/questions/:id` ➔ `adminGetQuestionById`
* `PATCH /admin/questions/:id` ➔ `adminRemoveQuestion`
* `PATCH /admin/replies/:id` ➔ `adminRemoveReply`

#### Upload Routes
* `POST /uploads/banner` ➔ `uploadCommunityBanner` (uses `communityBannerUpload.single('banner')` and `handleUploadError`)

#### Group Routes
* `GET /groups` ➔ `getGroups`
* `POST /groups` ➔ `createGroup`
* `GET /groups/:id/questions` ➔ `getGroupQuestions`
* `POST /groups/:id/questions` ➔ `createQuestion`
* `POST /groups/:id/join` ➔ `joinGroup`
* `DELETE /groups/:id/leave` ➔ `leaveGroup`
* `GET /groups/:id` ➔ `getGroupById`

#### Question & Reply Routes
* `GET /questions` ➔ `getRecentQuestions`
* `GET /questions/:id` ➔ `getQuestionById`
* `POST /questions/:id/replies` ➔ `createReply`

## 2. Dependencies
* `middleware/authMiddleware.js` (`requireAuth`, `requireRole`)
* `utils/storage.js` (`createImageUpload`, `handleUploadError`, `getStoredImageUrl`)
* `db.js` (PostgreSQL `pool`)

## 3. Database Operations (Static SQL match check)
The controllers query these tables:
* `community_groups` (SELECT, INSERT, UPDATE)
* `community_group_members` (SELECT, INSERT, DELETE)
* `community_questions` (SELECT, INSERT, UPDATE)
* `community_replies` (SELECT, INSERT, UPDATE)
* `users` (SELECT for names/roles)

These exactly match the tables and operations defined in `community.sql` and `community_ops.sql`.

## 4. Frontend Consumer
The `community` feature exists on the frontend under `src/features/community/` and expects these precise endpoints.
