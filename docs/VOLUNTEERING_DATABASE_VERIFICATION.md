# Volunteering Database Verification

## SQL Files
Found `volunteering.sql` in `source-backend-phase2/`.

## Static Verification
Comparing the queries from the Volunteering controllers against `volunteering.sql`:

1. **Table: `volunteer_opportunities`**
   * Exists in schema: YES
   * Primary Key: `id` (Matches controller references)
   * Columns used in controller logic: `title`, `description`, `date`, `time`, `location`, `capacity`, `skills_required`, `status`
   * Compatibility: PASS

2. **Table: `volunteer_applications`**
   * Exists in schema: YES
   * Primary Key: `id` (Matches)
   * Foreign Keys: `opportunity_id` (refs volunteer_opportunities), `user_id` (refs users)
   * Unique Constraints: `(opportunity_id, user_id)` (Matches upsert logic)
   * Compatibility: PASS

3. **Table: `volunteer_attendance`**
   * Exists in schema: YES
   * Primary Key: `id` (Matches)
   * Foreign Keys: `opportunity_id`, `user_id`, `marked_by`
   * Columns used: `hours_logged`, `status`
   * Compatibility: PASS

4. **Table: `volunteer_certificates`**
   * Exists in schema: YES
   * Primary Key: `id` (Matches)
   * Foreign Keys: `application_id`, `user_id`, `opportunity_id`, `issued_by`
   * Compatibility: PASS

**Result**: NO MISMATCHES. All queries are fully compatible with the schema.
