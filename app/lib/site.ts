const defaultSiteUrl = "https://puerperio.vercel.app";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "Puerperio",
  title: "Puerperio | Guía de cuidados posparto",
  description:
    "Guía educativa sobre el puerperio: qué es, objetivos, etapas, cambios fisiológicos, cuidados, signos de alarma, complicaciones y recomendaciones.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
};

export const siteUrl = new URL(siteConfig.url);
