import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import SiteLayout from "@/components/layout/SiteLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mjl-designs.vercel.app"),

  title: {
    default: "MJL Designs | Brand Identity & Creative Studio",
    template: "%s | MJL Designs",
  },

  description:
    "MJL Designs creates thoughtful brand identities, logo design, packaging, editorial design, and creative solutions that help businesses stand out with purpose.",

  keywords: [
    "graphic designer",
    "branding",
    "brand identity",
    "logo design",
    "packaging design",
    "editorial design",
    "creative studio",
    "visual identity",
    "MJL Designs",
    "Philippines graphic designer",
  ],

  authors: [
    {
      name: "Mary Joy Lacsa",
    },
  ],

  creator: "Mary Joy Lacsa",

  publisher: "MJL Designs",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://mjl-designs.vercel.app",
    title: "MJL Designs | Brand Identity & Creative Studio",
    description:
      "Thoughtful branding, logo design, packaging, editorial design, and creative solutions for growing businesses.",
    siteName: "MJL Designs",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MJL Designs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MJL Designs | Brand Identity & Creative Studio",
    description:
      "Thoughtful branding, logo design, packaging, editorial design, and creative solutions.",
    images: ["/og-image.png"],
  },

  verification: {
    google: "cahqorzx2aOlVb0joNoy0fZ24ypMlMDUwLwcxstjuJ0",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MJL Designs",
  image: "https://mjl-designs.vercel.app/og-image.png",
  url: "https://mjl-designs.vercel.app",
  logo: "https://mjl-designs.vercel.app/og-image.png",
  description:
    "MJL Designs is a creative studio specializing in brand identity, logo design, packaging design, editorial design, and visual branding solutions.",
  founder: {
    "@type": "Person",
    name: "Mary Joy Lacsa",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Brand Identity",
    "Logo Design",
    "Packaging Design",
    "Editorial Design",
    "Graphic Design",
    "Creative Direction",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>

      <GoogleAnalytics gaId="G-F3P33WJR85" />
    </html>
  );
}