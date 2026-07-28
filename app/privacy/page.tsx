import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/privacy-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "privacy");
}

export default async function PrivacyPolicyPage() {
  const dictionary = await getDictionary("en");
  return <PrivacyPage locale="en" dictionary={dictionary} />;
}

