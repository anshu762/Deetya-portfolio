import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/data/content";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBF9F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.name}`,
  },
  description: SITE_METADATA.description,
  keywords: [
    "Deetya Behl",
    "Psychology Researcher",
    "Project Nazariya",
    "FlickerScope",
    "Invictus International School",
    "IRIS National Fair 2026",
    "APA Special Award",
    "Classical Dancer",
    "Kathak",
    "Bharatanatyam",
    "Neurodiversity",
    "Behavioural Design",
  ],
  authors: [{ name: "Deetya Behl" }],
  creator: "Deetya Behl",
  metadataBase: new URL(SITE_METADATA.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: "Deetya Behl Portfolio",
    images: [
      {
        url: "/images/hero/profile.jpg",
        width: 1500,
        height: 1387,
        alt: "Deetya Behl at Harvard University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: ["/images/hero/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Deetya Behl",
    url: SITE_METADATA.url,
    image: `${SITE_METADATA.url}/images/hero/profile.jpg`,
    sameAs: [SITE_METADATA.socials.linkedin],
    jobTitle: "Psychology Researcher & Behavioural Designer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Invictus International School, Amritsar",
    },
    knowsAbout: [
      "Psychology",
      "Executive Function",
      "ADHD",
      "Neuroscience",
      "Behavioural Design",
      "Kathak",
      "Bharatanatyam",
      "Inclusive Public Spaces",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${jakarta.variable} ${mono.variable} font-sans antialiased relative min-h-screen selection:bg-accent-rose selection:text-white`}
      >
        <div className="fixed inset-0 pointer-events-none z-40 paper-grain" aria-hidden="true" />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
