import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig, siteUrl } from "./lib/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "puerperio",
    "posparto",
    "cuidados posparto",
    "etapas del puerperio",
    "signos de alarma puerperio",
    "cambios fisiológicos posparto",
    "complicaciones posparto",
    "enfermería materno Infantil",
  ],
  authors: [{ name: "Carrera de Enfermería" }],
  creator: "Instituto Superior Tecnológico Universitario Libertad",
  publisher: "Instituto Superior Tecnológico Universitario Libertad",
  category: "Salud materna",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "article",
    locale: "es_EC",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/puerperio-hero.png",
        width: 1813,
        height: 868,
        alt: "Guía educativa sobre el puerperio y cuidados posparto.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/puerperio-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
