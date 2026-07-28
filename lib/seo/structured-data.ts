import type { Dictionary, PageKey } from "@/locales/types";
import { PAGE_PATHS } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";
import {
  DEFAULT_SOCIAL_IMAGE,
  LEGAL_NAME,
  SEO_ROUTES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  getPageKeyFromPathname,
  localizedUrl,
} from "@/lib/seo/site";

type JsonLdNode = Record<string, unknown>;

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

const organization: JsonLdNode = {
  "@type": "Organization",
  "@id": organizationId,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: absoluteUrl("/icon"),
    contentUrl: absoluteUrl("/icon"),
    width: 512,
    height: 512,
    caption: "MOVRR",
  },
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rotterdam",
    addressCountry: "NL",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@movrr.nl",
      availableLanguage: ["English", "Dutch"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@movrr.nl",
      availableLanguage: ["English", "Dutch"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/showcase/movrr.app/",
    "https://www.instagram.com/movrr.app/",
    "https://www.tiktok.com/@movrr.app",
  ],
  knowsAbout: [
    "cycling rewards",
    "verified urban movement",
    "movement-based brand campaigns",
    "active mobility",
  ],
};

function pageSchemaType(pageKey: PageKey): string {
  return SEO_ROUTES[pageKey].schemaType ?? "WebPage";
}

function breadcrumbName(
  locale: Locale,
  dictionary: Dictionary,
  pageKey: PageKey,
): string {
  if (pageKey === "home") return locale === "nl" ? "Start" : "Home";
  return dictionary.metadata.pages[pageKey].title;
}

export function buildStructuredData(
  locale: Locale,
  dictionary: Dictionary,
  pathname: string,
): JsonLdNode {
  const graph: JsonLdNode[] = [
    organization,
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      description: dictionary.metadata.pages.home.description,
      inLanguage: ["en", "nl"],
      publisher: { "@id": organizationId },
    },
  ];

  const pageKey = getPageKeyFromPathname(pathname);
  if (!pageKey || !SEO_ROUTES[pageKey].indexable) {
    return { "@context": "https://schema.org", "@graph": graph };
  }

  const route = SEO_ROUTES[pageKey];
  const page = dictionary.metadata.pages[pageKey];
  const canonicalUrl = localizedUrl(locale, PAGE_PATHS[pageKey]);
  const pageId = `${canonicalUrl}#webpage`;
  const imageUrl = absoluteUrl(route.image ?? DEFAULT_SOCIAL_IMAGE);

  const webPage: JsonLdNode = {
    "@type": pageSchemaType(pageKey),
    "@id": pageId,
    url: canonicalUrl,
    name: page.title,
    description: page.description,
    inLanguage: locale,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    publisher: { "@id": organizationId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${canonicalUrl}#primaryimage`,
      url: imageUrl,
      contentUrl: imageUrl,
      caption: page.title,
      representativeOfPage: true,
    },
  };

  if (pageKey === "home") {
    webPage.mainEntity = dictionary.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }));
  }

  if (pageKey !== "home") {
    const breadcrumbId = `${canonicalUrl}#breadcrumb`;
    webPage.breadcrumb = { "@id": breadcrumbId };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: breadcrumbName(locale, dictionary, "home"),
          item: localizedUrl(locale, "/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbName(locale, dictionary, pageKey),
          item: canonicalUrl,
        },
      ],
    });
  }

  graph.push(webPage);
  return { "@context": "https://schema.org", "@graph": graph };
}
