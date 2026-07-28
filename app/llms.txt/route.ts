import { SITE_URL } from "@/lib/seo/site";

const llmsText = `# MOVRR

> MOVRR is a movement-based rewards platform. Riders earn for verified cycling on routes they already take. This waitlist site registers early access for upcoming city launches.

MOVRR is based in Rotterdam, Netherlands, and is launching city by city, beginning with Rotterdam and The Hague. English is the default language; Dutch pages are available under /nl.

## Public pages

- [Home / early access](${SITE_URL}/): Waitlist landing page for riders joining early access.
- [Dutch home](${SITE_URL}/nl): Dutch-language waitlist landing page.
- [Privacy policy](${SITE_URL}/privacy): Personal data, ride data, and user rights.
- [Privacy policy (Dutch)](${SITE_URL}/nl/privacy): Dutch privacy policy.
- [Terms of service](${SITE_URL}/terms): Terms for joining the waitlist and using the site.
- [Terms of service (Dutch)](${SITE_URL}/nl/terms): Dutch terms of service.
- [Account deletion](${SITE_URL}/account-deletion): How to delete a MOVRR account and associated data.
- [Account deletion (Dutch)](${SITE_URL}/nl/account-deletion): Dutch account deletion instructions.
- [XML sitemap](${SITE_URL}/sitemap.xml): Canonical index of public English and Dutch pages.

Contact: hello@movrr.nl
`;

export function GET() {
  return new Response(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
