import { createClient } from 'redis';
import { config } from './config';

const redisClient = createClient({
  socket: {
    host: config.redisHost,
    port: config.redisPort,
  }
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect();

export const setCache = async (key: string, value: any, ttl: number) => {
  await redisClient.setEx(key, ttl, JSON.stringify(value));
};

export const getCache = async (key: string): Promise<any | null> => {
  const data = await redisClient.get(key);
  return data ? JSON.parse(data) : null;
};
