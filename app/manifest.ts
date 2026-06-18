import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FLUXION UAE Logistics — Customs Clearance & Freight Forwarding",
    short_name: "FLUXION UAE",
    description:
      "FLUXION UAE is the premium customs clearance, freight forwarding, container transportation & cargo movement across the GCC. Headquartered in Sharjah, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFBFC",
    theme_color: "#1B4D54",
    orientation: "portrait-primary",
    categories: ["business", "logistics", "transportation"],
    icons: [
      {
        src: "/images/fluxion_square.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/fluxion_square.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
