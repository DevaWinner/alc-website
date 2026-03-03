import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Accelerated Learning Center (ALC)",
		short_name: "ALC",
		description:
			"Accelerated Learning Center equips youth and young adults in Micronesia with practical digital and life skills.",
		start_url: "/",
		display: "browser",
		background_color: "#F3F4EF",
		theme_color: "#0F7A53",
		icons: [
			{
				src: "/img/accelerated-mark.svg",
				sizes: "any",
				type: "image/svg+xml",
				purpose: "maskable",
			},
		],
	};
}
