import type { Metadata } from "next";
import { UnauthorizedPage } from "@/components/pages/unauthorized-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata("nl", dictionary, "unauthorized", "/unauthorized");
}

export default async function UnauthorizedPageNl() {
  const dictionary = await getDictionary("nl");
  return <UnauthorizedPage locale="nl" dictionary={dictionary} />;
}

