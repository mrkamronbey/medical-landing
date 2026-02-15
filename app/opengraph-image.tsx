import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dr. Asror To'rayev — Urolog-Androlog Samarqand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 50%, #f0f9ff 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(13, 148, 136, 0.08)",
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
            background: "rgba(13, 148, 136, 0.06)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "0 60px",
            position: "relative",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "rgba(13, 148, 136, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            🩺
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#0f172a",
              textAlign: "center",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Dr. Asror To&apos;rayev
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#0d9488",
              textAlign: "center",
              display: "flex",
            }}
          >
            Urolog-Androlog • Samarqand
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: "#64748b",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Oliy toifali shifokor • HoLEP • Laparoskopiya • PCNL
          </div>

          {/* Clinics */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 10,
            }}
          >
            {["Sintez Lab", "Ixlos Med", "ECU Medical"].map((name) => (
              <div
                key={name}
                style={{
                  padding: "10px 24px",
                  borderRadius: 12,
                  background: "rgba(13, 148, 136, 0.08)",
                  color: "#0d9488",
                  fontSize: 18,
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #0d9488, #7c3aed)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
