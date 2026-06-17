import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Full-Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a14 0%, #11182b 60%, #1a2340 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7dd3fc",
            marginBottom: 24,
          }}
        >
          {site.brand}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#cbd5e1" }}>
          Full-Stack Developer — AI Apps &amp; E-commerce
        </div>
        <div style={{ fontSize: 28, marginTop: 48, color: "#7dd3fc" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
