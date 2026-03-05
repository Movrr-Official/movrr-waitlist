import type { Metadata } from "next";
import { LandingPage } from "@/components/pages/landing-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata("nl", dictionary, "home", "/");
}

export default async function MovrrLandingNl() {
  const dictionary = await getDictionary("nl");
  return <LandingPage locale="nl" dictionary={dictionary} />;
}

