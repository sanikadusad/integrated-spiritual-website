import axiosInstance from '../../services/axiosInstance';

export interface MeditationCategory {
  id: number;
  name: string;
  slug: string;
}

export const getCategories = async (): Promise<MeditationCategory[]> => {
  const response = await axiosInstance.get('/meditation/categories');
  return response.data.categories;
};

export const uploadMeditation = async (formData: FormData) => {
  const response = await axiosInstance.post('/meditation', formData, {
    headers: { 'Content-Type': undefined },
  });
  return response.data;
};