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
    backgroundAlt: string;
    logoAlt: string;
    titleLines: string[];
    description: string;
    cta: string;
  };
  valueProposition: {
    titleLines: string[];
    imageAlt: string;
    description: string;
    bullets: string[];
  };
  benefits: {
    titleLines: string[];
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    titlePrefix: string;
    titleAccent: string;
    subtitle: string;
    steps: Array<{ title: string; description: string }>;
  };
  faq: {
    titleLines: string[];
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
  };
  waitlistSection: {
    titleLines: string[];
    subtitle: string;
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
      yes: string;
      no: string;
      planning: string;
    };
    validation: {
      nameMin: string;
      emailInvalid: string;
      cityMin: string;
      bikeRequired: string;
    };
    actions: {
      submitting: string;
      submit: string;
      reset: string;
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
  };
  footer: {
    logoAlt: string;
    tagline: string;
    privacy: string;
    terms: string;
    copyrightSuffix: string;
  };
  privacy: {
    backToMovrr: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: LegalSection[];
  };
  terms: {
    backToMovrr: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
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
