import {
  BaseEmail,
  DataRow,
  DataTable,
  SupportingText,
} from "./_components/base-email";

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  city: string;
  bikeOwnership?: string;
  timestamp: string;
  id?: string;
  source?: string;
  adminUrl?: string;
  locale?: string;
  timeZone?: string;
}

const bikeStatusText: Record<string, string> = {
  own: "Owns a bike",
  interested: "Does not own a bike, but is interested",
  planning: "Planning to get a bike",
};

function formatTimestamp(ts: string, locale = "en-US", timeZone = "UTC") {
  try {
    const date = new Date(ts);
    if (Number.isNaN(date.getTime())) return ts;
    return `${date.toLocaleString(locale, {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone,
    })} ${timeZone}`;
  } catch {
    return ts;
  }
}

export default function AdminNotificationEmail({
  name,
  email,
  city,
  bikeOwnership,
  timestamp,
  id,
  source,
  adminUrl,
  locale = "en-US",
  timeZone = "UTC",
}: AdminNotificationEmailProps) {
  return (
    <BaseEmail
      locale={locale}
      contextLabel="Internal notification"
      previewText={`New MOVRR waitlist registration: ${name} in ${city}.`}
      title="New waitlist registration"
      intro="A new potential rider has joined the MOVRR waitlist."
      actionLabel={adminUrl ? "View in admin dashboard" : undefined}
      actionUrl={adminUrl}
      footerNote="Internal MOVRR notification. Do not forward or reply."
    >
      <DataTable>
        <DataRow label="Name" value={name} />
        {id ? <DataRow label="ID" value={id} /> : null}
        <DataRow label="Email" value={email} />
        <DataRow label="City" value={city} />
        <DataRow label="Bike status" value={bikeOwnership ? (bikeStatusText[bikeOwnership] ?? bikeOwnership) : "Not provided"} />
        <DataRow label="Registered" value={formatTimestamp(timestamp, locale, timeZone)} />
        {source ? <DataRow label="Source" value={source} /> : null}
      </DataTable>
      <SupportingText>
        This message was generated automatically by the MOVRR waitlist system.
      </SupportingText>
    </BaseEmail>
  );
}

export function adminNotificationText({
  name,
  email,
  city,
  bikeOwnership,
  timestamp,
  id,
  source,
  adminUrl,
  locale = "en-US",
  timeZone = "UTC",
}: AdminNotificationEmailProps) {
  const lines = [`New MOVRR waitlist registration — ${name} (${city})`];
  if (id) lines.push(`ID: ${id}`);
  lines.push(
    `Email: ${email}`,
    `City: ${city}`,
    `Bike status: ${bikeOwnership ? (bikeStatusText[bikeOwnership] ?? bikeOwnership) : "Not provided"}`,
    `Registered: ${formatTimestamp(timestamp, locale, timeZone)}`,
  );
  if (source) lines.push(`Source: ${source}`);
  if (adminUrl) lines.push("", `Admin dashboard: ${adminUrl}`);
  lines.push("", "Internal MOVRR notification. Do not forward or reply.");
  return lines.join("\n");
}
