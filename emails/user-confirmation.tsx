import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface UserConfirmationEmailProps {
  name: string;
  city: string;
  bikeOwnership?: string;
  ctaUrl?: string;
  locale?: string;
}

const bikeStatusText: Record<string, string> = {
  own: "You already own a bike — you're ready to ride.",
  interested: "No bike yet — no problem. We'll keep you updated.",
  planning: "Getting one soon — great timing to join early.",
};

export default function UserConfirmationEmail({
  name,
  city,
  bikeOwnership,
  ctaUrl = "https://movrr.nl",
  locale = "en",
}: UserConfirmationEmailProps) {
  const bikeNote = bikeOwnership ? bikeStatusText[bikeOwnership] : null;

  return (
    <Html lang={locale}>
      <Head />
      <Preview>You're on the MOVRR waitlist for {city}.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://res.cloudinary.com/dgy9bf37b/image/upload/v1769860718/movrr_logo_icon_green_no_bg_pycuih.png"
              width="32"
              height="32"
              alt="Movrr"
              style={logo}
            />
            <Text style={wordmark}>MOVRR</Text>
          </Section>

          <Section style={content}>
            <Heading style={h1}>You're in, {name}.</Heading>

            <Text style={text}>
              You're on the early access list for {city}. We'll be in touch when
              MOVRR goes live in your city — with everything you need to get
              started.
            </Text>

            {bikeNote ? (
              <Section style={infoBox}>
                <Text style={infoText}>{bikeNote}</Text>
              </Section>
            ) : null}

            <Text style={text}>
              In the meantime, follow{" "}
              <Link
                href="https://www.instagram.com/movrr.app/"
                style={{ color: "#4a9e6f" }}
              >
                @movrr.app
              </Link>{" "}
              on Instagram for launch updates and behind-the-scenes from
              Rotterdam.
            </Text>

            <Section style={ctaSection}>
              <Link
                href={ctaUrl}
                style={{
                  ...button,
                  fontFamily: main.fontFamily,
                  textDecoration: "none",
                }}
                aria-label="Visit Movrr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Movrr
              </Link>
            </Section>

            <Text style={footer}>
              Questions? Reply to this email.
              <br />
              The Movrr Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const header = {
  backgroundColor: "#2a3d30",
  padding: "28px 24px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto 8px",
  display: "block" as const,
};

const wordmark = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  letterSpacing: "0.12em",
  margin: "0",
};

const content = {
  padding: "36px 24px",
};

const h1 = {
  color: "#111111",
  fontSize: "26px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 20px 0",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const text = {
  color: "#555555",
  fontSize: "15px",
  lineHeight: "1.65",
  margin: "0 0 16px 0",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const infoBox = {
  backgroundColor: "#f5f9f6",
  border: "1px solid #d4e8dc",
  borderRadius: "8px",
  padding: "14px 18px",
  margin: "0 0 20px 0",
};

const infoText = {
  color: "#2a6644",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "28px 0",
};

const button = {
  backgroundColor: "#2a3d30",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "13px 28px",
  borderRadius: "10px",
  display: "inline-block",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const footer = {
  color: "#aaaaaa",
  fontSize: "13px",
  lineHeight: "1.5",
  margin: "28px 0 0 0",
  textAlign: "center" as const,
};
