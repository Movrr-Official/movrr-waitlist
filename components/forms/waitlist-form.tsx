"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { track } from "@vercel/analytics";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitWaitlistForm, type WaitlistFormData } from "@/lib/actions";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";

interface WaitlistFormProps {
  copy: Dictionary["waitlistForm"];
  locale: Locale;
}

export function WaitlistForm({ copy, locale }: WaitlistFormProps) {
  const trustNotesRef = useRef<HTMLDivElement | null>(null);
  const hasTrackedFormStart = useRef(false);
  const waitlistSchema = z.object({
    name: z.string().min(2, copy.validation.nameMin),
    email: z.string().email(copy.validation.emailInvalid),
    city: z.string().min(2, copy.validation.cityMin),
    bikeOwnership: z.enum(["yes", "no", "planning"]).optional(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showBikeOwnership, setShowBikeOwnership] = useState(false);

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

  useEffect(() => {
    const handleCitySelected = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (!customEvent.detail) return;

      setValue("city", customEvent.detail, {
        shouldDirty: true,
        shouldValidate: true,
      });

      track("Waitlist City Field Updated", {
        city: customEvent.detail,
        source: "city-launch-card",
      });
    };

    window.addEventListener("movrr:city-selected", handleCitySelected);
    return () => {
      window.removeEventListener("movrr:city-selected", handleCitySelected);
    };
  }, [setValue]);

  useEffect(() => {
    const element = trustNotesRef.current;
    if (!element) return;

    let hasTracked = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || hasTracked) return;

        hasTracked = true;
        track("Waitlist Trust Notes Viewed", {
          noteCount: copy.trustNotes.length,
          locale,
        });
        observer.disconnect();
      },
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [copy.trustNotes.length, locale]);

  const handleFormStarted = (
    field: "name" | "email" | "city" | "bikeOwnership",
  ) => {
    if (hasTrackedFormStart.current) return;

    hasTrackedFormStart.current = true;
    track("Waitlist Form Started", {
      field,
      locale,
    });
  };

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const params = new URLSearchParams(window.location.search);
      const result = await submitWaitlistForm({
        ...data,
        locale,
        utm_source: params.get("utm_source") ?? undefined,
        utm_medium: params.get("utm_medium") ?? undefined,
        utm_campaign: params.get("utm_campaign") ?? undefined,
        utm_content: params.get("utm_content") ?? undefined,
        utm_term: params.get("utm_term") ?? undefined,
        referrer: document.referrer
          ? document.referrer.slice(0, 500)
          : undefined,
        landing_path: window.location.pathname.slice(0, 500),
      });

      if (result.success) {
        track("Waitlist Form Submitted", {
          locale,
          bikeOwnershipProvided: Boolean(data.bikeOwnership),
        });
        setSubmitSuccess(true);
        setSubmitMessage(result.message || copy.messages.success);
        reset();
        setShowBikeOwnership(false);
        hasTrackedFormStart.current = false;
      } else {
        track("Waitlist Form Submission Failed", {
          locale,
          reason: "server_validation",
        });
        setSubmitMessage(result.message || copy.messages.genericError);
      }
    } catch (_error) {
      track("Waitlist Form Submission Failed", {
        locale,
        reason: "network_or_unknown",
      });
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
          <p className="text-lg text-muted-foreground mb-6">
            {copy.success.description}
          </p>
        </div>
        <Button
          onClick={() => {
            track("Waitlist Form Reset Clicked", { locale });
            setSubmitSuccess(false);
            setSubmitMessage(null);
            setShowBikeOwnership(false);
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
      <div className="grid gap-6 md:grid-cols-2">
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
            onFocus={() => handleFormStarted("name")}
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
            {copy.labels.email}
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder={copy.placeholders.email}
            className="h-14 border-2 border-muted rounded-3xl"
            disabled={isSubmitting}
            onFocus={() => handleFormStarted("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
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
          onFocus={() => handleFormStarted("city")}
        />
        {errors.city && (
          <p className="text-sm text-red-600 font-medium">
            {errors.city.message}
          </p>
        )}
      </div>

      {showBikeOwnership ? (
        <div className="space-y-3">
          <p className="text-sm font-bold text-secondary uppercase tracking-wide">
            {copy.labels.bikeOwnership}
          </p>
          <div className="flex flex-wrap gap-2">
            {(["own", "interested", "planning"] as const).map((value) => (
              <button
                key={value}
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  handleFormStarted("bikeOwnership");
                  const next = bikeOwnership === value ? undefined : value;
                  setValue("bikeOwnership", next);
                  if (next) {
                    track("Waitlist Bike Ownership Selected", {
                      value: next,
                      locale,
                    });
                  }
                }}
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
                  bikeOwnership === value
                    ? "border-secondary bg-secondary text-white"
                    : "border-muted text-secondary/50 hover:border-secondary/40 hover:text-secondary"
                }`}
              >
                {copy.bikeOptions[value]}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => {
              setShowBikeOwnership(true);
              track("Waitlist Bike Details Revealed", { locale });
            }}
            className="text-sm text-secondary/50 underline underline-offset-2 transition-colors duration-150 hover:text-secondary disabled:cursor-not-allowed"
          >
            {copy.actions.revealBikeOwnership}
          </button>
        </div>
      )}

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

      <div ref={trustNotesRef} className="flex flex-wrap justify-center gap-3">
        {copy.trustNotes.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-muted/40 px-3 py-2 text-xs font-semibold tracking-[0.08em] text-secondary/75"
          >
            {item}
          </span>
        ))}
      </div>

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
