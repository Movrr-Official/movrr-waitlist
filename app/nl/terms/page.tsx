import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/terms-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata("nl", dictionary, "terms", "/terms");
}

export default async function TermsOfServicePageNl() {
  const dictionary = await getDictionary("nl");
  return <TermsPage locale="nl" dictionary={dictionary} />;
}

