import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Merlin.law | Medical Record Intelligence for Defense Counsel",
    template: "%s | Merlin.law",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "medical record review",
    "defense counsel",
    "medical chronology",
    "litigation record analysis",
    "claims professionals",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Merlin.law | The medical record, mastered.",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/assets/brand/merlin-lockup-dark.png",
        width: 968,
        height: 332,
        alt: "Merlin — your Medical Record Wizard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merlin.law | The medical record, mastered.",
    description: siteConfig.description,
    images: ["/assets/brand/merlin-lockup-dark.png"],
  },
  icons: {
    icon: [{ url: "/assets/brand/icon-512.png", type: "image/png" }],
    apple: [{ url: "/assets/brand/apple-touch-icon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111113",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
