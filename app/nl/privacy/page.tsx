import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/privacy-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata("nl", dictionary, "privacy", "/privacy");
}

export default async function PrivacyPolicyPageNl() {
  const dictionary = await getDictionary("nl");
  return <PrivacyPage locale="nl" dictionary={dictionary} />;
}

