"use server";

import { z } from "zod";
import {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
} from "@/lib/email";
import { createSupabaseServerClient } from "@/supabase/server";
import { DEFAULT_LOCALE, normalizeLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getGeoFromHeaders } from "@/lib/geo";
import { classifyAcquisitionChannel } from "@/lib/attribution";

const waitlistSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  city: z.string().min(2),
  bikeOwnership: z.enum(["own", "interested", "planning"]).optional(),
  locale: z.string().optional(),
  // UTM — full set of standard parameters
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  // Request context
  referrer: z.string().max(500).optional(),
  landing_path: z.string().max(500).optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export async function submitWaitlistForm(data: WaitlistFormData) {
  const locale = normalizeLocale(data.locale ?? DEFAULT_LOCALE);
  const dictionary = await getDictionary(locale);

  const parsed = waitlistSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: dictionary.waitlistForm.messages.genericError,
    };
  }

  const v = parsed.data;
  const supabase = await createSupabaseServerClient();

  // Geo enrichment — never throws or blocks signup
  const geo = await getGeoFromHeaders();

  const { error: dbError } = await supabase.from("waitlist").insert({
    // User-provided
    name: v.name,
    email: v.email,
    city: v.city, // exact user-entered text; never overwritten by geo
    bike_ownership: v.bikeOwnership ?? null,
    // Geo enrichment — server-derived, clearly prefixed to avoid semantic confusion
    country_code: geo.country_code,
    geo_region_code: geo.geo_region_code, // ISO 3166-2 subdivision code, e.g. "NH"
    geo_city: geo.geo_city, // IP-derived city; distinct from user-entered city
    timezone: geo.timezone,
    geo_source: geo.geo_source,
    // UTM attribution
    utm_source: v.utm_source ?? null,
    utm_medium: v.utm_medium ?? null,
    utm_campaign: v.utm_campaign ?? null,
    utm_content: v.utm_content ?? null,
    utm_term: v.utm_term ?? null,
    // Request context
    referrer: v.referrer ?? null,
    landing_path: v.landing_path ?? null,
    acquisition_channel: classifyAcquisitionChannel(
      v.utm_medium,
      v.utm_source,
      v.referrer,
    ),
  });

  if (dbError) {
    // 23505 = unique_violation — email already registered.
    // Treat as success: the person IS on the list; no need to surface an error.
    if (dbError.code === "23505") {
      return {
        success: true,
        message: dictionary.waitlistForm.messages.success,
      };
    }
    console.error("[waitlist] db insert failed:", dbError.message);
    return {
      success: false,
      message: dictionary.waitlistForm.messages.genericError,
    };
  }

  // Send emails — non-blocking; DB write is the source of truth.
  // A Resend outage must never revert a successful signup to an error state.
  try {
    await Promise.all([
      sendUserConfirmationEmail(v.email, v.name, v.city, v.bikeOwnership),
      sendAdminNotificationEmail(v.name, v.email, v.city, v.bikeOwnership),
    ]);
  } catch (emailErr) {
    console.error("[waitlist] email delivery failed:", emailErr);
  }

  return { success: true, message: dictionary.waitlistForm.messages.success };
}
