import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import AdminDashboardPage from '../features/dashboard/admin/AdminDashboardPage';
import MentorDashboardPage from '../features/dashboard/mentor/MentorDashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import VerifyEmailPage from '../features/auth/VerifyEmailPage';
import ForgotPasswordPage from '../features/auth/ForgotPasswordPage';
import ResetPasswordPage from '../features/auth/ResetPasswordPage';
import UploadMeditationPage from '../features/dashboard/mentor/UploadMeditationPage';
import MeditationListPage from '../features/meditation/MeditationListPage';
import MeditationPlayerPage from '../features/meditation/MeditationPlayerPage';
import MyCoursesPage from '../features/dashboard/mentor/MyCoursesPage';
import ManageLessonsPage from '../features/dashboard/mentor/ManageLessonsPage';
import ManageCoursesPage from '../features/dashboard/admin/ManageCoursesPage';
import CreateCoursePage from '../features/dashboard/admin/CreateCoursePage';
import CourseListPage from '../features/courses/CourseListPage';
import CourseDetailPage from '../features/courses/CourseDetailPage';
import ComingSoonPage from '../components/ComingSoonPage/ComingSoonPage';
import { userNavSections } from '../features/dashboard/userNavConfig';
import { adminNavSections } from '../features/dashboard/admin/adminNavConfig';
import { mentorNavSections } from '../features/dashboard/mentor/mentorNavConfig';
import ProfilePage from '../features/dashboard/ProfilePage';

import EventsPage from '../features/events/pages/EventsPage';
import EventDetailsPage from '../features/events/pages/EventDetailsPage';
import MyEventsPage from '../features/events/pages/MyEventsPage';
import AdminEventsPage from '../features/events/pages/AdminEventsPage';
import AdminCreateEventPage from '../features/events/pages/AdminCreateEventPage';
import AdminEditEventPage from '../features/events/pages/AdminEditEventPage';
import AdminEventManagePage from '../features/events/pages/AdminEventManagePage';

import CommunityPage from '../features/community/pages/CommunityPage';
import CommunityGroupPage from '../features/community/pages/CommunityGroupPage';
import CommunityQuestionPage from '../features/community/pages/CommunityQuestionPage';
import AdminCommunityPage from '../features/community/pages/AdminCommunityPage';

import VolunteeringPage from '../features/volunteering/pages/VolunteeringPage';
import VolunteerOpportunityPage from '../features/volunteering/pages/VolunteerOpportunityPage';
import MyVolunteeringPage from '../features/volunteering/pages/MyVolunteeringPage';
import AdminVolunteeringPage from '../features/volunteering/pages/AdminVolunteeringPage';
import AdminCreateVolunteerPage from '../features/volunteering/pages/AdminCreateVolunteerPage';
import AdminVolunteerManagePage from '../features/volunteering/pages/AdminVolunteerManagePage';

const AppRoutes = () => {
  return (
    <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
      <Route path="/volunteering" element={<VolunteeringPage />} />
      <Route path="/volunteering/:id" element={<VolunteerOpportunityPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  
    <Route element={<AuthLayout />}>
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Route>
  
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/meditation" element={<MeditationListPage />} />
      <Route path="/dashboard/meditation/:id" element={<MeditationPlayerPage />} />
      <Route path="/dashboard/courses" element={<CourseListPage />} />
      <Route path="/dashboard/courses/:id" element={<CourseDetailPage />} />
      <Route path="/dashboard/profile" element={<ProfilePage />} />
      <Route
    path="/dashboard/*"
    element={<ComingSoonPage portalLabel="MY SPACE" sections={userNavSections} homePath="/dashboard" title="Coming Soon" />}
  />
    </Route>

    <Route element={<ProtectedRoute allowedRoles={['user', 'mentor', 'admin']} />}>
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/community/groups/:id" element={<CommunityGroupPage />} />
      <Route path="/community/questions/:id" element={<CommunityQuestionPage />} />
    </Route>

    <Route element={<ProtectedRoute allowedRoles={['user', 'mentor']} />}>
      <Route path="/my-events" element={<MyEventsPage />} />
      <Route path="/my-volunteering" element={<MyVolunteeringPage />} />
    </Route>

    <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/courses" element={<ManageCoursesPage />} />
      <Route path="/admin/courses/create" element={<CreateCoursePage />} />
      
      <Route path="/admin/events" element={<AdminEventsPage />} />
      <Route path="/admin/events/create" element={<AdminCreateEventPage />} />
      <Route path="/admin/events/:id/edit" element={<AdminEditEventPage />} />
      <Route path="/admin/events/:id" element={<AdminEventManagePage />} />

      <Route path="/admin/community" element={<AdminCommunityPage />} />

      <Route path="/admin/volunteering" element={<AdminVolunteeringPage />} />
      <Route path="/admin/volunteering/create" element={<AdminCreateVolunteerPage />} />
      <Route path="/admin/volunteering/:id" element={<AdminVolunteerManagePage />} />

      <Route
          path="/admin/*"
          element={<ComingSoonPage portalLabel="ADMIN PORTAL" sections={adminNavSections} homePath="/admin" title="Coming Soon" />}
        />
    </Route>
    <Route element={<ProtectedRoute allowedRoles={['mentor']} />}>
      <Route path="/mentor" element={<MentorDashboardPage />} />
      <Route path="/mentor/upload-meditation" element={<UploadMeditationPage />} />
      <Route path="/mentor/my-courses" element={<MyCoursesPage />} />
      <Route path="/mentor/courses/:courseId/manage" element={<ManageLessonsPage />} />
      <Route
    path="/mentor/*"
    element={<ComingSoonPage portalLabel="MENTOR PORTAL" sections={mentorNavSections} homePath="/mentor" title="Coming Soon" />}
  />
    </Route>
  </Routes>

    
  );
};

export default AppRoutes;