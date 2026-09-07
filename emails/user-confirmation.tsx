import { Link } from "@react-email/components";
import {
  BaseEmail,
  DataRow,
  DataTable,
  Paragraph,
  SupportingText,
  colors,
} from "./_components/base-email";

interface UserConfirmationEmailProps {
  name: string;
  city: string;
  bikeOwnership?: string;
  ctaUrl?: string;
  locale?: string;
}

const bikeStatusText: Record<string, string> = {
  own: "You already own a bike — you’re ready to ride.",
  interested: "No bike yet — no problem. We’ll keep you updated.",
  planning: "Getting one soon — great timing to join early.",
};

export default function UserConfirmationEmail({
  name,
  city,
  bikeOwnership,
  ctaUrl = "https://movrr.nl",
  locale = "en",
}: UserConfirmationEmailProps) {
  const bikeNote = bikeOwnership ? bikeStatusText[bikeOwnership] : undefined;

  return (
    <BaseEmail
      locale={locale}
      previewText={`You're on the MOVRR waitlist for ${city}.`}
      title={`You're in, ${name}.`}
      intro={`You're on the early-access list for ${city}. We'll be in touch when MOVRR goes live in your city, with everything you need to get started.`}
      actionLabel="Visit MOVRR"
      actionUrl={ctaUrl}
      footerNote="You received this transactional email because you joined the MOVRR waitlist."
    >
      <DataTable>
        <DataRow label="City" value={city} />
        {bikeNote ? <DataRow label="Bike status" value={bikeNote} /> : null}
      </DataTable>
      <Paragraph>
        In the meantime, follow{" "}
        <Link href="https://www.instagram.com/movrr.app/" style={{ color: colors.accent, textDecoration: "underline" }}>
          @movrr.app
        </Link>{" "}
        on Instagram for launch updates and behind-the-scenes news from Rotterdam.
      </Paragraph>
      <SupportingText>Questions? Reply to this email.</SupportingText>
    </BaseEmail>
  );
}

export function userConfirmationText({
  name,
  city,
  bikeOwnership,
  ctaUrl = "https://movrr.nl",
}: UserConfirmationEmailProps) {
  const lines = [
    `You're on the MOVRR waitlist, ${name}.`,
    "",
    `City: ${city}`,
  ];
  if (bikeOwnership) {
    lines.push(`Bike status: ${bikeStatusText[bikeOwnership] ?? bikeOwnership}`);
  }
  lines.push(
    "",
    `Visit MOVRR: ${ctaUrl}`,
    "Instagram: https://www.instagram.com/movrr.app/",
    "",
    "Questions? Reply to this email.",
    "The MOVRR Team",
  );
  return lines.join("\n");
}
