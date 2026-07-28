import type { Metadata } from "next";
import { LandingPage } from "@/components/pages/landing-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "home");
}

export default async function MovrrLanding() {
  const dictionary = await getDictionary("en");
  return <LandingPage locale="en" dictionary={dictionary} />;
}

