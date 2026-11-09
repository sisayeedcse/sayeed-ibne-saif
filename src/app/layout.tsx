import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorSpotlight from "@/components/ui/CursorSpotlight";

/* ── Fonts ──────────────────────────────────── */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* Giant footer wordmark — formal editorial masthead serif, full caps */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-masthead",
  display: "swap",
  weight: ["900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
  weight: ["400", "500", "600"],
});

/* ── Metadata ───────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://sayeedibnesaif.com"), // Update with real domain
  title: {
    default: "Sayeed Ibne Saif — Cloud & Infrastructure Engineer",
    template: "%s — Sayeed Ibne Saif",
  },
  description:
    "Portfolio and case studies of Sayeed Ibne Saif — final-year CSE student building from software foundations toward cloud and infrastructure engineering. Linux, networking, full-stack delivery.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayeedibnesaif.com",
    siteName: "Sayeed Ibne Saif",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F8F5",
};

/* ── Root Layout ────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable}`}>
      <body className="bg-paper text-dim font-sans antialiased min-h-screen">
        <CursorSpotlight />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded focus:text-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
