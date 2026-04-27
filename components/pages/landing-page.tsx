import { BenefitsSection } from "@/components/benefits-section";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { LaunchShowcaseSection } from "@/components/launch-showcase-section";
import { ProductConceptSection } from "@/components/product-concept-section";
import { ValueProposition } from "@/components/value-proposition";
import { WaitlistSection } from "@/components/waitlist-section";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/locales/en";

interface LandingPageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function LandingPage({ locale, dictionary }: LandingPageProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <HeroSection
        copy={dictionary.hero}
        brandName={dictionary.branding.wordmark}
      />
      <ValueProposition copy={dictionary.valueProposition} />
      <HowItWorksSection copy={dictionary.howItWorks} />
      <BenefitsSection copy={dictionary.riderBenefits} />
      <ProductConceptSection copy={dictionary.productConcept} />
      <LaunchShowcaseSection cityCopy={dictionary.cityLaunch} />
      <WaitlistSection
        locale={locale}
        copy={dictionary.waitlistSection}
        formCopy={dictionary.waitlistForm}
      />
      <FAQSection copy={dictionary.faq} />
      <Footer
        locale={locale}
        copy={dictionary.footer}
        brandName={dictionary.branding.wordmark}
        languageSwitcherLabels={dictionary.languageSwitcher}
      />
    </div>
  );
}
