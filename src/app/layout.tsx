import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/data/site";
import { getAbsoluteUrl, resolvedSiteUrl } from "@/lib/seo";
import "./globals.css";

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "@id": `${resolvedSiteUrl}/#organization`,
  name: siteConfig.name,
  url: resolvedSiteUrl,
  logo: getAbsoluteUrl("/img/accelerated-mark.svg"),
  description: siteConfig.description,
  areaServed: "Federated States of Micronesia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Weno",
    addressRegion: "Chuuk State",
    addressCountry: "FM"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      availableLanguage: ["English"]
    }
  ]
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${resolvedSiteUrl}/#website`,
  url: resolvedSiteUrl,
  name: siteConfig.shortName,
  description: siteConfig.description,
  inLanguage: "en-US",
  publisher: {
    "@id": `${resolvedSiteUrl}/#organization`
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(resolvedSiteUrl),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  alternates: {
    canonical: "/"
  },
  category: "education",
  openGraph: {
    type: "website",
    url: getAbsoluteUrl("/"),
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    locale: "en_US",
    images: [
      {
        url: getAbsoluteUrl("/img/bg-footer.jpg"),
        width: 1920,
        height: 1080,
        alt: "Accelerated Learning Center classroom"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [getAbsoluteUrl("/img/bg-footer.jpg")]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/img/accelerated-mark.svg", type: "image/svg+xml" }
    ],
    shortcut: "/img/accelerated-mark.svg",
    apple: "/img/accelerated-mark.svg"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData)
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
