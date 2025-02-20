
import { getAllTags, locations } from "@/data/hotels";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nextjs-programmatic-seo.repl.co";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allTags = await getAllTags();

  const dynamicRoutes = allTags
    .map((tag) =>
      locations.map((location) => ({
        url: `${baseUrl}/${location}/${encodeURIComponent(tag)}`,
        lastModified: new Date().toISOString(),
      })),
    )
    .flat();

  return [
    {
      url: baseUrl || "",
      lastModified: new Date().toISOString(),
    },
    ...dynamicRoutes,
  ];
}
