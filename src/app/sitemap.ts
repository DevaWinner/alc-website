import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/lib/seo";

const canonicalRoutes = [
	"/",
	"/programs",
	"/donate",
	"/impact",
	"/partners",
	"/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	return canonicalRoutes.map((route, index) => ({
		url: getAbsoluteUrl(route),
		lastModified: now,
		changeFrequency: route === "/" ? "daily" : "weekly",
		priority: route === "/" ? 1 : index < 4 ? 0.9 : 0.8,
	}));
}
