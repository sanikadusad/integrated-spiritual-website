# Database Static Verification

This document verifies the schema found in the Phase 2 backend SQL files. No live database connection is required for this verification.

## 1. community.sql & community_ops.sql
### `community_groups`
* **Columns**: `id`, `name`, `description`, `banner_url`, `created_by`, `created_at`, `updated_at`
* **Primary Key**: `id`
* **Foreign Keys**: `created_by` references `users(id)` (ON DELETE SET NULL)
* **Constraints**: None
* **Indexes**: None explicit

### `community_group_members`
* **Columns**: `id`, `group_id`, `user_id`, `joined_at`
* **Primary Key**: `id`
* **Foreign Keys**: `group_id` references `community_groups(id)` (ON DELETE CASCADE), `user_id` references `users(id)` (ON DELETE CASCADE)
* **Constraints**: `UNIQUE(group_id, user_id)`
* **Indexes**: None explicit

### `community_questions`
* **Columns**: `id`, `group_id`, `user_id`, `title`, `content`, `created_at`, `updated_at`
* **Primary Key**: `id`
* **Foreign Keys**: `group_id` references `community_groups(id)` (ON DELETE CASCADE), `user_id` references `users(id)` (ON DELETE CASCADE)
* **Constraints**: None
* **Indexes**: `idx_community_questions_group_id`, `idx_community_questions_user_id`

### `community_replies`
* **Columns**: `id`, `question_id`, `user_id`, `content`, `created_at`, `updated_at`, `is_mentor_reply` (boolean)
* **Primary Key**: `id`
* **Foreign Keys**: `question_id` references `community_questions(id)` (ON DELETE CASCADE), `user_id` references `users(id)` (ON DELETE CASCADE)
* **Constraints**: None
* **Indexes**: `idx_community_replies_question_id`, `idx_community_replies_user_id`

## 2. events.sql, events_ops.sql & events_participation.sql
### `events`
* **Columns**: `id`, `title`, `description`, `category`, `banner_url`, `event_type`, `event_date`, `start_time`, `end_time`, `location`, `meeting_url`, `capacity`, `status`, `created_by`, `created_at`, `updated_at`
* **Primary Key**: `id`
* **Foreign Keys**: `created_by` references `users(id)` (ON DELETE SET NULL)
* **Constraints**: 
  * `event_type IN ('online', 'offline')`
  * `status IN ('draft', 'published', 'closed', 'completed', 'cancelled')`
  * `end_time > start_time`
  * `capacity IS NULL OR capacity > 0`
* **Indexes**: `idx_events_event_date`, `idx_events_status`

### `event_registrations`
* **Columns**: `id`, `event_id`, `user_id`, `registered_at`
* **Primary Key**: `id`
* **Foreign Keys**: `event_id` references `events(id)` (ON DELETE CASCADE), `user_id` references `users(id)` (ON DELETE CASCADE)
* **Constraints**: `UNIQUE(event_id, user_id)`
* **Indexes**: `idx_event_registrations_event_id`, `idx_event_registrations_user_id`

### `event_attendance`
* **Columns**: `id`, `event_id`, `user_id`, `status`, `marked_at`, `marked_by`, `source`, `created_at`, `updated_at`
* **Primary Key**: `id`
* **Foreign Keys**: `event_id` references `events(id)`, `user_id` references `users(id)`, `marked_by` references `users(id)`
* **Constraints**: `UNIQUE(event_id, user_id)`, `status IN ('present', 'absent')`, `source IN ('auto', 'admin')`
* **Indexes**: `idx_event_attendance_event_id`, `idx_event_attendance_user_id`

### `event_certificates`
* **Columns**: `id`, `event_id`, `user_id`, `certificate_number`, `issued_at`, `certificate_url`, `created_at`
* **Primary Key**: `id`
* **Foreign Keys**: `event_id` references `events(id)`, `user_id` references `users(id)`
* **Constraints**: `UNIQUE(event_id, user_id)`, `certificate_number` UNIQUE
* **Indexes**: `idx_event_certificates_event_id`, `idx_event_certificates_user_id`

### `event_attendance_sessions`
* **Columns**: `id`, `event_id`, `user_id`, `joined_at`, `left_at`, `duration_seconds`, `last_heartbeat_at`, `created_at`, `updated_at`
* **Primary Key**: `id`
* **Foreign Keys**: `event_id` references `events(id)`, `user_id` references `users(id)`
* **Constraints**: None
* **Indexes**: `idx_event_attendance_sessions_event_id`, `idx_event_attendance_sessions_user_id`, `idx_event_attendance_sessions_open`

## 3. volunteering.sql
### `volunteer_opportunities`
* **Columns**: `id`, `title`, `description`, `category`, `banner_url`, `volunteer_type`, `event_date`, `start_time`, `end_time`, `location`, `meeting_url`, `capacity`, `requirements`, `status`, `created_by`, `created_at`, `updated_at`
* **Primary Key**: `id`
* **Foreign Keys**: `created_by` references `users(id)`
* **Constraints**: `volunteer_type IN ('online', 'offline')`, `status IN ('draft', 'published', 'closed', 'completed', 'cancelled')`, `end_time > start_time`, `capacity IS NULL OR capacity > 0`
* **Indexes**: `idx_volunteer_opportunities_status`, `idx_volunteer_opportunities_event_date`, `idx_volunteer_opportunities_type`

### `volunteer_applications`
* **Columns**: `id`, `opportunity_id`, `user_id`, `status`, `applied_at`, `reviewed_at`, `reviewed_by`
* **Primary Key**: `id`
* **Foreign Keys**: `opportunity_id` references `volunteer_opportunities(id)`, `user_id` references `users(id)`, `reviewed_by` references `users(id)`
* **Constraints**: `UNIQUE(opportunity_id, user_id)`, `status IN ('applied', 'approved', 'rejected', 'cancelled', 'completed')`
* **Indexes**: `idx_volunteer_applications_opportunity_id`, `idx_volunteer_applications_user_id`, `idx_volunteer_applications_status`

### `volunteer_attendance`
* **Columns**: `id`, `opportunity_id`, `user_id`, `application_id`, `status`, `check_in`, `check_out`, `duration_minutes`, `source`, `marked_by`, `created_at`, `updated_at`
* **Primary Key**: `id`
* **Foreign Keys**: `opportunity_id` references `volunteer_opportunities`, `user_id` references `users`, `application_id` references `volunteer_applications`, `marked_by` references `users`
* **Constraints**: `UNIQUE(opportunity_id, user_id)`, `status IN ('present', 'absent', 'partial')`, `duration_minutes >= 0`, `source IN ('admin', 'system')`
* **Indexes**: `idx_volunteer_attendance_opportunity_id`

### `volunteer_certificates`
* **Columns**: `id`, `opportunity_id`, `user_id`, `application_id`, `certificate_number`, `issued_at`, `certificate_url`, `created_at`
* **Primary Key**: `id`
* **Foreign Keys**: `opportunity_id`, `user_id`, `application_id` 
* **Constraints**: `UNIQUE(opportunity_id, user_id)`, `certificate_number` UNIQUE
* **Indexes**: `idx_volunteer_certificates_opportunity_id`
