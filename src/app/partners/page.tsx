import { PartnerGrid } from "@/components/sections/PartnerGrid";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { featuredPartners, partnerCategories } from "@/data/partners";
import { teamMembers } from "@/data/team";

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
        id="people"
        eyebrow="Leadership"
        title="Team leading instruction, mentoring, and delivery"
        intro="These are the people accountable for learner progress, class quality, and partner coordination."
      >
        <TeamGrid items={teamMembers} />
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
