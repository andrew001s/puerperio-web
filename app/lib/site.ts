export const siteConfig = {
  name: "Puerperio",
  title: "Puerperio | Guía de cuidados posparto",
  description:
    "Guía educativa sobre el puerperio: qué es, objetivos, etapas, cambios fisiológicos, cuidados, signos de alarma, complicaciones y recomendaciones.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://puerperio.vercel.app",
};

export const siteUrl = new URL(siteConfig.url);
