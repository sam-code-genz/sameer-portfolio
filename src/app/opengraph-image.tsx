import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name} — ${site.profession}`;
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
          justifyContent: "space-between",
          background: "#0a0a09",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c2893f",
          }}
        >
          {site.profession}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            color: "#f4f0e8",
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
