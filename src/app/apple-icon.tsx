import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a09",
          color: "#f4f0e8",
          fontSize: 86,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
        }}
      >
        {initials}
        <span style={{ color: "#c2893f" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
