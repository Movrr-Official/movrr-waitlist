import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { WaitlistSection } from "@/components/waitlist-section";
import { Footer } from "@/components/footer";
import { ValueProposition } from "@/components/value-proposition";
import { FAQSection } from "@/components/faq-section";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";

interface LandingPageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function LandingPage({ locale, dictionary }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection copy={dictionary.hero} brandName={dictionary.branding.wordmark} />
      <ValueProposition copy={dictionary.valueProposition} />
      {/* <BenefitsSection copy={dictionary.benefits} /> */}
      <HowItWorksSection copy={dictionary.howItWorks} />
      <FAQSection copy={dictionary.faq} />
      <WaitlistSection
        locale={locale}
        copy={dictionary.waitlistSection}
        formCopy={dictionary.waitlistForm}
      />
      <Footer
        locale={locale}
        copy={dictionary.footer}
        brandName={dictionary.branding.wordmark}
      />
    </div>
  );
}
