import Image from "next/image";
import Link from "next/link";
import { PartnerGrid } from "@/components/sections/PartnerGrid";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { featuredPartners, partnerCategories } from "@/data/partners";
import { advisoryMentors, leadershipFeatures, programCoordinators } from "@/data/team";
import { defaultBlurDataURL } from "@/lib/image";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Leadership Team and Partner Network",
  description:
    "Meet ALC co-founders, program coordinators, advisory mentors, and partner categories supporting learner outcomes across Chuuk State.",
  path: "/partners",
  keywords: [
    "ALC leadership team",
    "education partners Micronesia",
    "community mentorship network"
  ]
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="People & Partners"
        title="The people delivering outcomes and the partners scaling them"
        description="Meet the leadership and mentors behind ALC, and see where partners can directly strengthen learner access and pathway growth."
        actions={[
          { href: "/partners#partnering", label: "Partner With ALC" },
          { href: "/contact", label: "Contact Leadership" },
          { href: "/donate", label: "Sponsor Programs" }
        ]}
        image={{ src: "/img/gallery1.webp", alt: "ALC classroom collaboration" }}
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
                sizes={
                  item.variant === "portrait"
                    ? "(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    : "(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 50vw"
                }
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
        className="section-tight"
      >
        <TeamGrid items={advisoryMentors} columns={3} />
      </Section>

      <Section
        id="partnering"
        eyebrow="Partnership"
        title="Where partnership helps most"
        intro="Different partner groups strengthen specific parts of the learner journey."
        className="section-alt"
      >
        <PartnerGrid items={partnerCategories} />
      </Section>

      <Section
        title="Current partner and supporter network"
        intro="ALC grows through trusted local collaboration and committed external support."
      >
        <ul className="pill-list">
          {featuredPartners.map((partner) => (
            <li key={partner}>{partner}</li>
          ))}
        </ul>
        <ul className="impact-list top-gap">
          <li>Priority need: learner-seat sponsorship for each upcoming intake.</li>
          <li>Priority need: reliable laptop and equipment support for continuity.</li>
          <li>Priority need: pathway partners to host mentored project opportunities.</li>
        </ul>
        <div className="hero-actions top-gap">
          <Link href="/contact" className="btn btn-primary">
            Start a Partnership Conversation
          </Link>
          <Link href="/donate" className="btn btn-ghost">
            Support This Network
          </Link>
        </div>
      </Section>
    </>
  );
}
