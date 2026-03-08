import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";

interface PrivacyPageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function PrivacyPage({ locale, dictionary }: PrivacyPageProps) {
  const copy = dictionary.privacy;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href={withLocalePath(locale, "/")}
              className="flex items-center gap-2 text-primary hover:text-[#1e9a3a] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">{copy.backToMovrr}</span>
            </Link>
            <div className="flex items-center gap-1">
              <img src="/movrr-icon.png" alt={dictionary.footer.logoAlt} className="w-12 h-12" />
              <h3 className="text-2xl font-black text-primary">{dictionary.branding.wordmark}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{copy.title}</h1>
            <p className="text-gray-300">{copy.subtitle}</p>
            <p className="text-sm text-gray-400">
              {copy.lastUpdated}: {copy.lastUpdatedDate}
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-10">
            {copy.sections.map((section) => (
              <section className="space-y-4" key={section.title}>
                <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                {section.paragraph ? (
                  <p className="text-gray-300">{section.paragraph}</p>
                ) : null}
                {section.bullets ? (
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.contact ? (
                  <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 space-y-2 text-gray-300">
                    <p>
                      <strong>{section.contact.emailLabel}:</strong> {section.contact.emailValue}
                    </p>
                    <p>
                      <strong>{section.contact.supportLabel}:</strong> {section.contact.supportValue}
                    </p>
                    <p>
                      <strong>{section.contact.addressLabel}:</strong> {section.contact.addressLine1}
                      <br />
                      {section.contact.addressLine2}
                    </p>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
