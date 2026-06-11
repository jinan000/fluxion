import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLUXION — Premium Customs Clearance & Freight Forwarding | GCC Logistics",
  description:
    "FLUXION delivers premium customs clearance, freight forwarding, container transportation, and cargo movement solutions across the GCC. Headquartered in Sharjah, UAE.",
  keywords: [
    "customs clearance UAE",
    "freight forwarding GCC",
    "container transportation",
    "cargo movement GCC",
    "oversized cargo transport",
    "logistics Sharjah",
    "cross-border logistics",
    "heavy equipment transport",
  ],
  openGraph: {
    title: "FLUXION — Moving Cargo Beyond Borders",
    description:
      "Premium customs clearance, freight forwarding, and cargo transportation across the GCC.",
    type: "website",
    locale: "en_AE",
    siteName: "FLUXION Logistics",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
