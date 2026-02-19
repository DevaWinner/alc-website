import Link from "next/link";
import { DonationGrid } from "@/components/sections/DonationGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  donationFlow,
  donationImpact,
  donationOptions,
  donationProofBlocks,
  donationTrustPoints,
  donationUrgentNeeds
} from "@/data/donations";
import { siteConfig } from "@/data/site";

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your gift helps the marginalized learn essential computer skills"
        description="Your support funds learner seats, keeps laptops operational, and protects uninterrupted digital-skills delivery in Chuuk."
        actions={[
          { href: "#funds", label: "Fund a Learner Seat" },
          { href: "/contact", label: "Pledge Equipment" },
          { href: "/programs", label: "View Program Outcomes" }
        ]}
        image={{ src: "/img/donation1.jpeg", alt: "ALC classroom session" }}
      />

      <section className="callout-band">
        <div className="container reveal-up">
          <p>
            State-recognized since {siteConfig.recognitionDate}. Every donation is directed toward
            class continuity, equipment readiness, and practical learner outcomes.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Donate Now"
        title="Ways to give"
        intro="Choose the giving path that matches your capacity and timeline."
      >
        <DonationGrid items={donationOptions} />
      </Section>

      <Section
        eyebrow="Impact Proof"
        title="What your gift does in real delivery terms"
        intro="These giving levels map to concrete classroom outcomes, not abstract promises."
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {donationProofBlocks.map((block, index) => (
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
        <ul className="impact-list top-gap">
          {donationUrgentNeeds.map((need) => (
            <li key={need}>{need}</li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="How It Works"
        title="Simple giving flow"
        intro="From intent to delivery in three straightforward steps."
      >
        <div className="card-grid card-grid-3">
          {donationFlow.map((item, index) => (
            <article
              key={item.step}
              className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <p className="card-kicker">Step {index + 1}</p>
              <h3>{item.step}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trust & Transparency"
        title="How we keep donor intent aligned with delivery"
        intro="ALC keeps giving pathways practical and linked to direct program execution."
        className="section-alt"
      >
        <ul className="pill-list">
          {donationTrustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
          {donationImpact.map((impact) => (
            <li key={impact}>{impact}</li>
          ))}
        </ul>
        <div className="hero-actions top-gap">
          <Link href="/contact" className="btn btn-primary">
            Confirm Your Gift
          </Link>
          <Link href="/partners" className="btn btn-ghost">
            Become a Sponsor Partner
          </Link>
        </div>
      </Section>
    </>
  );
}
