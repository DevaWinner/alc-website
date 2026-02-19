import Image from "next/image";
import Link from "next/link";
import { DonationGrid } from "@/components/sections/DonationGrid";
import { ProgramGrid } from "@/components/sections/ProgramGrid";
import { StatStrip } from "@/components/sections/StatStrip";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { donationOptions } from "@/data/donations";
import {
  audiencePaths,
  donorImpactHighlights,
  heroSlides,
  homeOutcomes,
  homeStats,
  missionCallout,
  valuePoints
} from "@/data/home";
import { learningOutcomes, programs } from "@/data/programs";
import { testimonials } from "@/data/testimonials";
import { defaultBlurDataURL } from "@/lib/image";

const primaryHero = heroSlides[0];
const secondaryHero = heroSlides[1];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow={primaryHero.eyebrow}
        title={primaryHero.title}
        description={primaryHero.summary}
        actions={[primaryHero.primaryCta, primaryHero.secondaryCta]}
        image={{ src: primaryHero.image, alt: primaryHero.imageAlt }}
      />

      <section className="callout-band">
        <div className="container reveal-up">
          <p>{missionCallout}</p>
        </div>
      </section>

      <Section
        eyebrow="Choose your path"
        title="Whether you are learning or giving, you belong here"
        intro="ALC is built to support first-time learners and the people who make that learning possible."
      >
        <div className="audience-grid">
          {audiencePaths.map((path, index) => (
            <article
              key={path.id}
              className={`audience-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <p className="eyebrow">{path.eyebrow}</p>
              <h3>{path.title}</h3>
              <p>{path.summary}</p>
              <ul className="check-list">
                {path.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href={path.cta.href} className="btn btn-primary">
                {path.cta.label}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={secondaryHero.eyebrow}
        title={secondaryHero.title}
        intro={secondaryHero.summary}
        className="section-alt"
      >
        <div className="split-layout">
          <div className="stack">
            <ul className="check-list">
              {valuePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link href={secondaryHero.primaryCta.href} className="btn btn-primary">
                {secondaryHero.primaryCta.label}
              </Link>
              <Link href={secondaryHero.secondaryCta.href} className="btn btn-ghost">
                {secondaryHero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="media-frame reveal-up reveal-delay-2">
            <Image
              src={secondaryHero.image}
              alt={secondaryHero.imageAlt}
              width={640}
              height={420}
              sizes="(max-width: 1024px) 100vw, 44vw"
              quality={78}
              placeholder="blur"
              blurDataURL={defaultBlurDataURL}
            />
          </div>
        </div>
      </Section>

      <Section
        id="programs-preview"
        eyebrow="Mission Programs"
        title="What We Do"
        intro="Mission tracks designed to build essential skills, discipline, and confidence."
      >
        <ProgramGrid items={programs.slice(0, 5)} />
        <div className="hero-actions top-gap">
          <Link href="/programs" className="btn btn-ghost">
            View Mission Details
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Progress"
        title="Small steps, strong momentum"
        intro="Every class cycle creates immediate wins and long-term confidence."
        className="section-alt"
      >
        <StatStrip items={homeStats} />
      </Section>

      <Section
        eyebrow="Donate"
        title="Your support keeps learning moving"
        intro="Choose how you want to help ALC learners and classrooms in Chuuk."
      >
        <DonationGrid items={donationOptions} />
      </Section>

      <Section
        eyebrow="Outcomes"
        title="Clear outcomes from every class cycle"
        intro="Learners leave with practical skills, and donors can see where support creates direct results."
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {homeOutcomes.map((outcome, index) => (
            <article
              key={outcome.title}
              className={`content-card outcome-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <p className="outcome-metric">{outcome.metric}</p>
              <h3>{outcome.title}</h3>
              <p>{outcome.detail}</p>
            </article>
          ))}
        </div>
        <ul className="pill-list top-gap">
          {learningOutcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="impact-list top-gap">
          {donorImpactHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-actions top-gap">
          <Link href="/programs" className="btn btn-primary">
            Start Learning
          </Link>
          <Link href="/donate" className="btn btn-ghost">
            Fund These Outcomes
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="What learners say"
        intro="Hands-on support helps beginners build confidence quickly."
      >
        <TestimonialGrid items={testimonials} />
        <div className="hero-actions top-gap">
          <Link href="/impact" className="btn btn-ghost">
            See Full Impact Stories
          </Link>
        </div>
      </Section>

      <section className="cta-panel section-alt">
        <div className="container reveal-up">
          <h2>Our doors are open to anyone ready to learn</h2>
          <p>
            Join programs, partner with us, or support our mission with funds and equipment.
          </p>
          <div className="hero-actions">
            <Link href="/programs" className="btn btn-primary">
              Enroll in Programs
            </Link>
            <Link href="/donate" className="btn btn-ghost">
              Give Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
