# Volunteering Frontend Analysis

## 1. Folder Structure
The Phase 2 `src/features/volunteering/` directory consists of:
* `components/`: UI components such as `VolunteerOpportunityCard`, `VolunteerForm`, `VolunteerStatusBadge`.
* `pages/`: Role-based entry points like `VolunteeringPage`, `VolunteerOpportunityPage`, `MyVolunteeringPage`, `AdminVolunteeringPage`, `AdminCreateVolunteerPage`, `AdminVolunteerManagePage`.
* `services/`: API abstractions in `volunteeringService.ts`.
* `types/`: Domain models for Volunteering in `volunteering.types.ts`.
* `utils/`: Helpers like `formatVolunteerDate.ts`, `volunteerLifecycle.ts`, `volunteerForm.ts`.

## 2. API Calls & Expected Backend Response Structures
API structure analyzed inside `volunteeringService.ts`:
* Standard CRUD and state management operations for opportunities and applications.
* See `docs/VOLUNTEERING_API_CONTRACT_CHECK.md` for specific endpoints mapping to Backend.

## 3. Shared Dependencies Classification
External imports mapping:
* `@/services/axiosInstance` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `@/features/events/components/AdminEventsShell` ➔ **KEEP ORIGINAL** (Added in Phase 15 Events integration, acts as a shared Admin wrapper)
* `@/features/events/components/ParticipantEventsShell` ➔ **KEEP ORIGINAL** (Added in Phase 15 Events integration)
* `@/features/events/utils/eventLifecycle` ➔ **KEEP ORIGINAL** (Added in Phase 15 Events integration)
* `@/features/events/utils/getApiErrorMessage` ➔ **KEEP ORIGINAL** (Added in Phase 15 Events integration)
* `@/hooks/useAuth` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `axios`, `lucide-react`, `react`, `react-router-dom` ➔ **NOT REQUIRED (ALREADY PRESENT)** (NPM dependencies are satisfied by baseline)

## 4. Route Dependencies
* Assumes nested rendering or direct routing inside an authenticated context `ProtectedRoute`.
* Admin volunteering pages assume `admin` role clearance.
* MyVolunteeringPage assumes `user` or `mentor` role clearance.

## 5. Auth Dependencies
* Relies on standard generic `useAuth` hook which is already defined and working securely in the baseline.

## Summary
The Volunteering frontend is structurally very similar to Events and Community, reusing the same Phase 15 shells and helpers like `ParticipantEventsShell` and `AdminEventsShell`. All cross-feature boundaries link to assets that are established in the baseline frontend or safely integrated via the Events module phase. No manual merging of internal implementations is necessary for this domain feature.
