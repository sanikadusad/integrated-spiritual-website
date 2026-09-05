import axiosInstance from '../../services/axiosInstance';

export interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  thumbnail_url: string | null;
  mentor_id: number | null;
  mentor_name: string | null;
  status: 'draft' | 'published';
  created_at: string;
}

export interface Lesson {
  id: number;
  course_id: number;
  title: string;
  content_type: 'video' | 'pdf';
  content_url: string;
  position: number;
  duration_seconds: number | null;
}

export const getCourses = async (): Promise<Course[]> => {
  const response = await axiosInstance.get('/courses');
  return response.data.courses;
};

export const getCourseById = async (id: string): Promise<Course> => {
  const response = await axiosInstance.get(`/courses/${id}`);
  return response.data.course;
};

export const getLessons = async (courseId: string): Promise<Lesson[]> => {
  const response = await axiosInstance.get(`/courses/${courseId}/lessons`);
  return response.data.lessons;
};

export const createLesson = async (courseId: string, formData: FormData) => {
  const response = await axiosInstance.post(`/courses/${courseId}/lessons`, formData, {
    headers: { 'Content-Type': undefined },
  });
  return response.data;
};

export const deleteLesson = async (courseId: string, lessonId: number) => {
  const response = await axiosInstance.delete(`/courses/${courseId}/lessons/${lessonId}`);
  return response.data;
};
export interface Mentor {
    id: number;
    name: string;
    email: string;
  }
  
  export const getMentors = async (): Promise<Mentor[]> => {
    const response = await axiosInstance.get('/users/mentors');
    return response.data.mentors;
  };
  
  export const createCourse = async (payload: {
    title: string;
    description: string;
    price: number;
    mentorId: number | null;
  }) => {
    const response = await axiosInstance.post('/courses', payload);
    return response.data;
  };
  
  export const updateCourse = async (
    id: number,
    payload: Partial<{ title: string; description: string; price: number; mentorId: number; status: 'draft' | 'published' }>
  ) => {
    const response = await axiosInstance.patch(`/courses/${id}`, payload);
    return response.data;
  };