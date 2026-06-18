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
  title:
    "FLUXION UAE — #1 Customs Clearance & Freight Forwarding | Sharjah Logistics Company",
  description:
    "FLUXION UAE is the leading customs clearance, freight forwarding, container transportation & cargo movement company in UAE. Serving Dubai, Sharjah, Abu Dhabi & all GCC countries. Get a free quote today.",
  keywords: [
    // ── Brand Keywords ──
    "Fluxion",
    "FLUXION",
    "Fluxion UAE",
    "Fluxion logistics",
    "Fluxion cargo",
    "Fluxion Sharjah",
    "Fluxion Dubai",
    "Fluxion customs clearance",
    "Fluxion freight forwarding",
    "Fluxion shipping",
    "Fluxion transport",
    "Fluxion logistics UAE",
    "fluxionuae",
    "fluxionuae.com",

    // ── Customs Clearance Keywords ──
    "customs clearance UAE",
    "customs clearance Dubai",
    "customs clearance Sharjah",
    "customs clearance Abu Dhabi",
    "customs brokerage UAE",
    "customs broker Sharjah",
    "customs broker Dubai",
    "customs agent UAE",
    "import clearance UAE",
    "export clearance UAE",
    "export clearance Dubai",
    "port customs clearance UAE",
    "customs clearance Jebel Ali",
    "Hamriyah free zone customs",
    "SAIF zone customs clearance",
    "Sharjah free zone customs",
    "Dubai customs broker",
    "trade compliance UAE",
    "duty optimization UAE",
    "tariff classification UAE",
    "HS code classification UAE",

    // ── Freight Forwarding Keywords ──
    "freight forwarding UAE",
    "freight forwarding Dubai",
    "freight forwarding Sharjah",
    "freight forwarding GCC",
    "freight forwarder Dubai",
    "freight forwarder UAE",
    "sea freight forwarding UAE",
    "air freight forwarding Dubai",
    "air freight UAE",
    "sea freight UAE",
    "land freight GCC",
    "international freight forwarding UAE",
    "door to door freight UAE",

    // ── Container & Cargo Keywords ──
    "container transportation UAE",
    "container transport Dubai",
    "cargo movement GCC",
    "cargo company Sharjah",
    "cargo company Dubai",
    "cargo company UAE",
    "FCL shipping UAE",
    "LCL shipping UAE",
    "full container load UAE",
    "less than container load UAE",

    // ── Specialized Transport Keywords ──
    "oversized cargo transport UAE",
    "heavy equipment transport UAE",
    "low bed trailer UAE",
    "heavy lift cargo UAE",
    "project cargo UAE",
    "project cargo logistics",
    "abnormal load transport UAE",
    "construction equipment transport",
    "oil and gas equipment transport UAE",

    // ── Cross-Border & GCC Keywords ──
    "cross-border logistics UAE",
    "GCC land transport",
    "GCC cargo transportation",
    "cross-border cargo GCC",
    "Saudi Arabia freight from UAE",
    "Oman freight forwarding",
    "Qatar cargo transport",
    "Kuwait cargo from UAE",
    "Bahrain shipping from UAE",

    // ── Location & Company Keywords ──
    "logistics company Sharjah",
    "logistics company Dubai",
    "logistics company Abu Dhabi",
    "logistics company UAE",
    "shipping company UAE",
    "shipping company Dubai",
    "shipping company Sharjah",
    "transport company UAE",
    "best logistics company UAE",
    "top freight forwarder Dubai",
    "reliable logistics Sharjah",
    "supply chain management UAE",
    "warehouse logistics Sharjah",
    "3PL logistics UAE",
  ],
  authors: [{ name: "FLUXION Logistics", url: "https://fluxionuae.com" }],
  creator: "FLUXION Logistics",
  publisher: "FLUXION Logistics",
  category: "Logistics & Transportation",
  openGraph: {
    title: "FLUXION UAE — Premium Customs Clearance & Freight Forwarding | UAE Logistics",
    description:
      "FLUXION UAE is the leading customs clearance, freight forwarding, and cargo transportation company in UAE. Serving all GCC countries from Sharjah. Request a free quote.",
    type: "website",
    locale: "en_AE",
    siteName: "FLUXION UAE Logistics",
    url: "https://fluxionuae.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FLUXION UAE Logistics — Premium Customs Clearance & Freight Forwarding in UAE",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLUXION UAE — #1 Customs Clearance & Freight Forwarding in UAE",
    description:
      "FLUXION UAE is the premium customs clearance, freight forwarding, container transportation & cargo movement across the GCC. Headquartered in Sharjah, UAE.",
    images: ["/images/og-image.png"],
    creator: "@fluxionuae",
    site: "@fluxionuae",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "lByDMlyvO8Z_FkO2CRjKvoI6XG1VD7Q5Lb0Yotmccgo",
  },
  other: {
    "geo.region": "AE-SH",
    "geo.placename": "Sharjah",
    "geo.position": "25.277525;55.680447",
    "ICBM": "25.277525, 55.680447",
    "DC.title": "FLUXION Logistics — Customs Clearance & Freight Forwarding UAE",
    "DC.creator": "FLUXION Logistics",
    "DC.subject": "Customs Clearance, Freight Forwarding, Logistics, Cargo Transport",
    "DC.description":
      "Premium customs clearance, freight forwarding, and cargo transportation across UAE and GCC",
    "DC.publisher": "FLUXION Logistics",
    "DC.language": "en",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "7 days",
  },
};

