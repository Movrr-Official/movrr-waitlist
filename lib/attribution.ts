/**
 * Classifies a signup's acquisition channel from UTM parameters and HTTP referrer.
 * Computed server-side at insert time so every BI query can filter by channel
 * without re-parsing raw UTM strings.
 *
 * Priority: utm_medium > utm_source > referrer hostname > "direct"
 *
 * Returns one of:
 *   "paid"           — CPC / display / paid social
 *   "social"         — organic social media
 *   "organic_search" — SEO / unpaid search engine
 *   "email"          — email / newsletter campaign
 *   "partner"        — affiliate / partner / sponsored
 *   "referral"       — inbound link from an unclassified external domain
 *   "direct"         — no referrer, no UTM (typed URL, bookmark, dark social)
 */
export function classifyAcquisitionChannel(
  utmMedium: string | null | undefined,
  utmSource: string | null | undefined,
  referrer: string | null | undefined,
): string {
  const medium = utmMedium?.toLowerCase().trim() ?? "";
  const source = utmSource?.toLowerCase().trim() ?? "";

  if (medium) {
    if (
      [
        "cpc",
        "ppc",
        "paid",
        "paid_social",
        "paid-social",
        "paidsocial",
        "display",
      ].includes(medium)
    )
      return "paid";
    if (["social", "social-media", "social_media"].includes(medium))
      return "social";
    if (["email", "newsletter", "e-mail"].includes(medium)) return "email";
    if (["affiliate", "partner", "referral", "sponsored"].includes(medium))
      return "partner";
    if (["organic", "seo", "organic_search"].includes(medium))
      return "organic_search";
    if (medium === "direct") return "direct";
  }

  if (source) {
    const socialSources = [
      "instagram",
      "facebook",
      "twitter",
      "x",
      "tiktok",
      "linkedin",
      "youtube",
      "threads",
      "pinterest",
      "snapchat",
    ];
    const searchSources = [
      "google",
      "bing",
      "duckduckgo",
      "yahoo",
      "yandex",
      "baidu",
    ];
    if (socialSources.some((s) => source.includes(s))) return "social";
    if (searchSources.some((s) => source.includes(s)))
      return medium ? "paid" : "organic_search";
  }

  if (referrer) {
    try {
      const host = new URL(referrer).hostname.toLowerCase();
      const socialDomains = [
        "instagram.com",
        "facebook.com",
        "twitter.com",
        "x.com",
        "tiktok.com",
        "linkedin.com",
        "youtube.com",
        "threads.net",
        "pinterest.com",
        "snapchat.com",
        "t.co",
      ];
      const searchDomains = [
        "google.",
        "bing.com",
        "duckduckgo.com",
        "yahoo.com",
        "yandex.",
        "baidu.com",
      ];
      if (socialDomains.some((d) => host.includes(d))) return "social";
      if (searchDomains.some((d) => host.includes(d))) return "organic_search";
      if (host.length > 0) return "referral";
    } catch {
      // malformed referrer URL — fall through to "direct"
    }
  }

  return "direct";
}
