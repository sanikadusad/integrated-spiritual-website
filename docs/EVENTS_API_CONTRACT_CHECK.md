# Events API Contract Verification

Comparing `eventsService.ts` from Phase 2 Frontend to `eventsRoutes.js` from Backend.

## Requests Validated
1. `GET /events` ➔ **MATCH**
2. `GET /events/admin/all` ➔ **MATCH**
3. `GET /events/my-events` ➔ **MATCH**
4. `GET /events/:id` ➔ **MATCH**
5. `POST /events` ➔ **MATCH**
6. `PUT /events/:id` ➔ **MATCH**
7. `PATCH /events/:id/cancel` ➔ **MATCH**
8. `DELETE /events/:id` ➔ **MATCH**
9. `POST /events/:id/register` ➔ **MATCH**
10. `GET /events/:id/registrations` ➔ **MATCH**
11. `DELETE /events/:id/registrations/:userId` ➔ **MATCH**
12. `GET /events/:id/attendance` ➔ **MATCH**
13. `PUT /events/:id/attendance` ➔ **MATCH**
14. `GET /events/:id/certificates` ➔ **MATCH**
15. `POST /events/:id/certificates` ➔ **MATCH**
16. `POST /events/:id/certificates/issue-eligible` ➔ **MATCH**
17. `GET /events/:id/certificates/me` ➔ **MATCH**
18. `GET /events/:id/analytics` ➔ **MATCH**
19. `POST /events/uploads/banner` ➔ **MATCH**
20. `POST /events/:id/session/join` ➔ **MATCH**
21. `POST /events/:id/session/heartbeat` ➔ **MATCH**
22. `POST /events/:id/session/leave` ➔ **MATCH**

No mismatches detected. Front-to-back integration is structurally sound. Database testing remains UNVERIFIED DUE TO DATABASE.