// ── Structured Data: Organization ──
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fluxionuae.com/#organization",
  name: "FLUXION Logistics",
  alternateName: ["FLUXION", "Fluxion UAE", "Fluxion Logistics UAE"],
  url: "https://fluxionuae.com",
  logo: {
    "@type": "ImageObject",
    url: "https://fluxionuae.com/images/logo.png",
    width: 1548,
    height: 509,
  },
  image: "https://fluxionuae.com/images/fluxion_square.png",
  description:
    "FLUXION is a premium customs clearance, freight forwarding, and cargo transportation company headquartered in Sharjah, UAE. Serving all GCC countries with reliable logistics solutions.",
  email: "info@fluxionuae.com",
  telephone: "+971589250501",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sharjah Free Zone",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    postalCode: "00000",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.277525,
    longitude: 55.680447,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971589250501",
      contactType: "customer service",
      areaServed: ["AE", "SA", "OM", "QA", "KW", "BH"],
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+971589250501",
      contactType: "sales",
      areaServed: ["AE", "SA", "OM", "QA", "KW", "BH"],
      availableLanguage: ["English", "Arabic"],
    },
  ],
  sameAs: [
    "https://wa.me/971589250501",
    "https://www.instagram.com/fluxion_uae",
  ],
  foundingDate: "2009",
  foundingLocation: {
    "@type": "Place",
    name: "Sharjah, United Arab Emirates",
  },
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
  ],
  knowsAbout: [
    "Customs Clearance",
    "Freight Forwarding",
    "Container Transportation",
    "Cargo Movement",
    "Oversized Cargo Transport",
    "Heavy Equipment Transport",
    "Cross-Border Logistics",
    "Project Cargo",
    "Supply Chain Management",
    "Trade Compliance",
  ],
};

// ── Structured Data: WebSite with SearchAction ──
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fluxionuae.com/#website",
  name: "FLUXION Logistics",
  alternateName: "FLUXION",
  url: "https://fluxionuae.com",
  description:
    "FLUXION — Premium customs clearance, freight forwarding, container transportation, and cargo movement solutions across the GCC.",
  publisher: { "@id": "https://fluxionuae.com/#organization" },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://fluxionuae.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ── Structured Data: LocalBusiness (enhanced) ──
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fluxionuae.com/#localbusiness",
  name: "FLUXION Logistics",
  image: "https://fluxionuae.com/images/fluxion_square.png",
  url: "https://fluxionuae.com",
  telephone: "+971589250501",
  email: "info@fluxionuae.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sharjah Free Zone",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    postalCode: "00000",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.277525,
    longitude: 55.680447,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Riyadh" },
    { "@type": "City", name: "Jeddah" },
    { "@type": "City", name: "Muscat" },
    { "@type": "City", name: "Doha" },
    { "@type": "City", name: "Kuwait City" },
    { "@type": "City", name: "Manama" },
  ],
  sameAs: [
    "https://wa.me/971589250501",
    "https://www.instagram.com/fluxion_uae",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "FLUXION Logistics Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Customs Clearance Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UAE Customs Clearance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Import Clearance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Export Clearance" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Transportation Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freight Forwarding" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Container Transportation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "GCC Cargo Movement" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Specialized Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oversized Cargo Transport" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy Equipment Transport" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Cargo Logistics" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Border Transport" } },
        ],
      },
    ],
  },
};

