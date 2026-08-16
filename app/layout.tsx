import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/**
 * 01 — Type. Archivo carries everything; IBM Plex Mono carries the margins.
 * Both are preloaded and self-hosted by next/font, so there is no external
 * font request and no swap-driven layout shift.
 *
 * If Helvetica Now gets licensed: drop the woff2 files in, swap these two
 * loaders for next/font/local, and change --gl-font-grotesk. Nothing else
 * in the system moves.
 */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
  preload: true,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "getlanded® — Mumbai, weekends, pairs first",
  description:
    "We pair you with one other person who also just landed in Mumbai, then put 15 pairs in the same room on Saturday.",
  openGraph: {
    title: "getlanded® — Mumbai, weekends, pairs first",
    description:
      "We pair you with one other person who also just landed in Mumbai, then put 15 pairs in the same room on Saturday.",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f2f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
