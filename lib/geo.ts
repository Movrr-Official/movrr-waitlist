import { headers } from "next/headers";

export interface GeoData {
  country_code: string | null;
  region: string | null;
  geo_city: string | null;
  timezone: string | null;
  geo_source: string;
}

// Reads Vercel's edge-injected geo headers. Returns nulls gracefully in all
// other environments (local dev, CI, non-Vercel deployments).
export async function getGeoFromHeaders(): Promise<GeoData> {
  try {
    const h = await headers();
    const countryCode = h.get("x-vercel-ip-country") ?? null;
    const region = h.get("x-vercel-ip-country-region") ?? null;
    const cityRaw = h.get("x-vercel-ip-city") ?? null;
    const timezone = h.get("x-vercel-ip-timezone") ?? null;
    // Vercel URL-encodes city names (e.g. "New%20York")
    const geoCity = cityRaw ? decodeURIComponent(cityRaw) : null;
    const hasData = !!(countryCode || region || geoCity || timezone);

    return {
      country_code: countryCode,
      region,
      geo_city: geoCity,
      timezone,
      geo_source: hasData ? "vercel_headers" : "unknown",
    };
  } catch {
    return {
      country_code: null,
      region: null,
      geo_city: null,
      timezone: null,
      geo_source: "error",
    };
  }
}
