import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import ScrollBackground from "@/components/layout/ScrollBackground";

/* ── Fonts ──────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    default: "Sayeed Ibne Saif | Cloud & Infrastructure Engineer",
    template: "%s | Sayeed Ibne Saif",
  },
  description:
    "Portfolio of Sayeed Ibne Saif — a Computer Science and Engineering student building a career in cloud engineering, IT infrastructure, networking and software development.",
  keywords: [
    "Sayeed Ibne Saif",
    "Cloud Engineering",
    "IT Infrastructure",
    "Computer Networking",
    "Network Security",
    "Linux",
    "DevOps",
    "CSE Student",
    "Bangladesh",
    "Premier University",
  ],
  authors: [{ name: "Sayeed Ibne Saif" }],
  creator: "Sayeed Ibne Saif",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayeedibnesaif.com",
    siteName: "Sayeed Ibne Saif",
    title: "Sayeed Ibne Saif | Cloud & Infrastructure Engineer",
    description:
      "Final-year CSE student building toward cloud engineering, IT infrastructure and networking.",
    images: [
      {
        url: "/og-image.png", // Create and place in /public
        width: 1200,
        height: 630,
        alt: "Sayeed Ibne Saif — Cloud & Infrastructure Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayeed Ibne Saif | Cloud & Infrastructure Engineer",
    description:
      "Final-year CSE student building toward cloud engineering, IT infrastructure and networking.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0D12",
};

/* ── Root Layout ────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0A0D12] text-gray-100 font-sans antialiased relative min-h-screen">
        
        {/* Animated Parallax Background */}
        <ScrollBackground />

        {/* Minimal Theme Overlay for Readability */}
        <div 
          className="fixed inset-0 -z-40 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(10, 13, 18, 0.6) 0%, rgba(10, 13, 18, 0.85) 100%)"
          }}
          aria-hidden="true"
        />

        {/* Page Content */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
