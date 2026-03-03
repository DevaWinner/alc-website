import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const baseKeywords = [
	"Accelerated Learning Center",
	"ALC Micronesia",
	"digital literacy training",
	"computer skills program",
	"nonprofit education",
	"youth development",
	"Chuuk State",
	"Micronesia",
] as const;

const defaultOgImage = "/img/bg-footer.jpg";

export const resolvedSiteUrl =
	siteConfig.siteUrl.trim() || "http://localhost:3000";

export function getAbsoluteUrl(path: string) {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	return `${resolvedSiteUrl}${normalizedPath}`;
}

type PageMetadataInput = {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
	type?: "website" | "article";
	noindex?: boolean;
};

export function createPageMetadata({
	title,
	description,
	path,
	keywords = [],
	type = "website",
	noindex = false,
}: PageMetadataInput): Metadata {
	const canonical = path === "/" ? "/" : path.replace(/\/+$/, "");
	const absoluteUrl = getAbsoluteUrl(canonical);

	return {
		title,
		description,
		keywords: [...baseKeywords, ...keywords],
		alternates: { canonical },
		robots: noindex
			? {
					index: false,
					follow: false,
					nocache: true,
					googleBot: {
						index: false,
						follow: false,
						noimageindex: true,
					},
				}
			: {
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
		openGraph: {
			type,
			url: absoluteUrl,
			title,
			description,
			siteName: siteConfig.shortName,
			locale: "en_US",
			images: [
				{
					url: defaultOgImage,
					width: 1920,
					height: 1080,
					alt: "Accelerated Learning Center learners in class",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [defaultOgImage],
		},
	};
}
