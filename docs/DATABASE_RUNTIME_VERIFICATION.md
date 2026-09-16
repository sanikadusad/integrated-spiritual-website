# Database Runtime Verification

## Static Schema Verification
Static analysis of backend controllers against the provided `.sql` files shows:
* **Events**: `events`, `event_registrations`, `event_attendance`, `event_certificates` are all correctly mapped in SQL and controllers.
* **Community**: `community_groups`, `community_group_members`, `community_questions`, `community_replies` schemas accurately match controller expectations (including added ops columns like `status` and `category`).
* **Volunteering**: `volunteer_opportunities`, `volunteer_applications`, `volunteer_attendance`, `volunteer_certificates` identically match.

## Runtime Verification
**STATUS: BLOCKED**
* No runtime connection verification can be established.
* The `users` and `courses`/`meditation` schemas are entirely missing from `.sql` definitions in the repository, presenting a critical gap that will prevent foreign key creation and application startup.
