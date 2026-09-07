import axiosInstance from '../../services/axiosInstance';

export interface MeditationCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Meditation {
  id: number;
  title: string;
  description: string;
  category_id: number | null;
  category_name: string | null;
  media_type: 'audio' | 'video';
  media_url: string;
  thumbnail_url: string | null;
  duration_seconds: number;
  created_at: string;
}

export interface MeditationProgress {
  progress_seconds: number;
  completed: boolean;
}

export const getCategories = async (): Promise<MeditationCategory[]> => {
  const response = await axiosInstance.get('/meditation/categories');
  return response.data.categories;
};

export const getMeditations = async (categoryId?: number): Promise<Meditation[]> => {
  const response = await axiosInstance.get('/meditation', {
    params: categoryId ? { categoryId } : {},
  });
  return response.data.meditations;
};

export const getMeditationById = async (id: string): Promise<Meditation> => {
  const response = await axiosInstance.get(`/meditation/${id}`);
  return response.data.meditation;
};

export const uploadMeditation = async (formData: FormData) => {
  const response = await axiosInstance.post('/meditation', formData, {
    headers: { 'Content-Type': undefined },
  });
  return response.data;
};

export const getProgress = async (meditationId: string): Promise<MeditationProgress | null> => {
  const response = await axiosInstance.get(`/meditation/${meditationId}/progress`);
  return response.data.progress;
};

export const updateProgress = async (meditationId: string, progressSeconds: number, completed: boolean) => {
  const response = await axiosInstance.post(`/meditation/${meditationId}/progress`, {
    progressSeconds,
    completed,
  });
  return response.data;
};

export const getBookmarkStatus = async (meditationId: string): Promise<boolean> => {
  const response = await axiosInstance.get(`/meditation/${meditationId}/bookmark`);
  return response.data.bookmarked;
};

export const toggleBookmark = async (meditationId: string): Promise<boolean> => {
  const response = await axiosInstance.post(`/meditation/${meditationId}/bookmark`);
  return response.data.bookmarked;
};

export interface MeditationStats {
  sessionsPlayed: number;
  sessionsCompleted: number;
  bookmarkCount: number;
  lastPlayed: {
    id: number;
    title: string;
    media_type: 'audio' | 'video';
    progress_seconds: number;
    completed: boolean;
  } | null;
}

export const getMeditationStats = async (): Promise<MeditationStats> => {
  const response = await axiosInstance.get('/meditation/stats/me');
  return response.data;
};