import Image from "next/image";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
	advisoryMentors,
	leadershipFeatures,
	programCoordinators,
} from "@/data/team";
import { defaultBlurDataURL } from "@/lib/image";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
	title: "Leadership Team and Mentor Network",
	description:
		"Meet ALC co-founders, program coordinators, and advisory mentors supporting learner outcomes across Chuuk State.",
	path: "/team",
	keywords: [
		"ALC leadership team",
		"education mentorship Micronesia",
		"community mentorship network",
	],
});

export default function TeamPage() {
	return (
		<>
			<PageHero
				eyebrow="Team and Leadership"
				title="The people delivering outcomes across Micronesia"
				description="Meet the leadership and mentors behind ALC and how they strengthen learner access and pathway growth."
				actions={[
					{ href: "/team#leadership", label: "View Leadership" },
					{ href: "/contact", label: "Contact Leadership" },
					{ href: "/donate", label: "Sponsor Programs" },
				]}
				image={{
					src: "/img/gallery1.webp",
					alt: "ALC classroom collaboration",
				}}
			/>

			<Section
				id="leadership"
				eyebrow="Leadership"
				title="Accelerated Learning Center Co-Founders"
				intro="Meet the co-founders and board guiding ALC's mission delivery."
				className="section-tight"
			>
				<div className="card-grid card-grid-2 leadership-grid">
					{leadershipFeatures.map((item, index) => (
						<article
							key={item.title}
							className={`content-card ${
								item.variant === "portrait"
									? "team-card"
									: "team-card board-card"
							} reveal-up reveal-delay-${(index % 3) + 1}`}
						>
							<Image
								src={item.image}
								alt={item.imageAlt}
								width={item.variant === "portrait" ? 960 : 1600}
								height={item.variant === "portrait" ? 1280 : 1200}
								sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 50vw"
								quality={76}
								placeholder="blur"
								blurDataURL={defaultBlurDataURL}
							/>
							<div>
								<h3>{item.title}</h3>
								<p className="role">{item.detail}</p>
							</div>
						</article>
					))}
				</div>
			</Section>

			<Section
				id="people"
				title="Program Coordinators"
				intro="Program coordinators responsible for local delivery and learner support."
				className="section-tight"
			>
				<TeamGrid items={programCoordinators} columns={3} />
			</Section>

			<Section
				title="Advisory and Mentors"
				intro="Advisory mentors supporting program quality, learner confidence, and long-term follow-through."
				className="section-tight section-alt"
			>
				<TeamGrid items={advisoryMentors} columns={3} />
			</Section>
		</>
	);
}
