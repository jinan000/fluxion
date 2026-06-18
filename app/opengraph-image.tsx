import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt =
  "FLUXION UAE — Premium Customs Clearance & Freight Forwarding | GCC Logistics";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Load the logo as base64
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0F2027 0%, #1B4D54 50%, #203A43 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.06,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(0, 152, 166, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(0, 152, 166, 0.1)",
            display: "flex",
          }}
        />

        {/* Top bar accent */}
        <div
          style={{
            width: "100%",
            height: 4,
            display: "flex",
            background: "linear-gradient(90deg, #0098A6, #1B4D54, #0098A6)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "60px 80px",
            flex: 1,
          }}
        >
          {/* Logo */}
          <img src={logoSrc} height={60} style={{ marginBottom: 40 }} />

          {/* Tagline */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              marginBottom: 16,
              display: "flex",
            }}
          >
            Moving Cargo Beyond Borders
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 22,
              color: "rgba(255, 255, 255, 0.65)",
              lineHeight: 1.5,
              maxWidth: 700,
              display: "flex",
            }}
          >
            Premium Customs Clearance • Freight Forwarding • Container
            Transportation • GCC Cargo Movement
          </div>

          {/* Service pills */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              "Sharjah, UAE",
              "All GCC Countries",
              "ISO 9001 Certified",
              "24/7 Support",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 20px",
                  borderRadius: 50,
                  border: "1px solid rgba(0, 152, 166, 0.4)",
                  background: "rgba(0, 152, 166, 0.1)",
                  color: "#0098A6",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 80px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.4)",
              display: "flex",
            }}
          >
            fluxionuae.com
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.4)",
              display: "flex",
            }}
          >
            +971 58 925 0501 • info@fluxionuae.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
