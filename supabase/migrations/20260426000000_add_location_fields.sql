-- Migration: add geo enrichment and full attribution fields to waitlist table
-- Run once in Supabase SQL editor (Database > SQL Editor > New query).
-- All new columns are nullable — enrichment never blocks a signup.
-- Run this migration BEFORE 20260426000001 from movrr-website-new.

ALTER TABLE public.waitlist
  -- Geo enrichment — server-derived from Vercel edge headers, never user-entered
  ADD COLUMN IF NOT EXISTS country_code       text,   -- ISO 3166-1 alpha-2 (e.g. "NL", "US")
  ADD COLUMN IF NOT EXISTS geo_region_code    text,   -- ISO 3166-2 subdivision code (e.g. "NH" = Noord-Holland, "CA" = California)
  ADD COLUMN IF NOT EXISTS geo_city           text,   -- IP-derived city; semantically distinct from user-entered city column
  ADD COLUMN IF NOT EXISTS timezone           text,   -- IANA timezone (e.g. "Europe/Amsterdam")
  ADD COLUMN IF NOT EXISTS geo_source         text,   -- "vercel_headers" | "unknown" | "error"

  -- UTM attribution — captured from URL query params at time of form submission
  ADD COLUMN IF NOT EXISTS utm_source         text,   -- e.g. "instagram", "google", "newsletter"
  ADD COLUMN IF NOT EXISTS utm_medium         text,   -- e.g. "social", "cpc", "email"
  ADD COLUMN IF NOT EXISTS utm_campaign       text,   -- e.g. "nl_launch_q2"
  ADD COLUMN IF NOT EXISTS utm_content        text,   -- ad variant / creative identifier
  ADD COLUMN IF NOT EXISTS utm_term           text,   -- paid search keyword

  -- Request context — captured client-side at time of form submission
  ADD COLUMN IF NOT EXISTS referrer           text,   -- HTTP referrer, truncated to 500 chars
  ADD COLUMN IF NOT EXISTS landing_path       text,   -- URL path at submission (e.g. "/", "/amsterdam", "/how-it-works")
  ADD COLUMN IF NOT EXISTS acquisition_channel text;  -- server-classified: "paid" | "social" | "organic_search" | "email" | "partner" | "referral" | "direct"
