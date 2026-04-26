-- Migration: add location enrichment fields to waitlist table
-- Run once in Supabase SQL editor (Database > SQL Editor > New query).
-- All columns are nullable — enrichment never blocks a signup.

ALTER TABLE public.waitlist
  ADD COLUMN IF NOT EXISTS country_code  text,  -- ISO 3166-1 alpha-2 (e.g. "NL", "US")
  ADD COLUMN IF NOT EXISTS region        text,  -- region/state code (e.g. "NH", "CA")
  ADD COLUMN IF NOT EXISTS geo_city      text,  -- IP-derived city (separate from user-entered city)
  ADD COLUMN IF NOT EXISTS timezone      text,  -- IANA timezone (e.g. "Europe/Amsterdam")
  ADD COLUMN IF NOT EXISTS geo_source    text,  -- "vercel_headers" | "unknown" | "error"
  ADD COLUMN IF NOT EXISTS utm_source    text,  -- UTM source query param
  ADD COLUMN IF NOT EXISTS utm_medium    text,  -- UTM medium query param
  ADD COLUMN IF NOT EXISTS utm_campaign  text,  -- UTM campaign query param
  ADD COLUMN IF NOT EXISTS referrer      text;  -- HTTP referrer, max 500 chars
