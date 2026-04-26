export interface ContactInfo {
  emailLabel: string;
  emailValue: string;
  supportLabel: string;
  supportValue: string;
  addressLabel: string;
  addressLine1: string;
  addressLine2: string;
}

export interface LegalSection {
  title: string;
  paragraph?: string;
  bullets?: string[];
  contact?: ContactInfo;
}

export interface SectionHeading {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export interface Dictionary {
  branding: {
    wordmark: string;
  };
  metadata: {
    siteName: string;
    keywords: string;
    pages: {
      home: { title: string; description: string };
      privacy: { title: string; description: string };
      terms: { title: string; description: string };
      unauthorized: { title: string; description: string };
    };
  };
  languageSwitcher: {
    ariaLabel: string;
    englishLabel: string;
    dutchLabel: string;
    englishName: string;
    dutchName: string;
  };
  hero: {
    eyebrow: string;
    status: string[];
    proofPoints: string[];
    audienceLabel: string;
    audience: string[];
    titleLines: string[];
    highlightedLine?: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundAlt: string;
    logoAlt: string;
  };
  valueProposition: {
    heading: SectionHeading;
    items: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    heading: SectionHeading;
    steps: Array<{ title: string; description: string }>;
  };
  riderBenefits: {
    heading: SectionHeading;
    items: Array<{ title: string; description: string }>;
    cta: string;
    ctaNote?: string;
  };
  productConcept: {
    heading: SectionHeading;
    body: string;
    highlights: string[];
    imageAlt: string;
    cta: string;
  };
  cityLaunch: {
    heading: SectionHeading;
    badge: string;
    cards: Array<{
      name: string;
      asset: string;
      cta: string;
      featured?: boolean;
    }>;
  };
  faq: {
    heading: SectionHeading;
    items: Array<{ question: string; answer: string }>;
  };
  waitlistSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    reassurance: string;
  };
  waitlistForm: {
    labels: {
      name: string;
      email: string;
      city: string;
      bikeOwnership: string;
    };
    placeholders: {
      name: string;
      email: string;
      city: string;
      bikeOwnership: string;
    };
    bikeOptions: {
      own: string;
      interested: string;
      planning: string;
    };
    validation: {
      nameMin: string;
      emailInvalid: string;
      cityMin: string;
    };
    actions: {
      submitting: string;
      submit: string;
      reset: string;
      revealBikeOwnership: string;
    };
    success: {
      title: string;
      description: string;
    };
    messages: {
      success: string;
      genericError: string;
    };
    consent: {
      line1: string;
      line2: string;
    };
    trustNotes: string[];
  };
  footer: {
    logoAlt: string;
    tagline: string;
    privacy: string;
    terms: string;
    instagram: string;
    instagramHref: string;
    copyrightSuffix: string;
  };
  privacy: {
    backToMovrr: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    lastUpdatedDate: string;
    sections: LegalSection[];
  };
  terms: {
    backToMovrr: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    lastUpdatedDate: string;
    sections: LegalSection[];
  };
  unauthorized: {
    title: string;
    description: string;
    note: string;
    returnHome: string;
    tryDifferentAccount: string;
  };
}
