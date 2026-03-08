"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { track } from "@vercel/analytics";
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
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";

interface WaitlistFormProps {
  copy: Dictionary["waitlistForm"];
  locale: Locale;
}

export function WaitlistForm({ copy, locale }: WaitlistFormProps) {
  const waitlistSchema = z.object({
    name: z.string().min(2, copy.validation.nameMin),
    email: z.string().email(copy.validation.emailInvalid),
    city: z.string().min(2, copy.validation.cityMin),
    bikeOwnership: z.enum(["yes", "no", "planning"], {
      required_error: copy.validation.bikeRequired,
    }),
  });

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
      const result = await submitWaitlistForm({ ...data, locale });

      if (result.success) {
        track("Waitlist Form Submitted");
        setSubmitSuccess(true);
        setSubmitMessage(result.message || copy.messages.success);
        reset();
      } else {
        setSubmitMessage(result.message || copy.messages.genericError);
      }
    } catch (_error) {
      setSubmitMessage(copy.messages.genericError);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-6">{"\uD83D\uDEB4"}</div>
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            {copy.success.title}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">{copy.success.description}</p>
        </div>
        <Button
          onClick={() => {
            setSubmitSuccess(false);
            setSubmitMessage(null);
          }}
          size="lg"
          variant="outline"
          className="min-h-16 h-auto rounded-full border-2 px-6 py-4 text-center text-base font-bold leading-tight whitespace-normal md:text-xl"
        >
          {copy.actions.reset}
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
            {copy.labels.name}
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder={copy.placeholders.name}
            className="h-14 border-2 border-muted rounded-3xl"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-red-600 font-medium">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-3">
          <Label
            htmlFor="email"
            className="text-sm font-bold text-secondary uppercase tracking-wide"
          >
            {copy.labels.email}
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder={copy.placeholders.email}
            className="h-14 border-2 border-muted rounded-3xl"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-600 font-medium">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label
            htmlFor="city"
            className="text-sm font-bold text-secondary uppercase tracking-wide"
          >
            {copy.labels.city}
          </Label>
          <Input
            id="city"
            {...register("city")}
            placeholder={copy.placeholders.city}
            className="h-14 border-2 border-muted rounded-3xl"
            disabled={isSubmitting}
          />
          {errors.city && (
            <p className="text-sm text-red-600 font-medium">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-3">
          <Label
            htmlFor="bike"
            className="text-sm font-bold text-secondary uppercase tracking-wide"
          >
            {copy.labels.bikeOwnership}
          </Label>
          <Select
            value={bikeOwnership}
            onValueChange={(value) =>
              setValue("bikeOwnership", value as "yes" | "no" | "planning")
            }
            disabled={isSubmitting}
          >
            <SelectTrigger className="w-full min-h-14 border-2 border-muted rounded-3xl">
              <SelectValue placeholder={copy.placeholders.bikeOwnership} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">{copy.bikeOptions.yes}</SelectItem>
              <SelectItem value="no">{copy.bikeOptions.no}</SelectItem>
              <SelectItem value="planning">{copy.bikeOptions.planning}</SelectItem>
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
        className="min-h-16 h-auto w-full rounded-3xl bg-secondary px-6 py-4 text-center text-base font-bold uppercase leading-tight tracking-[0.12em] text-white whitespace-normal hover:bg-secondary/90 disabled:opacity-50 md:text-xl"
      >
        {isSubmitting ? copy.actions.submitting : copy.actions.submit}
      </Button>

      <div className="text-center pt-4">
        <p className="text-gray-600 font-medium">
          {copy.consent.line1}
          <br />
          <span className="font-bold">{copy.consent.line2}</span>
        </p>
      </div>
    </form>
  );
}

