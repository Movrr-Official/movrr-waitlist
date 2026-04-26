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

const waitlistSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  city: z.string().min(2),
  bikeOwnership: z.enum(["yes", "no", "planning"]).optional(),
  locale: z.string().optional(),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
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

  const validatedData = parsed.data;
  const supabase = await createSupabaseServerClient();

  // Enrich with approximate location from Vercel edge headers.
  // Never throws or blocks signup — all geo fields are nullable.
  const geo = await getGeoFromHeaders();

  const { error: dbError } = await supabase.from("waitlist").insert({
    name: validatedData.name,
    email: validatedData.email,
    city: validatedData.city,
    bike_ownership: validatedData.bikeOwnership ?? null,
    country_code: geo.country_code,
    region: geo.region,
    geo_city: geo.geo_city,
    timezone: geo.timezone,
    geo_source: geo.geo_source,
    utm_source: validatedData.utm_source ?? null,
    utm_medium: validatedData.utm_medium ?? null,
    utm_campaign: validatedData.utm_campaign ?? null,
    referrer: validatedData.referrer ?? null,
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
      sendUserConfirmationEmail(
        validatedData.email,
        validatedData.name,
        validatedData.city,
        validatedData.bikeOwnership,
      ),
      sendAdminNotificationEmail(
        validatedData.name,
        validatedData.email,
        validatedData.city,
        validatedData.bikeOwnership,
      ),
    ]);
  } catch (emailErr) {
    console.error("[waitlist] email delivery failed:", emailErr);
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: dictionary.waitlistForm.messages.success };
}
