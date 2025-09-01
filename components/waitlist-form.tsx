"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitWaitlistForm, type WaitlistFormData } from "@/lib/actions";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  bikeOwnership: z.enum(["yes", "no", "planning"], {
    required_error: "Please select an option",
  }),
});

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const bikeOwnership = watch("bikeOwnership");

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await submitWaitlistForm(data);

      if (result.success) {
        setSubmitSuccess(true);
        setSubmitMessage(result.message || "Successfully joined the waitlist!");
        reset();
      } else {
        setSubmitMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-6">🚴‍♂️</div>
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Welcome to the Movement!
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            You're now on the waitlist. We'll notify you when Movrr launches in
            your city.
          </p>
        </div>
        <Button
          onClick={() => {
            setSubmitSuccess(false);
            setSubmitMessage(null);
          }}
          size="lg"
          variant="outline"
          className="h-16 text-xl font-bold rounded-full border-2"
        >
          Join Another Rider
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label
            htmlFor="name"
            className="text-sm font-bold text-secondary uppercase tracking-wide"
          >
            Full Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your name"
            className="h-14 border-2 border-muted rounded-3xl"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-red-600 font-medium">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-3">
          <Label
            htmlFor="email"
            className="text-sm font-bold text-secondary uppercase tracking-wide"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="h-14 border-2 border-muted rounded-3xl"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-600 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label
            htmlFor="city"
            className="text-sm font-bold text-secondary uppercase tracking-wide"
          >
            City
          </Label>
          <Input
            id="city"
            {...register("city")}
            placeholder="Your city"
            className="h-14 border-2 border-muted rounded-3xl"
            disabled={isSubmitting}
          />
          {errors.city && (
            <p className="text-sm text-red-600 font-medium">
              {errors.city.message}
            </p>
          )}
        </div>
        <div className="space-y-3">
          <Label
            htmlFor="bike"
            className="text-sm font-bold text-secondary uppercase tracking-wide"
          >
            Own a Bike?
          </Label>
          <Select
            value={bikeOwnership}
            onValueChange={(value) =>
              setValue("bikeOwnership", value as "yes" | "no" | "planning")
            }
            disabled={isSubmitting}
          >
            <SelectTrigger className="w-full min-h-14 border-2 border-muted rounded-3xl">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes, I own a bike</SelectItem>
              <SelectItem value="no">No, but interested</SelectItem>
              <SelectItem value="planning">Planning to get one</SelectItem>
            </SelectContent>
          </Select>
          {errors.bikeOwnership && (
            <p className="text-sm text-red-600 font-medium">
              {errors.bikeOwnership.message}
            </p>
          )}
        </div>
      </div>

      {submitMessage && (
        <div
          className={`p-4 rounded-3xl border-2 ${
            submitSuccess
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <p className="font-medium">{submitMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-white h-16 text-xl font-bold rounded-3xl uppercase tracking-wider disabled:opacity-50"
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </Button>

      <div className="text-center pt-4">
        <p className="text-gray-600 font-medium">
          By joining, you agree to receive updates about Movrr's launch.
          <br />
          <span className="font-bold">
            No spam. Just the good stuff. Unsubscribe anytime.
          </span>
        </p>
      </div>
    </form>
  );
}
