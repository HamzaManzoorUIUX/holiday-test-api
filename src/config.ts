import dotenv from 'dotenv';
dotenv.config();

export const config = {
  calendarificApiKey: process.env.CALENDARIFIC_API_KEY || '',
  redisHost: process.env.REDIS_HOST || 'localhost',
  redisPort: parseInt(process.env.REDIS_PORT || '6379', 10),
  cacheTTL: parseInt(process.env.CACHE_TTL || '3600', 10),
  calendarificBaseUrl: 'https://calendarific.com/api/v2',
};
