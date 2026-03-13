import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agustinpardo.com";
  const locales = ["es", "en"];
  const routes = [
    "",
    "/bio",
    "/composicion",
    "/direccion",
    "/arreglos",
    "/instrumentista",
    "/productor",
    "/docencia",
    "/contactoagustin",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
