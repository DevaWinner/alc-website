import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { resolvedSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
	const configuredUrl = siteConfig.siteUrl.trim();
	let host: string | undefined;

	if (configuredUrl) {
		try {
			host = new URL(configuredUrl).host;
		} catch {
			host = undefined;
		}
	}

	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: [`${resolvedSiteUrl}/sitemap.xml`],
		host,
	};
}
