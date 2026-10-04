import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";

import "./globals.css";
import { site } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { MotionProvider } from "@/components/layout/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.profession}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortBio,
  keywords: ["filmmaker", "director", "cinematographer", "portfolio", "short films", "documentary"],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.name} — ${site.profession}`,
    description: site.shortBio,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.profession}`,
    description: site.shortBio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-ink text-paper">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <div id="top" />
        <div aria-hidden className="grain-overlay" />
        <MotionProvider>
          <Navbar />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
