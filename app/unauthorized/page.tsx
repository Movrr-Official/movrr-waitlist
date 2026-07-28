import type { Metadata } from "next";
import { UnauthorizedPage } from "@/components/pages/unauthorized-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "unauthorized");
}

export default async function Page() {
  const dictionary = await getDictionary("en");
  return <UnauthorizedPage locale="en" dictionary={dictionary} />;
}

