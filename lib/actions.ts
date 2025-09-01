"use server";

import { z } from "zod";
import {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
} from "@/lib/email";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  bikeOwnership: z.enum(["yes", "no", "planning"], {
    required_error: "Please select an option",
  }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export async function submitWaitlistForm(data: WaitlistFormData) {
  try {
    // Validate the data
    const validatedData = waitlistSchema.parse(data);

    // Simulate API call - replace with actual database/API integration
    console.log("Waitlist submission:", validatedData);

    const userEmailResult = await sendUserConfirmationEmail(
      validatedData.email,
      validatedData.name,
      validatedData.city,
      validatedData.bikeOwnership
    );

    const adminEmailResult = await sendAdminNotificationEmail(
      validatedData.name,
      validatedData.email,
      validatedData.city,
      validatedData.bikeOwnership
    );

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "Successfully joined the waitlist!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }

    console.error("Waitlist submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
