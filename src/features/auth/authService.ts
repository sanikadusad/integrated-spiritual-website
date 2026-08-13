import axiosInstance from '../../services/axiosInstance';

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface VerifyOtpPayload {
  email: string;
  code: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  const response = await axiosInstance.post('/auth/register', payload);
  return response.data;
};

export const loginUser = async (payload: LoginPayload) => {
  const response = await axiosInstance.post('/auth/login', payload);
  return response.data;
};

export const verifyOtp = async (payload: VerifyOtpPayload) => {
  const response = await axiosInstance.post('/auth/verify-otp', payload);
  return response.data;
};

export const resendOtp = async (email: string) => {
  const response = await axiosInstance.post('/auth/resend-otp', { email });
  return response.data;
};