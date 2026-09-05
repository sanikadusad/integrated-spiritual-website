import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { mentorNavSections } from './mentorNavConfig';
import { getCourseById, getLessons, createLesson, deleteLesson, type Course, type Lesson } from '@/features/courses/courseService';
import './ManageLessonsPage.css';

const ManageLessonsPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const [title, setTitle] = useState('');
  const [contentType, setContentType] = useState<'video' | 'pdf'>('video');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadLessons = () => {
    if (!courseId) return;
    getLessons(courseId).then(setLessons);
  };

  useEffect(() => {
    if (!courseId) return;
    getCourseById(courseId).then(setCourse);
    loadLessons();
  }, [courseId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseId) return;

    if (!title || !file) {
      setError('Title and a content file are required.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('contentType', contentType);
      formData.append('position', String(lessons.length + 1));
      formData.append('content', file);

      await createLesson(courseId, formData);

      setTitle('');
      setFile(null);
      loadLessons();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to add lesson.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (lessonId: number) => {
    if (!courseId) return;
    await deleteLesson(courseId, lessonId);
    loadLessons();
  };

  return (
    <div className="dash-layout">
      <DashboardSidebar portalLabel="MENTOR PORTAL" sections={mentorNavSections} homePath="/mentor" />

      <main className="dash-main">
        <DashboardHeader title={course?.title || 'Manage Course'} subtitle="Add and manage lessons." />

        <div className="lessons-list">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="lesson-row">
              <span className="lesson-position">{lesson.position}</span>
              <div className="lesson-info">
                <p className="admin-activity-text">{lesson.title}</p>
                <p className="admin-activity-meta">{lesson.content_type.toUpperCase()}</p>
              </div>
              <button onClick={() => handleDelete(lesson.id)} className="lesson-delete-btn" aria-label="Delete lesson">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="upload-field">
            <label>Lesson Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="upload-field">
            <label>Content Type</label>
            <select value={contentType} onChange={(e) => setContentType(e.target.value as 'video' | 'pdf')}>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div className="upload-field">
            <label>Content File</label>
            <input
              type="file"
              accept={contentType === 'video' ? 'video/*' : 'application/pdf'}
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="dash-widget-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Lesson'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default ManageLessonsPage;