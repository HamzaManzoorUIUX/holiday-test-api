import dotenv from 'dotenv';
dotenv.config();

export const config = {
  calendarificApiKey: process.env.CALENDARIFIC_API_KEY || '',
  calendarificBaseUrl: 'https://calendarific.com/api/v2',
};
