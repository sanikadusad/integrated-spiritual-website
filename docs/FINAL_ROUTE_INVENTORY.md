# Final Route Inventory

Based on `frontend/src/routes/AppRoutes.tsx`, the following routes are officially registered in the application:

## Public Routes (`<MainLayout />` / Unprotected)
| Path | Component | Source Feature | Role |
|------|-----------|----------------|------|
| `/` | `HomePage` | Original | public |
| `/about` | `AboutPage` | Original | public |
| `/events` | `EventsPage` | Phase 2 Events | public |
| `/events/:id` | `EventDetailsPage` | Phase 2 Events | public |
| `/volunteering` | `VolunteeringPage` | Phase 2 Volunteering | public |
| `/volunteering/:id` | `VolunteerOpportunityPage` | Phase 2 Volunteering | public |
| `/*` | `NotFoundPage` | Original | public |
| `/login` | `LoginPage` | Original | public |
| `/register` | `RegisterPage` | Original | public |
| `/verify-email` | `VerifyEmailPage` | Original | public |
| `/forgot-password` | `ForgotPasswordPage` | Original | public |
| `/reset-password` | `ResetPasswordPage` | Original | public |

## User Routes (`<ProtectedRoute />` - default 'user', 'mentor', 'admin')
| Path | Component | Source Feature | Role |
|------|-----------|----------------|------|
| `/dashboard` | `DashboardPage` | Original | Any Authenticated |
| `/dashboard/meditation` | `MeditationListPage` | Original | Any Authenticated |
| `/dashboard/meditation/:id` | `MeditationPlayerPage` | Original | Any Authenticated |
| `/dashboard/courses` | `CourseListPage` | Original | Any Authenticated |
| `/dashboard/courses/:id` | `CourseDetailPage` | Original | Any Authenticated |
| `/dashboard/profile` | `ProfilePage` | Original | Any Authenticated |
| `/dashboard/*` | `ComingSoonPage` | Original | Any Authenticated |

## Shared Feature Routes
| Path | Component | Source Feature | Role |
|------|-----------|----------------|------|
| `/community` | `CommunityPage` | Phase 2 Community | 'user', 'mentor', 'admin' |
| `/community/groups/:id` | `CommunityGroupPage` | Phase 2 Community | 'user', 'mentor', 'admin' |
| `/community/questions/:id` | `CommunityQuestionPage` | Phase 2 Community | 'user', 'mentor', 'admin' |
| `/my-events` | `MyEventsPage` | Phase 2 Events | 'user', 'mentor' |
| `/my-volunteering` | `MyVolunteeringPage` | Phase 2 Volunteering | 'user', 'mentor' |

## Admin Routes (`<ProtectedRoute allowedRoles={['admin']} />`)
| Path | Component | Source Feature | Role |
|------|-----------|----------------|------|
| `/admin` | `AdminDashboardPage` | Original | 'admin' |
| `/admin/courses` | `ManageCoursesPage` | Original | 'admin' |
| `/admin/courses/create` | `CreateCoursePage` | Original | 'admin' |
| `/admin/events` | `AdminEventsPage` | Phase 2 Events | 'admin' |
| `/admin/events/create` | `AdminCreateEventPage` | Phase 2 Events | 'admin' |
| `/admin/events/:id/edit` | `AdminEditEventPage` | Phase 2 Events | 'admin' |
| `/admin/events/:id` | `AdminEventManagePage` | Phase 2 Events | 'admin' |
| `/admin/community` | `AdminCommunityPage` | Phase 2 Community | 'admin' |
| `/admin/volunteering` | `AdminVolunteeringPage` | Phase 2 Volunteering | 'admin' |
| `/admin/volunteering/create` | `AdminCreateVolunteerPage` | Phase 2 Volunteering | 'admin' |
| `/admin/volunteering/:id` | `AdminVolunteerManagePage` | Phase 2 Volunteering | 'admin' |
| `/admin/*` | `ComingSoonPage` | Original | 'admin' |

## Mentor Routes (`<ProtectedRoute allowedRoles={['mentor']} />`)
| Path | Component | Source Feature | Role |
|------|-----------|----------------|------|
| `/mentor` | `MentorDashboardPage` | Original | 'mentor' |
| `/mentor/upload-meditation` | `UploadMeditationPage` | Original | 'mentor' |
| `/mentor/my-courses` | `MyCoursesPage` | Original | 'mentor' |
| `/mentor/courses/:courseId/manage` | `ManageLessonsPage` | Original | 'mentor' |
| `/mentor/*` | `ComingSoonPage` | Original | 'mentor' |

## Coexistence Verification
The original features (Dashboard, Meditation, Courses, Profile, Mentor, Admin Courses) remain perfectly intact and properly segregated by role. 
Phase 2 features (Events, Community, Volunteering) integrate neatly across public, shared, and admin roles. No routing collisions or unintended overwrites exist.
