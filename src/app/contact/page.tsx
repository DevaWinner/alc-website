import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  contactCards,
  contactIntro,
  contactQuickTips,
  contactRequestTypes,
  contactResponsePromises
} from "@/data/contact";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach ALC fast and get clear next steps"
        description={contactIntro}
        actions={[
          { href: siteConfig.contact.emailHref, label: "Email ALC" },
          { href: siteConfig.contact.phoneHref, label: "Message by Phone" },
          { href: "/programs", label: "See Programs First" }
        ]}
        image={{ src: "/img/gallery4.jpeg", alt: "ALC classroom environment" }}
      />

      <Section
        eyebrow="Contact Channels"
        title="Contact details"
        intro="Use any channel below and we will route your request to the right person."
      >
        <div className="card-grid card-grid-3">
          {contactCards.map((card, index) => (
            <article key={card.title} className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}>
              <p className="card-kicker inline-icon">
                <Icon name={card.icon} size={14} />
                <span>{card.title}</span>
              </p>
              <a href={card.href} className="inline-strong">
                {card.value}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Response Standards"
        title="What you can expect after reaching out"
        intro={`We keep communication practical, timely, and easy to act on. State-recognized since ${siteConfig.recognitionDate}.`}
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {contactResponsePromises.map((item, index) => (
            <article
              key={item.title}
              className={`content-card outcome-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <p className="outcome-metric">{item.metric}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Before You Send"
        title="Include these details for a faster response"
        intro="The more specific your first message is, the faster we can help."
      >
        <ul className="impact-list">
          {contactQuickTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Request Types"
        title="Common requests we handle"
        intro="Use these categories to guide your message subject or opening line."
        className="section-alt"
      >
        <div className="card-grid card-grid-3">
          {contactRequestTypes.map((item, index) => (
            <article
              key={item.title}
              className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}
            >
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Message Form"
        title="Send a quick message"
        intro="Use this form structure for your final backend or form-service integration."
      >
        <div className="contact-layout">
          <form className="contact-form" action="#" method="post">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Your email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" placeholder="Enrollment, donation, partnership..." />
            </label>
            <label>
              Message
              <textarea name="message" rows={6} placeholder="Write your message" />
            </label>
            <button type="submit" className="btn btn-primary">
              Submit Message
            </button>
          </form>

          <aside className="content-card contact-side">
            <p className="card-kicker">Best practice</p>
            <h3>Use one clear request per message</h3>
            <p>
              Separate enrollment, donor, and partnership requests into distinct messages so we can
              route and respond faster.
            </p>
            <p>
              For urgent updates, WhatsApp/SMS is the fastest channel.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
