# API Matrix

This matrix documents EVERY route found in the Phase 2 backend, alongside the original functionality.

| Endpoint | Method | Auth | Role | Controller | Consumer Exists? | Backend Exists? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AUTH** | | | | | | |
| `/api/auth/register` | POST | No | Any | `registerUser` | YES | YES |
| `/api/auth/login` | POST | No | Any | `loginUser` | YES | YES |
| `/api/auth/verify-otp` | POST | No | Any | `verifyOtp` | YES | YES |
| `/api/auth/resend-otp` | POST | No | Any | `resendOtp` | YES | YES |
| `/api/auth/forgot-password` | POST | No | Any | `forgotPassword` | YES | YES |
| `/api/auth/reset-password` | POST | No | Any | `resetPassword` | YES | YES |
| **COMMUNITY** | | | | | | |
| `/api/community/admin/groups` | GET | Yes | admin | `getGroupsAdmin` | YES | YES |
| `/api/community/admin/questions` | GET | Yes | admin | `getQuestionsAdmin` | YES | YES |
| `/api/community/admin/questions/:id/status` | PATCH | Yes | admin | `updateQuestionStatus` | YES | YES |
| `/api/community/admin/replies` | GET | Yes | admin | `getRepliesAdmin` | YES | YES |
| `/api/community/admin/replies/:id/status` | PATCH | Yes | admin | `updateReplyStatus` | YES | YES |
| `/api/community/admin/groups/:id/status` | PATCH | Yes | admin | `updateGroupStatus` | YES | YES |
| `/api/community/groups` | GET | Yes | Any | `getGroups` | YES | YES |
| `/api/community/groups` | POST | Yes | admin | `createGroup` | YES | YES |
| `/api/community/groups/:id` | GET | Yes | Any | `getGroupById` | YES | YES |
| `/api/community/groups/:id/questions` | GET | Yes | Any | `getGroupQuestions` | YES | YES |
| `/api/community/groups/:id/questions` | POST | Yes | Any | `createQuestion` | YES | YES |
| `/api/community/groups/:id/join` | POST | Yes | Any | `joinGroup` | YES | YES |
| `/api/community/groups/:id/leave` | DELETE | Yes | Any | `leaveGroup` | YES | YES |
| `/api/community/questions` | GET | Yes | Any | `getRecentQuestions` | YES | YES |
| `/api/community/questions/:id` | GET | Yes | Any | `getQuestionById` | YES | YES |
| `/api/community/questions/:id/replies` | POST | Yes | Any | `createReply` | YES | YES |
| **EVENTS** | | | | | | |
| `/api/events/` | GET | Optional | Any | `getEvents` | YES | YES |
| `/api/events/:id` | GET | Optional | Any | `getEventById` | YES | YES |
| `/api/events/my` | GET | Yes | Any | `getMyEvents` | YES | YES |
| `/api/events/admin/all` | GET | Yes | admin | `getAllEventsAdmin` | YES | YES |
| `/api/events/` | POST | Yes | admin | `createEvent` | YES | YES |
| `/api/events/:id/register` | POST | Yes | Any | `registerForEvent` | YES | YES |
| `/api/events/:id` | PUT | Yes | admin | `updateEvent` | YES | YES |
| `/api/events/:id/status` | PATCH | Yes | admin | `updateEventStatus` | YES | YES |
| `/api/events/:id` | DELETE | Yes | admin | `deleteEvent` | YES | YES |
| `/api/events/:id/cancel` | POST | Yes | admin | `cancelEvent` | YES | YES |
| `/api/events/:id/registrations` | GET | Yes | admin, mentor | `getEventRegistrations` | YES | YES |
| `/api/events/:id/registrations/:userId` | DELETE | Yes | admin | `cancelRegistration` | YES | YES |
| `/api/events/:id/attendance` | GET | Yes | admin, mentor | `getEventAttendance` | YES | YES |
| `/api/events/:id/attendance` | PUT | Yes | admin, mentor | `markAttendance` | YES | YES |
| `/api/events/:id/certificates` | GET | Yes | admin | `getEventCertificates` | YES | YES |
| `/api/events/:id/certificates/my` | GET | Yes | Any | `getMyCertificate` | YES | YES |
| `/api/events/:id/certificates/issue` | POST | Yes | admin | `issueCertificate` | YES | YES |
| `/api/events/:id/attendance/heartbeat` | POST | Yes | Any | `recordAttendanceHeartbeat` | YES | YES |
| `/api/events/:id/attendance/join` | POST | Yes | Any | `recordJoinSession` | YES | YES |
| `/api/events/:id/attendance/leave` | POST | Yes | Any | `recordLeaveSession` | YES | YES |
| `/api/events/:id/cancel-registration` | POST | Yes | Any | `cancelMyRegistration` | YES | YES |
| **VOLUNTEERING** | | | | | | |
| `/api/volunteering/` | GET | Optional | Any | `listOpportunities` | YES | YES |
| `/api/volunteering/:id` | GET | Optional | Any | `getOpportunityById` | YES | YES |
| `/api/volunteering/admin/all` | GET | Yes | admin | `getAllOpportunitiesAdmin` | YES | YES |
| `/api/volunteering/admin/applications` | GET | Yes | admin | `getAllApplicationsAdmin` | YES | YES |
| `/api/volunteering/my` | GET | Yes | Any | `getMyVolunteering` | YES | YES |
| `/api/volunteering/` | POST | Yes | admin | `createOpportunity` | YES | YES |
| `/api/volunteering/:id/status` | PATCH | Yes | admin | `updateOpportunityStatus` | YES | YES |
| `/api/volunteering/applications/:id/approve`| PATCH | Yes | admin | `approveApplication` | YES | YES |
| `/api/volunteering/applications/:id/reject` | PATCH | Yes | admin | `rejectApplication` | YES | YES |
| `/api/volunteering/applications/:id/complete`| PATCH | Yes | admin | `completeApplication` | YES | YES |
| `/api/volunteering/:id/apply` | POST | Yes | Any | `applyToOpportunity` | YES | YES |
| `/api/volunteering/:id/application` | DELETE | Yes | Any | `cancelMyApplication` | YES | YES |
| `/api/volunteering/:id/attendance/bulk` | PUT | Yes | admin | `bulkMarkAttendance` | YES | YES |
| `/api/volunteering/:id/certificates/bulk` | POST | Yes | admin | `bulkIssueCertificates` | YES | YES |
| `/api/volunteering/:id` | DELETE | Yes | admin | `deleteOpportunity` | YES | YES |
| **MEDITATION** | | | | | | |
| `/api/meditation/categories` | GET | No | Any | `getCategories` | YES | YES |
| `/api/meditation/categories` | POST | Yes | mentor, admin | `createCategory` | UNUSED | YES |
| `/api/meditation/` | GET | No | Any | `getMeditations` | YES | YES |
| `/api/meditation/:id` | GET | No | Any | `getMeditationById` | YES | YES |
| `/api/meditation/` | POST | Yes | mentor, admin | `uploadMeditation` | YES | YES |
| `/api/meditation/:id/progress` | GET | Yes | Any | `getUserProgress` | YES | YES |
| `/api/meditation/:id/progress` | POST | Yes | Any | `updateProgress` | YES | YES |
| `/api/meditation/:id/bookmark` | GET | Yes | Any | `getBookmarkStatus` | UNUSED | YES |
| `/api/meditation/:id/bookmark` | POST | Yes | Any | `toggleBookmark` | UNUSED | YES |
| **COURSES (Missing Backend)** | | | | | | |
| `/api/courses` | GET | Optional | Any | N/A | YES | **BROKEN CONTRACT** |
| `/api/courses/:id` | GET | Optional | Any | N/A | YES | **BROKEN CONTRACT** |
| `/api/courses/my-courses` | GET | Yes | Any | N/A | YES | **BROKEN CONTRACT** |
| `/api/courses/:id/enroll` | POST | Yes | Any | N/A | YES | **BROKEN CONTRACT** |
| `/api/courses` | POST | Yes | mentor, admin | N/A | YES | **BROKEN CONTRACT** |
| `/api/courses/:id/lessons` | POST | Yes | mentor, admin | N/A | YES | **BROKEN CONTRACT** |
| **USERS / PROFILE (Missing Backend)** | | | | | | |
| `/api/users/profile` | GET | Yes | Any | N/A | YES | **BROKEN CONTRACT** |
| `/api/users/profile` | PUT | Yes | Any | N/A | YES | **BROKEN CONTRACT** |
| **PRODUCTS / STORE (Missing Backend)** | | | | | | |
| `/api/products` | GET | Optional | Any | N/A | **NO FRONTEND** | **BROKEN CONTRACT** |
| `/api/cart` | GET | Yes | Any | N/A | **NO FRONTEND** | **BROKEN CONTRACT** |
| `/api/orders` | POST | Yes | Any | N/A | **NO FRONTEND** | **BROKEN CONTRACT** |

### Summary
* **Events, Community, Volunteering, Auth, and Meditation** have complete backend implementations.
* **Courses and User Profiles** have frontend consumers in `source-frontend-main` but **NO backend implementation** in either repository.
* **Store (Products, Cart, Orders)** has neither frontend nor backend implemented in the supplied repos.
