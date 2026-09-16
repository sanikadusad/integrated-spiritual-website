# Database Map

## Tables
- `community_groups`
- `community_group_members`
- `community_questions`
- `community_replies`
- `events`
- `event_registrations`
- `event_attendance`
- `event_certificates`
- `event_attendance_sessions`
- `volunteer_opportunities`
- `volunteer_applications`
- `volunteer_attendance`
- `volunteer_certificates`
- (plus original tables like `users`, `courses`, `meditations`, etc.)

## Diagram

```
users
  |
  +---- events
  |       |
  |       +---- event_registrations
  |       +---- event_attendance
  |       +---- event_attendance_sessions
  |       +---- event_certificates
  |
  +---- community_groups
  |       |
  |       +---- community_group_members
  |       +---- community_questions
  |                |
  |                +---- community_replies
  |
  +---- volunteer_opportunities
          |
          +---- volunteer_applications
          +---- volunteer_attendance
          +---- volunteer_certificates
```
