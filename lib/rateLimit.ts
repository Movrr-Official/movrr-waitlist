type RateLimitEntry = { count: number; resetAt: number };

const store = new Map<string, RateLimitEntry>();

async function checkUpstashRateLimit(
  key: string,
  max: number,
  windowMs: number,
): Promise<{ allowed: boolean } | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  try {
    const windowSec = Math.max(1, Math.ceil(windowMs / 1000));
    const redisKey = `waitlist-ratelimit:${key}:${Math.floor(Date.now() / windowMs)}`;

    const incrRes = await fetch(`${url}/incr/${encodeURIComponent(redisKey)}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!incrRes.ok) return null;

    const body = (await incrRes.json()) as { result?: number };
    const count = body.result ?? 1;

    if (count === 1) {
      await fetch(
        `${url}/expire/${encodeURIComponent(redisKey)}/${windowSec}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        },
      );
    }

    return { allowed: count <= max };
  } catch {
    return null;
  }
}

export async function checkWaitlistRateLimit(
  key: string,
  max = 8,
  windowMs = 60_000,
) {
  const distributed = await checkUpstashRateLimit(key, max, windowMs);
  if (distributed) return distributed;

  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now >= existing.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  existing.count += 1;
  store.set(key, existing);
  return { allowed: existing.count <= max };
}
