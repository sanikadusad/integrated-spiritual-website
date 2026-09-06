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

const AppRoutes = () => {
  return (
    <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
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
    </Route>
    <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/courses" element={<ManageCoursesPage />} />
<Route path="/admin/courses/create" element={<CreateCoursePage />} />
    </Route>
    <Route element={<ProtectedRoute allowedRoles={['mentor']} />}>
      <Route path="/mentor" element={<MentorDashboardPage />} />
      <Route path="/mentor/upload-meditation" element={<UploadMeditationPage />} />
      <Route path="/mentor/my-courses" element={<MyCoursesPage />} />
      <Route path="/mentor/courses/:courseId/manage" element={<ManageLessonsPage />} />
    </Route>
  </Routes>

    
  );
};

export default AppRoutes;