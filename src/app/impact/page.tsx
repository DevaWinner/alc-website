import Link from "next/link";
import { StatStrip } from "@/components/sections/StatStrip";
import { StoryGrid } from "@/components/sections/StoryGrid";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  impactAsks,
  impactDonorProofBlocks,
  impactProofPoints,
  impactSellingCards,
  impactStats
} from "@/data/impact";
import { siteConfig } from "@/data/site";
import { stories } from "@/data/stories";
import { testimonials } from "@/data/testimonials";

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Proof that your support becomes real learner outcomes"
        description="This page shows measurable evidence: story-level behavior change, learner testimony, and clear funding-to-outcome links."
        actions={[
          { href: "/donate", label: "Give Now to Expand Impact" },
          { href: "/programs", label: "Join Programs" },
          { href: "/contact", label: "Partner With ALC" }
        ]}
        image={{ src: "/img/gallery2.jpeg", alt: "ALC learner and mentor collaboration" }}
      />

      <section className="callout-band">
        <div className="container reveal-up">
          <p>
            Since {siteConfig.recognitionDate}, ALC has turned support into visible learner growth.
            Donor funding directly protects class access, teaching continuity, and laptop readiness.
          </p>
        </div>
      </section>

      <Section
        eyebrow="At a glance"
        title="Impact indicators you can track now"
        intro="These are active, observable signals of program execution and learner progress."
      >
        <StatStrip items={impactStats} />
      </Section>

      <Section
        eyebrow="Funding Proof"
        title="How donor support converts into delivery"
        intro="Clear links between giving behavior and classroom-level outcomes."
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {impactDonorProofBlocks.map((block, index) => (
            <article
              key={block.title}
              className={`content-card outcome-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <p className="outcome-metric">{block.metric}</p>
              <h3>{block.title}</h3>
              <p>{block.detail}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions top-gap">
          <Link href="/donate" className="btn btn-primary">
            Fund the Next Cohort
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Sponsor as an Organization
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Stories"
        title="Recent progress from the classroom"
        intro="These story snapshots show behavior change, confidence growth, and practical skill use."
      >
        <StoryGrid items={stories} />
      </Section>

      <Section
        eyebrow="Testimonials"
        title="What learners say about their growth"
        intro="First-hand reflections confirm that practical, patient instruction creates durable confidence."
        className="section-alt"
      >
        <TestimonialGrid items={testimonials} />
      </Section>

      <Section
        eyebrow="Why this matters"
        title="A conversion page for learners, donors, and partners"
        intro="When support quality rises, learner outcomes accelerate and pathway transitions grow."
      >
        <div className="card-grid card-grid-3">
          {impactSellingCards.map((card, index) => (
            <article
              key={card.title}
              className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>

        <ul className="impact-list top-gap">
          {impactProofPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <ul className="impact-list top-gap">
          {impactAsks.map((ask) => (
            <li key={ask}>{ask}</li>
          ))}
        </ul>

        <div className="hero-actions top-gap">
          <Link href="/donate" className="btn btn-primary">
            Give Today
          </Link>
          <Link href="/programs" className="btn btn-ghost">
            Enroll a Learner
          </Link>
        </div>
      </Section>
    </>
  );
}
