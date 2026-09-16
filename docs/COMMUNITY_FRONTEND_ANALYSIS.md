# Community Frontend Analysis

## 1. Folder Structure
The Phase 2 `src/features/community/` directory consists of:
* `components/`: UI elements like `CommunityGroupCard`, `CommunityQuestionCard`, `CommunityReplyList`, `CommunityShell`, `CreateCommunityForm`, `MentorReplyForm`.
* `pages/`: Role-based entry points like `CommunityPage`, `CommunityGroupPage`, `CommunityQuestionPage`, `AdminCommunityPage`.
* `services/`: API abstractions in `communityService.ts`.
* `types/`: Domain models for Community in `community.types.ts`.
* `utils/`: Helpers like `formatCommunityDate.ts`.

## 2. API Calls & Expected Backend Response Structures
API structure analyzed inside `communityService.ts`:
* Supports `CommunityGroup`, `CommunityQuestionDetail`, `CommunityQuestionSummary`, `CommunityReply` models.
* Expected backend responses include JSON objects matching those types or arrays of them.
* See `docs/COMMUNITY_API_CONTRACT_CHECK.md` for specific endpoints mapping to Backend.

## 3. Shared Dependencies Classification
External imports mapping:
* `@/services/axiosInstance` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `@/components/DashboardSidebar/DashboardSidebar` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `@/features/dashboard/admin/adminNavConfig` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `@/features/dashboard/userNavConfig` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `@/features/dashboard/mentor/mentorNavConfig` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `@/hooks/useAuth` ➔ **KEEP ORIGINAL** (Exists in baseline)
* `@/features/events/components/AdminEventsShell` ➔ **KEEP ORIGINAL** (Added in Phase 15 Events integration, acts as a shared Admin wrapper)
* `@/features/events/utils/getApiErrorMessage` ➔ **KEEP ORIGINAL** (Added in Phase 15 Events integration)
* `axios`, `lucide-react`, `react`, `react-router-dom` ➔ **NOT REQUIRED (ALREADY PRESENT)** (NPM dependencies are satisfied by baseline)

## 4. Route Dependencies
* Assumes nested rendering or direct routing inside an authenticated context `ProtectedRoute`.
* `AdminCommunityPage` assumes `admin` role clearance.
* `CommunityPage`, `CommunityGroupPage`, `CommunityQuestionPage` assume `user`, `mentor`, or `admin` role clearance.

## 5. Auth Dependencies
* Relies on standard generic `useAuth` hook which is already defined and working securely in the baseline.

## 6. Upload Dependencies
* Banner uploads (`uploadCommunityBanner`) rely on `FormData` inside `axiosInstance.post`. No special frontend library is utilized for this.

## 7. Role Dependencies
* Granularly controlled in the components (e.g. mentor replying uses `MentorReplyForm`).

## Summary
The Community frontend is perfectly self-contained. All cross-feature boundaries link to assets that are either safely established in the baseline frontend or safely integrated via the Events module phase. No manual merging of internal implementations is necessary for this domain feature.
