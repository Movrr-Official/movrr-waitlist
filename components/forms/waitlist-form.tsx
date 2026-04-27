"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { track } from "@vercel/analytics";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { WaitlistSuccessState } from "@/components/waitlist-success-state";
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
    bikeOwnership: z.enum(["own", "interested", "planning"]).optional(),
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
      <WaitlistSuccessState
        copy={copy}
        locale={locale}
        onReset={() => {
          setSubmitSuccess(false);
          setSubmitMessage(null);
          setShowBikeOwnership(false);
          hasTrackedFormStart.current = false;
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/60"
          >
            {copy.labels.name}
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder={copy.placeholders.name}
            className="h-12 rounded-xl border-movrr-border-soft px-4 text-sm focus-visible:border-movrr-border-strong focus-visible:ring-movrr-border-strong/10"
            disabled={isSubmitting}
            onFocus={() => handleFormStarted("name")}
          />
          {errors.name && (
            <p className="text-xs font-medium text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/60"
          >
            {copy.labels.email}
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder={copy.placeholders.email}
            className="h-12 rounded-xl border-movrr-border-soft px-4 text-sm focus-visible:border-movrr-border-strong focus-visible:ring-movrr-border-strong/10"
            disabled={isSubmitting}
            onFocus={() => handleFormStarted("email")}
          />
          {errors.email && (
            <p className="text-xs font-medium text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="city"
          className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/60"
        >
          {copy.labels.city}
        </label>
        <Input
          id="city"
          {...register("city")}
          placeholder={copy.placeholders.city}
          className="h-12 rounded-xl border-movrr-border-soft px-4 text-sm focus-visible:border-movrr-border-strong focus-visible:ring-movrr-border-strong/10"
          disabled={isSubmitting}
          onFocus={() => handleFormStarted("city")}
        />
        {errors.city && (
          <p className="text-xs font-medium text-destructive">
            {errors.city.message}
          </p>
        )}
      </div>

      {showBikeOwnership ? (
        <div className="space-y-3">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/60">
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
                className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
                  bikeOwnership === value
                    ? "border-movrr-bg-primary bg-movrr-bg-primary text-movrr-text-inverse"
                    : "border-movrr-border-soft text-muted-foreground hover:border-movrr-border-muted hover:text-foreground"
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
            className="text-sm text-muted-foreground underline underline-offset-2 transition-colors duration-150 hover:text-foreground disabled:cursor-not-allowed"
          >
            {copy.actions.revealBikeOwnership}
          </button>
        </div>
      )}

      {submitMessage && (
        <div
          className={`rounded-xl border p-4 text-sm font-medium ${
            submitSuccess
              ? "border-movrr-success/20 bg-movrr-success/8 text-movrr-text-brand"
              : "border-destructive/20 bg-destructive/8 text-destructive"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-movrr-bg-primary px-6 text-sm font-semibold text-movrr-text-inverse transition-colors duration-200 hover:bg-movrr-bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          copy.actions.submitting
        ) : (
          <>
            {copy.actions.submit}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
          </>
        )}
      </button>

      <div ref={trustNotesRef} className="flex flex-wrap gap-2.5">
        {copy.trustNotes.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-movrr-border-soft px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.08em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground/70">
        {copy.consent.line1}{" "}
        <span className="font-semibold text-muted-foreground">
          {copy.consent.line2}
        </span>
      </p>
    </form>
  );
}
