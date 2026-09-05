import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { adminNavSections } from './adminNavConfig';
import { getCourses, updateCourse, getMentors, type Course, type Mentor } from '@/features/courses/courseService';

const ManageCoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);

  const loadCourses = () => {
    getCourses().then(setCourses);
  };

  useEffect(() => {
    loadCourses();
    getMentors().then(setMentors);
  }, []);

  const handleMentorChange = async (courseId: number, mentorId: string) => {
    await updateCourse(courseId, { mentorId: Number(mentorId) });
    loadCourses();
  };

  const handleStatusToggle = async (course: Course) => {
    const newStatus = course.status === 'draft' ? 'published' : 'draft';
    await updateCourse(course.id, { status: newStatus });
    loadCourses();
  };

  return (
    <div className="dash-layout">
      <DashboardSidebar portalLabel="ADMIN PORTAL" sections={adminNavSections} homePath="/admin" />

      <main className="dash-main">
        <div className="dash-widget-header-row">
          <DashboardHeader title="Manage Courses" subtitle="View, assign mentors, and publish courses." />
          <Link to="/admin/courses/create" className="dash-widget-btn">+ New Course</Link>
        </div>

        <div className="lessons-list">
          {courses.map((course) => (
            <div key={course.id} className="lesson-row">
              <div className="lesson-info">
                <p className="admin-activity-text">{course.title}</p>
                <p className="admin-activity-meta">
                  ₹{course.price} · {course.status === 'published' ? 'Published' : 'Draft'}
                </p>
              </div>

              <select
                value={course.mentor_id ?? ''}
                onChange={(e) => handleMentorChange(course.id, e.target.value)}
              >
                <option value="">No mentor</option>
                {mentors.map((mentor) => (
                  <option key={mentor.id} value={mentor.id}>
                    {mentor.name}
                  </option>
                ))}
              </select>

              <button onClick={() => handleStatusToggle(course)} className="dash-event-register-btn">
                {course.status === 'draft' ? 'Publish' : 'Unpublish'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageCoursesPage;