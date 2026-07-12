import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Puerperio | Guía de cuidados posparto",
  description:
    "Landing page educativa sobre el puerperio, sus etapas, cuidados, signos de alarma y recomendaciones.",
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
