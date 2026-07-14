import type { Metadata } from "next";
import { AccountDeletionPage } from "@/components/pages/account-deletion-page";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata(
    "nl",
    dictionary,
    "accountDeletion",
    "/account-deletion"
  );
}

export default async function AccountDeletionRouteNl() {
  const dictionary = await getDictionary("nl");
  return <AccountDeletionPage locale="nl" dictionary={dictionary} />;
}
