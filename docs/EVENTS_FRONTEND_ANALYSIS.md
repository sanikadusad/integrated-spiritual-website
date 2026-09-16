# Events Frontend Analysis

## 1. Directory Tree
Located at `source-frontend-phase2/src/features/events/`:
* `components/` (UI Components for Admin and User: `AdminEventList`, `EventCard`, `EventForm`, `AdminEventsShell`, etc.)
* `pages/` (Page roots: `EventsPage`, `MyEventsPage`, `AdminEventsPage`, `EventDetailPage`, etc.)
* `services/` (`eventsService.ts` for API interactions)
* `types/` (`event.types.ts` for TypeScript models)
* `utils/` (`eventCalendar.ts`, `eventLifecycle.ts`, `getApiErrorMessage.ts`, etc.)

## 2. Assumed Dependencies
* **Local Shared Modules:**
  * `axiosInstance` (via `../../../services/axiosInstance`)
  * `DashboardSidebar` (via `@/components/DashboardSidebar/DashboardSidebar`)
  * `adminNavSections` (via `@/features/dashboard/admin/adminNavConfig`)
  * `userNavSections` (via `@/features/dashboard/userNavConfig`)
  * `mentorNavSections` (via `@/features/dashboard/mentor/mentorNavConfig`)
  * `useAuth` (via `@/hooks/useAuth`)
* **NPM Packages:**
  * `axios`
  * `lucide-react`
  * `react`
  * `react-router-dom`

*All imported local modules exist in the baseline frontend and expose the identical variables.*

## 3. Upload Dependencies
* Uses `FormData` against `/events/uploads/banner` to upload banners. No separate file-upload frontend context is required.

## 4. Assumed Backend Structure
* Expects `GET /events`, `POST /events`, `GET /events/admin/all`, etc.
* Expects exactly the Phase 2 Events backend logic (which has been fully verified and integrated in previous phases).