// ── Structured Data: Service Schemas ──
const serviceSchemas = [
  {
    "@type": "Service",
    name: "UAE Customs Clearance",
    description:
      "Complete customs brokerage services across all UAE ports and free zones. Licensed customs brokers handling import/export documentation, tariff classification, and duty optimization.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    serviceType: "Customs Clearance",
  },
  {
    "@type": "Service",
    name: "Import Clearance",
    description:
      "Seamless import documentation, tariff classification, HS code classification, and duty optimization for all cargo types entering UAE.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    serviceType: "Import Clearance",
  },
  {
    "@type": "Service",
    name: "Export Clearance",
    description:
      "Expert export documentation, compliance management, and certificate of origin services for cargo leaving the UAE.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    serviceType: "Export Clearance",
  },
  {
    "@type": "Service",
    name: "Freight Forwarding",
    description:
      "End-to-end air freight, sea freight, and land freight forwarding solutions with optimized routing and competitive rates across the GCC.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Oman" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Bahrain" },
    ],
    serviceType: "Freight Forwarding",
  },
  {
    "@type": "Service",
    name: "Container Transportation",
    description:
      "Full container load (FCL) and less than container load (LCL) transportation across UAE ports including Jebel Ali and Hamriyah with GPS-tracked modern fleet.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    serviceType: "Container Transportation",
  },
  {
    "@type": "Service",
    name: "GCC Cargo Movement",
    description:
      "Cross-border cargo transportation connecting all six GCC nations — UAE, Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain — with reliability and speed.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Oman" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Bahrain" },
    ],
    serviceType: "Cargo Transportation",
  },
  {
    "@type": "Service",
    name: "Oversized Cargo Transport",
    description:
      "Specialized transportation for heavy, oversized, and abnormal cargo with route planning, permits, and police escorts across the UAE and GCC.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    serviceType: "Oversized Cargo Transport",
  },
  {
    "@type": "Service",
    name: "Heavy Equipment Transport",
    description:
      "Low-bed trailer transport for construction, oil & gas, and industrial heavy equipment across the UAE and GCC region.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    serviceType: "Heavy Equipment Transport",
  },
  {
    "@type": "Service",
    name: "Project Cargo Logistics",
    description:
      "Comprehensive project logistics including planning, permits, specialized handling, and turnkey cargo solutions for large-scale industrial projects.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    serviceType: "Project Cargo",
  },
  {
    "@type": "Service",
    name: "Cross-Border Transport",
    description:
      "Efficient border-crossing logistics with pre-clearance, transit documentation, and seamless customs coordination across GCC borders.",
    provider: { "@id": "https://fluxionuae.com/#organization" },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Oman" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Bahrain" },
    ],
    serviceType: "Cross-Border Transport",
  },
].map((s) => ({ "@context": "https://schema.org", ...s }));

// ── Structured Data: BreadcrumbList ──
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://fluxionuae.com",
    },
  ],
};

// ── Structured Data: FAQ Schema ──
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does FLUXION offer in the UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FLUXION offers comprehensive logistics services including UAE customs clearance, import and export clearance, freight forwarding (air, sea, and land), container transportation (FCL & LCL), GCC cargo movement, oversized cargo transport, heavy equipment transport, project cargo logistics, and cross-border transport across all six GCC nations.",
      },
    },
    {
      "@type": "Question",
      name: "Where is FLUXION located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FLUXION is headquartered in Sharjah Free Zone, United Arab Emirates. We serve the entire UAE including Dubai, Abu Dhabi, and Sharjah, as well as all GCC countries: Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.",
      },
    },
    {
      "@type": "Question",
      name: "Does FLUXION handle customs clearance at Jebel Ali port?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FLUXION provides customs clearance services at all major UAE ports including Jebel Ali, Hamriyah Free Zone, Sharjah Free Zone (SAIF Zone), and all other free zones and ports across the UAE. Our licensed customs brokers handle complete documentation and compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can FLUXION transport oversized cargo and heavy equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FLUXION specializes in oversized cargo and heavy equipment transport. We operate low-bed trailers and specialized heavy-lift equipment for construction machinery, oil & gas equipment, and industrial cargo. Our services include route planning, obtaining permits, and arranging police escorts.",
      },
    },
    {
      "@type": "Question",
      name: "Does FLUXION offer cross-border cargo transport to Saudi Arabia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FLUXION offers cross-border cargo transportation to Saudi Arabia and all other GCC countries. We handle pre-clearance documentation, transit permits, and seamless border-crossing coordination for cargo moving between UAE, Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a freight quote from FLUXION?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request a freight quote from FLUXION by visiting our website at fluxionuae.com and filling out the contact form, calling us at +971 58 925 0501, emailing info@fluxionuae.com, or messaging us on WhatsApp. We respond within 2 hours during business hours.",
      },
    },
    {
      "@type": "Question",
      name: "What GCC countries does FLUXION serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FLUXION serves all six GCC (Gulf Cooperation Council) countries: United Arab Emirates (Dubai, Sharjah, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah, Dammam), Oman (Muscat, Sohar, Salalah), Qatar (Doha), Kuwait (Kuwait City), and Bahrain (Manama).",
      },
    },
    {
      "@type": "Question",
      name: "Is FLUXION a licensed customs broker in the UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FLUXION is a fully licensed customs broker in the UAE with ISO 9001 certified operations. Our team of certified customs experts handles all documentation, tariff classification, HS code classification, duty optimization, and trade compliance for imports and exports.",
      },
    },
  ],
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
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-body">
        {children}

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Structured Data: WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Structured Data: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Structured Data: Services (bundled) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchemas),
          }}
        />

        {/* Structured Data: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Structured Data: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </body>
    </html>
  );
}
