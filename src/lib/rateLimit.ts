// src/lib/rateLimit.ts

import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function rateLimit(clientIp: string): Promise<boolean> {
  const windowSize = parseInt(process.env.RATE_LIMIT_WINDOW!) || 3600;
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS!) || 5;
  const now = Math.floor(Date.now() / 1000);

  const key = `ratelimit:${clientIp}`;
  const requests = await redis.zrangebyscore(key, now - windowSize, now);

  if (requests.length >= maxRequests) {
    return true; // Rate limit exceeded
  }

  await redis.zadd(key, now, now.toString());
  await redis.expire(key, windowSize);

  return false; // Rate limit not exceeded
}