import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/terms-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "terms");
}

export default async function TermsOfServicePage() {
  const dictionary = await getDictionary("en");
  return <TermsPage locale="en" dictionary={dictionary} />;
}

