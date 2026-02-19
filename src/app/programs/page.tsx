import Link from "next/link";
import { ProgramGrid } from "@/components/sections/ProgramGrid";
import { StatStrip } from "@/components/sections/StatStrip";
import { WorkPathway } from "@/components/sections/WorkPathway";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  classSchedule,
  donorUrgencyLine,
  enrollmentSteps,
  learningOutcomes,
  programDonorProofBlocks,
  programStats,
  programs,
  programValueCards,
  supporterNotes
} from "@/data/programs";
import { siteConfig } from "@/data/site";
import { workHighlights, workPathwaySteps } from "@/data/work";

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission"
        title="Equip youth and young adults with essential skills, discipline, and confidence"
        description="Our mission is straightforward: help Chuukese youth rise above isolation and poverty through practical training, mentoring, and leadership development."
        actions={[
          { href: "/programs#tracks", label: "See What We Do" },
          { href: "/contact", label: "Start Enrollment" },
          { href: "/donate", label: "Fund a Learner Now" }
        ]}
        image={{
          src: "/img/classrom-1.jpeg",
          alt: "ALC learners during a practical session"
        }}
      />

      <section className="callout-band">
        <div className="container reveal-up">
          <p>
            Chuuk is one of the most geographically isolated regions in the Pacific. ALC was
            created to build hope and real-world skills where opportunity is scarce but potential
            is unlimited.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Why ALC"
        title="Creating hope out of isolation"
        intro={`Recognized by Chuuk State on ${siteConfig.recognitionDate}, ALC complements church and community efforts with practical, youth-focused mission delivery.`}
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {programValueCards.map((item, index) => (
            <article
              key={item.title}
              className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="top-gap">
          <StatStrip items={programStats} />
        </div>
      </Section>

      <Section
        id="tracks"
        eyebrow="What We Do"
        title="Mission programs and learner tracks"
        intro="ALC delivers practical digital literacy, growth mindset coaching, mentoring, and entrepreneurship support."
      >
        <ProgramGrid items={programs} />
      </Section>

      <Section
        id="schedule"
        title="Delivery formats"
        intro="Programs are delivered by cohort schedule with mentoring and leadership continuity."
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {classSchedule.map((slot, index) => (
            <article
              key={slot.track}
              className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <p className="card-kicker">{slot.time}</p>
              <h3>{slot.track}</h3>
              <p>{slot.notes}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions top-gap">
          <Link href="/contact" className="btn btn-primary">
            Enroll by Message
          </Link>
          <Link href="/donate" className="btn btn-ghost">
            Fund a Seat Today
          </Link>
        </div>
      </Section>

      <Section
        id="pathways"
        eyebrow="Work Pathways"
        title="From classroom milestones to paid project readiness"
        intro="Program completion leads into mentor-supported labs and FMG-linked project opportunities."
      >
        <WorkPathway steps={workPathwaySteps} />
        <ul className="pill-list top-gap">
          {workHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Donor Proof"
        title="What your gift does right now"
        intro="These giving levels map to concrete delivery outcomes, not vague overhead."
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {programDonorProofBlocks.map((block, index) => (
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
          <li>{donorUrgencyLine}</li>
        </ul>
        <div className="hero-actions top-gap">
          <Link href="/donate" className="btn btn-primary">
            Give Now
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Ask About Sponsorship
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Enrollment Flow"
        title="How to join the programs"
        intro="Start quickly with a simple three-step process."
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {enrollmentSteps.map((step, index) => (
            <article
              key={step.title}
              className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <p className="card-kicker">Step {index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions top-gap">
          <Link href="/contact" className="btn btn-primary">
            Message Enrollment Team
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Outcomes"
        title="Outcomes learners and donors can verify"
        intro="These are the concrete capabilities each class cycle is designed to produce."
      >
        <ul className="pill-list">
          {learningOutcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <ul className="impact-list top-gap">
          {supporterNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-actions top-gap">
          <Link href="/contact" className="btn btn-primary">
            Start Enrollment
          </Link>
          <Link href="/donate" className="btn btn-ghost">
            Fund the Next Cohort
          </Link>
        </div>
      </Section>
    </>
  );
}
