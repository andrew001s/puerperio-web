import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";

const imagePaths = [
  "/images/puerperio-hero.png",
  "/images/que-es-puerperio.jpeg",
  "/images/objetivos.jpeg",
  "/images/etapas.jpeg",
  "/images/cambios.jpeg",
  "/images/cuidado-puerpuerio.jpeg",
  "/images/signo-alarma.jpeg",
  "/images/complicaciones.jpeg",
  "/images/recomendaciones.jpeg",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-07-11"),
      changeFrequency: "monthly",
      priority: 1,
      images: imagePaths.map((path) => `${siteConfig.url}${path}`),
      videos: [
        {
          title: "Video introductorio sobre el puerperio",
          thumbnail_loc: "https://img.youtube.com/vi/4DHhq3Vcu_g/maxresdefault.jpg",
          description:
            "Recurso audiovisual introductorio para reforzar la información principal sobre el puerperio.",
        },
      ],
    },
  ];
}
