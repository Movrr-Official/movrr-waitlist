"use server";

import { z } from "zod";
import {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
} from "@/lib/email";
import { createSupabaseServerClient } from "@/supabase/server";
import { DEFAULT_LOCALE, normalizeLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

const waitlistSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  city: z.string().min(2),
  bikeOwnership: z.enum(["yes", "no", "planning"]).optional(),
  locale: z.string().optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export async function submitWaitlistForm(data: WaitlistFormData) {
  const locale = normalizeLocale(data.locale ?? DEFAULT_LOCALE);
  const dictionary = await getDictionary(locale);

  try {
    const validatedData = waitlistSchema.parse(data);
    const supabase = await createSupabaseServerClient();

    const { error: dbError } = await supabase.from("waitlist").insert({
      name: validatedData.name,
      email: validatedData.email,
      city: validatedData.city,
      bike_ownership: validatedData.bikeOwnership ?? null,
    });

    if (dbError) {
      throw new Error(`Database Error: ${dbError.message}`);
    }

    await sendUserConfirmationEmail(
        validatedData.email,
        validatedData.name,
        validatedData.city,
        validatedData.bikeOwnership
      );

    await sendAdminNotificationEmail(
        validatedData.name,
        validatedData.email,
        validatedData.city,
        validatedData.bikeOwnership
      );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: dictionary.waitlistForm.messages.success };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: dictionary.waitlistForm.messages.genericError,
      };
    }

    console.error("Waitlist submission error:", error);
    return {
      success: false,
      message: dictionary.waitlistForm.messages.genericError,
    };
  }
}

