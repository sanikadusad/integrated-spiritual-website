# Database SQL Execution Order

An inventory of available `.sql` files in `backend/` requires the following strict execution order to satisfy dependency graphs (Primary Tables -> Operations/Indexes -> Participations):

## Missing Foundational SQL
The underlying `users` and `meditations` schemas are conspicuously absent from the provided backend files. They must be supplied or extracted from an earlier baseline database snapshot.

## Phase 2 Schema Execution Order
1. **`events.sql`**
   * Dependencies: `users` table (missing).
   * Creates: `events`, `event_registrations`.
2. **`events_ops.sql`**
   * Dependencies: `events`.
   * Creates: `event_attendance`, `event_certificates`, Indexes, safe constraints.
3. **`events_participation.sql`**
   * Dependencies: `events`.
   * Creates: `event_attendance_sessions`, modifies `event_attendance`.
4. **`community.sql`**
   * Dependencies: `users` table.
   * Creates: `community_groups`, `community_group_members`, `community_questions`, `community_replies`, baseline seed records.
5. **`community_ops.sql`**
   * Dependencies: `community_groups`, `community_questions`, `community_replies`.
   * Alters: Adds category, banner, moderation status, unique indexes.
6. **`volunteering.sql`**
   * Dependencies: `users` table.
   * Creates: `volunteer_opportunities`, `volunteer_applications`, `volunteer_attendance`, `volunteer_certificates`.

## Seed Strategy
* Some seed records are naturally idempotent (e.g. `INSERT INTO community_groups ... WHERE NOT EXISTS`).
* Full seed files (e.g., test users, meditation content) are not currently tracked in SQL.
