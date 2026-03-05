import type { Dictionary } from "@/locales/types";

export const en: Dictionary = {
  branding: {
    wordmark: "MOVRR",
  },
  metadata: {
    siteName: "Movrr",
    keywords:
      "bike advertising, cycling jobs, gig economy, urban mobility, brand advertising",
    pages: {
      home: {
        title: "Movrr - Transform Your Ride, Transform Your City",
        description:
          "Join the movement. Earn money while cycling and transform city streets into a canvas for brands. Flexible hours, reliable pay, and make an impact.",
      },
      privacy: {
        title: "Privacy Policy | Movrr",
        description:
          "Learn what data Movrr collects, how we use it, and your privacy rights.",
      },
      terms: {
        title: "Terms of Service | Movrr",
        description:
          "Read the terms for joining the Movrr waitlist and using the site.",
      },
      unauthorized: {
        title: "Access Denied | Movrr",
        description: "You do not have permission to access this page.",
      },
    },
  },
  languageSwitcher: {
    ariaLabel: "Select language",
    englishLabel: "EN",
    dutchLabel: "NL",
    englishName: "English",
    dutchName: "Dutch",
  },
  hero: {
    backgroundAlt: "Amsterdam cityscape with canals and bikes",
    logoAlt: "Movrr Icon",
    titleLines: ["JOIN THE", "MOVEMENT", "TRANSFORM", "YOUR RIDE"],
    description:
      "Whether you're a student, delivery rider, or just cruising through the city, Movrr pays you for every ride. No shifts, no deliveries, just extra cash on your own terms.",
    cta: "Sign Up Now",
  },
  valueProposition: {
    titleLines: ["RIDE.", "EARN.", "BELONG."],
    imageAlt: "Illustration of the Movrr rider mascot on a bike",
    description:
      "Turn every ride into extra cash. Whether you're commuting to class, delivering food, or just biking through the city. Movrr makes your wheels work for you.",
    bullets: [
      "Earn rewards from verified rides, fair and transparent",
      "Ride when you want, no schedules and no bosses",
      "Monthly rewards, always transparent with no hidden fees",
    ],
  },
  benefits: {
    titleLines: ["UNLEASH YOUR", "POTENTIAL"],
    subtitle:
      "Every ride is an opportunity. Every street is your stage. Every mile brings you closer to financial freedom.",
    items: [
      {
        title: "Flexible",
        description: "Ride when you want. Where you want. How you want.",
      },
      {
        title: "Reliable",
        description:
          "Guaranteed monthly rewards. Performance bonuses. No surprises.",
      },
      {
        title: "Rewarding",
        description: "Join a community of riders making cities more vibrant.",
      },
    ],
  },
  howItWorks: {
    titlePrefix: "HOW IT",
    titleAccent: "WORKS",
    subtitle:
      "Four simple steps to start earning. Join our pre-launch waitlist today.",
    steps: [
      { title: "Sign Up", description: "Join the waitlist. Be first." },
      { title: "Get Gear", description: "We equip you. You ride." },
      { title: "Start Riding", description: "Hit the streets. Make moves." },
      { title: "Get Paid", description: "Monthly rewards. Guaranteed." },
    ],
  },
  faq: {
    titleLines: ["QUESTIONS?", "WE'VE GOT ANSWERS."],
    subtitle: "Everything you need to know about joining the movement",
    items: [
      {
        question: "How do I get started with Movrr?",
        answer:
          "Join our pre-launch waitlist today. Once Movrr officially launches in your city, we'll notify you with instructions on how to join and start riding.",
      },
      {
        question: "How much can I earn?",
        answer:
          "Riders earn rewards from verified rides, with bonuses during peak times and high-demand routes. Rates may vary at launch, but rewards are always fair and transparent.",
      },
      {
        question: "Do I need my own bike?",
        answer:
          "Yes, you'll need a reliable bike to get started. We provide all advertising equipment and gear. Electric bikes are welcome and often earn higher rates thanks to their extended range.",
      },
      {
        question: "What cities are you launching in?",
        answer:
          "We're starting in Rotterdam and will expand to other major cities across the Netherlands soon. Join the waitlist to be the first to know when Movrr launches in your area.",
      },
      {
        question: "How flexible are the hours?",
        answer:
          "Completely flexible. Ride when you want, where you want. Many future riders plan to fit Movrr around their schedule, before class, during lunch, or on weekends. You'll always be in control.",
      },
      {
        question: "What kind of advertising will I display?",
        answer:
          "Only premium, pre-approved brands that align with our community values. No spammy ads or shady sponsors, you'll always know what you're promoting and be proud to represent it.",
      },
      {
        question: "Is there a minimum commitment?",
        answer:
          "Zero. No minimum hours or quotas. Whether you want a side hustle or steady income stream, you'll ride as much or as little as you want.",
      },
      {
        question: "How do I get paid?",
        answer:
          "Once Movrr launches, rewards can be redeemed directly in the app. You'll see clear earnings breakdowns for every verified ride, so you always know how your rewards are calculated.",
      },
      {
        question: "Can I use Movrr while working for delivery apps?",
        answer:
          "Yes. Many riders plan to use Movrr alongside apps like Thuisbezorgd, UberEats, or Flink. You'll keep 100% of your delivery earnings while earning extra from Movrr campaigns at the same time.",
      },
      {
        question: "Do I need prior experience?",
        answer:
          "No experience needed. If you can ride a bike confidently and safely, you're ready. We'll provide everything you need to get started once Movrr launches.",
      },
      {
        question: "When will the Movrr app be available?",
        answer:
          "The Movrr mobile app is currently in development. Signing up for the pre-launch waitlist ensures you'll be notified as soon as the app launches in your city, so you can start riding right away.",
      },
    ],
  },
  waitlistSection: {
    titleLines: ["READY TO", "START EARNING?"],
    subtitle: "Join the pre-launch. Be among the first riders in your city.",
  },
  waitlistForm: {
    labels: {
      name: "Full Name",
      email: "Email",
      city: "City",
      bikeOwnership: "Own a Bike?",
    },
    placeholders: {
      name: "Enter your name",
      email: "Enter your email",
      city: "Your city",
      bikeOwnership: "Select option",
    },
    bikeOptions: {
      yes: "Yes, I own a bike",
      no: "No, but interested",
      planning: "Planning to get one",
    },
    validation: {
      nameMin: "Name must be at least 2 characters",
      emailInvalid: "Please enter a valid email address",
      cityMin: "City must be at least 2 characters",
      bikeRequired: "Please select an option",
    },
    actions: {
      submitting: "Joining...",
      submit: "Join the Waitlist",
      reset: "Join Another Rider",
    },
    success: {
      title: "Welcome to the Movement!",
      description:
        "You're now on the waitlist. We'll notify you when Movrr launches in your city.",
    },
    messages: {
      success: "Successfully joined the waitlist!",
      genericError: "Something went wrong. Please try again.",
    },
    consent: {
      line1: "By joining, you agree to receive updates about Movrr's launch.",
      line2: "No spam. Just the good stuff. Unsubscribe anytime.",
    },
  },
  footer: {
    logoAlt: "Movrr Icon",
    tagline: "Transform your ride. Transform your life.",
    privacy: "Privacy",
    terms: "Terms",
    copyrightSuffix: "Movrr. All rights reserved.",
  },
  privacy: {
    backToMovrr: "Back to Movrr",
    title: "Privacy Policy",
    subtitle:
      "Your privacy matters. This page explains what we collect and how we use it.",
    lastUpdated: "Last updated",
    sections: [
      {
        title: "1. Information We Collect",
        paragraph: "When you join the Movrr waitlist, we may collect:",
        bullets: [
          "Name and contact details (like email address)",
          "City or preferred riding area",
        ],
      },
      {
        title: "2. How We Use Your Information",
        bullets: [
          "Notify you when Movrr launches",
          "Share relevant updates and opportunities",
          "Improve the platform before launch",
        ],
      },
      {
        title: "3. Your Rights",
        paragraph:
          "You may request to access, update, or delete your data at any time. Just contact us using the details below.",
      },
      {
        title: "4. Contact Us",
        contact: {
          emailLabel: "Email",
          emailValue: "legal@movrr.nl",
          supportLabel: "Support",
          supportValue: "support@movrr.nl",
          addressLabel: "Address",
          addressLine1: "Movrr Legal Team",
          addressLine2: "Amsterdam, Netherlands",
        },
      },
    ],
  },
  terms: {
    backToMovrr: "Back to Movrr",
    title: "Terms of Service",
    subtitle: "Simple rules for using Movrr before launch.",
    lastUpdated: "Last updated",
    sections: [
      {
        title: "1. Agreement",
        paragraph:
          "By joining the Movrr waitlist or using our website, you agree to these Terms. If you do not agree, please do not use the site.",
      },
      {
        title: "2. Use of Movrr",
        paragraph:
          "Movrr is currently in pre-launch. We provide information and allow you to join the rider waitlist. When live, additional terms may apply.",
      },
      {
        title: "3. Prohibited Use",
        bullets: [
          "Do not provide false or misleading information",
          "Do not attempt to disrupt or misuse the site",
          "Do not violate applicable laws while using Movrr",
        ],
      },
      {
        title: "4. No Guarantee",
        paragraph:
          "Movrr is in development. We do not guarantee when the platform will launch or that you will be selected for campaigns.",
      },
      {
        title: "5. Contact Us",
        contact: {
          emailLabel: "Email",
          emailValue: "legal@movrr.nl",
          supportLabel: "Support",
          supportValue: "support@movrr.nl",
          addressLabel: "Address",
          addressLine1: "Movrr Legal Team",
          addressLine2: "Amsterdam, Netherlands",
        },
      },
    ],
  },
  unauthorized: {
    title: "ACCESS DENIED",
    description: "You don't have permission to access the admin dashboard.",
    note: "This incident has been logged for security purposes.",
    returnHome: "Return to Homepage",
    tryDifferentAccount: "Try Different Account",
  },
};

export type { Dictionary } from "@/locales/types";
