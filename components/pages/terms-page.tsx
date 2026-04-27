import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";

interface TermsPageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function TermsPage({ locale, dictionary }: TermsPageProps) {
  const copy = dictionary.terms;

  return (
    <div className="min-h-screen bg-movrr-bg-canvas">
      <header className="border-b border-movrr-text-inverse/10 bg-movrr-bg-footer">
        <div className="container flex items-center justify-between py-5">
          <Link
            href={withLocalePath(locale, "/")}
            className="flex items-center gap-2 text-movrr-text-inverse/50 transition-colors duration-150 hover:text-movrr-text-inverse"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">{copy.backToMovrr}</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src="/movrr-icon.png"
              alt={dictionary.footer.logoAlt}
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-xl font-semibold tracking-tight text-movrr-text-inverse">
              {dictionary.branding.wordmark}
            </span>
          </div>
        </div>
      </header>

      <main className="container max-w-2xl py-20 lg:py-28">
        <div className="mb-16 border-b border-border pb-12">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-secondary">
            {copy.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {copy.subtitle}
          </p>
          <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/50">
            {copy.lastUpdated}: {copy.lastUpdatedDate}
          </p>
        </div>

        <div className="space-y-12">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-base font-semibold tracking-[-0.01em] text-secondary">
                {section.title}
              </h2>
              {section.paragraph ? (
                <p className="text-base leading-relaxed text-muted-foreground">
                  {section.paragraph}
                </p>
              ) : null}
              {section.bullets ? (
                <ul className="mt-3 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.contact ? (
                <div className="mt-4 rounded-xl border border-border bg-muted/30 p-6 text-sm leading-relaxed text-muted-foreground">
                  <p className="mb-1.5">
                    <span className="font-semibold text-secondary">
                      {section.contact.emailLabel}:
                    </span>{" "}
                    <a
                      href={`mailto:${section.contact.emailValue}`}
                      className="transition-colors duration-150 hover:text-primary"
                    >
                      {section.contact.emailValue}
                    </a>
                  </p>
                  <p className="mb-1.5">
                    <span className="font-semibold text-secondary">
                      {section.contact.supportLabel}:
                    </span>{" "}
                    <a
                      href={`mailto:${section.contact.supportValue}`}
                      className="transition-colors duration-150 hover:text-primary"
                    >
                      {section.contact.supportValue}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-secondary">
                      {section.contact.addressLabel}:
                    </span>{" "}
                    {section.contact.addressLine1},{" "}
                    {section.contact.addressLine2}
                  </p>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
