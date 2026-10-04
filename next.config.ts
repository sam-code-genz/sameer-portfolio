import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder art under public/images is hand-authored SVG (no scripts).
    // Swap in real JPG/PNG/WebP stills later and this stays safe to keep.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
