import axios from 'axios';
import { EmailType } from '../types/email';

const API_BASE_URL = 'http://localhost:5000/api/emails';

// Add a new email
export const addEmail = async (email: string): Promise<{ message: string; email: EmailType }> => {
  const response = await axios.post<{ message: string; email: EmailType }>(API_BASE_URL, {
    Email: email,
  });
  return response.data;
};

// Get all emails
export const getAllEmails = async (): Promise<EmailType[]> => {
  const response = await axios.get<EmailType[]>(API_BASE_URL);
  return response.data;
};
