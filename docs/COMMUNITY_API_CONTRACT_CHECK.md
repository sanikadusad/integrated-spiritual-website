# Community API Contract Verification

Comparing `communityService.ts` from Phase 2 Frontend to `communityRoutes.js` from Backend.

## Requests Validated
1. `GET /community/groups` ➔ **MATCH**
2. `GET /community/groups/:id` ➔ **MATCH**
3. `POST /community/groups` ➔ **MATCH**
4. `POST /community/uploads/banner` ➔ **MATCH**
5. `POST /community/groups/:id/join` ➔ **MATCH**
6. `DELETE /community/groups/:id/leave` ➔ **MATCH**
7. `GET /community/groups/:id/questions` ➔ **MATCH**
8. `POST /community/groups/:id/questions` ➔ **MATCH**
9. `GET /community/questions` ➔ **MATCH**
10. `GET /community/questions/:id` ➔ **MATCH**
11. `POST /community/questions/:id/replies` ➔ **MATCH**
12. `GET /community/admin/groups` ➔ **MATCH**
13. `GET /community/admin/groups/:id` ➔ **MATCH**
14. `PATCH /community/admin/groups/:id` ➔ **MATCH**
15. `GET /community/admin/questions/:id` ➔ **MATCH**
16. `PATCH /community/admin/questions/:id` ➔ **MATCH**
17. `PATCH /community/admin/replies/:id` ➔ **MATCH**

No mismatches detected. Front-to-back integration is structurally sound. Database testing remains UNVERIFIED DUE TO DATABASE.
