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
  metadataBase: new URL("https://fluxionuae.com"),
  alternates: {
    canonical: "/",
  },
  title: "FLUXION — Premium Customs Clearance & Freight Forwarding | GCC Logistics",
  description:
    "FLUXION delivers premium customs clearance, freight forwarding, container transportation, and cargo movement solutions across the GCC. Headquartered in Sharjah, UAE.",
  keywords: [
    "customs clearance UAE",
    "customs clearance Dubai",
    "customs clearance Sharjah",
    "customs brokerage UAE",
    "customs broker Sharjah",
    "freight forwarding GCC",
    "freight forwarder Dubai",
    "container transportation",
    "cargo movement GCC",
    "oversized cargo transport",
    "logistics Sharjah",
    "logistics company Dubai",
    "cross-border logistics",
    "heavy equipment transport",
    "port customs clearance UAE",
    "GCC land transport",
    "sea freight forwarding UAE",
    "air freight forwarding Dubai",
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
  verification: {
    google: "lByDMlyvO8Z_FkO2CRjKvoI6XG1VD7Q5Lb0Yotmccgo",
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
      <body className="min-h-full flex flex-col font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "FLUXION Logistics",
              "image": "https://fluxionuae.com/images/fluxion_square.png",
              "@id": "https://fluxionuae.com/#organization",
              "url": "https://fluxionuae.com",
              "telephone": "+971589250501",
              "email": "info@fluxionuae.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sharjah Free Zone",
                "addressLocality": "Sharjah",
                "addressRegion": "Sharjah",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.277525,
                "longitude": 55.680447
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://wa.me/971589250501"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
