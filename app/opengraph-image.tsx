import { ImageResponse } from "next/og";

export const alt = "MOVRR — everyday rides, rewarded";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #061f18 0%, #0b3a2b 58%, #8cff73 160%)",
          color: "#f6fff6",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            right: -80,
            top: -120,
            borderRadius: 999,
            border: "1px solid rgba(184,255,164,0.22)",
            boxShadow: "0 0 0 72px rgba(184,255,164,0.035)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 76px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 58,
                height: 58,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
                background: "#b8ffa4",
                color: "#08251b",
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              M
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                fontWeight: 750,
                letterSpacing: "-0.04em",
              }}
            >
              MOVRR
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                maxWidth: 850,
                fontSize: 86,
                lineHeight: 0.94,
                fontWeight: 750,
                letterSpacing: "-0.055em",
              }}
            >
              Everyday rides, rewarded.
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 810,
                fontSize: 25,
                lineHeight: 1.4,
                color: "rgba(246,255,246,0.72)",
              }}
            >
              Join early access. Ride your existing routes. Earn per verified
              kilometre.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.08em",
              color: "rgba(184,255,164,0.72)",
            }}
          >
            MOVRR.NL · EARLY ACCESS
          </div>
        </div>
      </div>
    ),
    size,
  );
}
