import Image from "next/image";
import { Testimonial } from "@/data/testimonials";
import { defaultBlurDataURL } from "@/lib/image";

type TestimonialGridProps = {
  items: Testimonial[];
};

export function TestimonialGrid({ items }: TestimonialGridProps) {
  return (
    <div className="card-grid card-grid-3">
      {items.map((testimonial, index) => (
        <article key={testimonial.name} className={`content-card testimonial-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <Image
            src={testimonial.image}
            alt={testimonial.imageAlt}
            width={520}
            height={320}
            sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={72}
            placeholder="blur"
            blurDataURL={defaultBlurDataURL}
          />
          <div className="testimonial-copy">
            <p className="quote">“{testimonial.quote}”</p>
            <p className="person">{testimonial.name}</p>
            <p className="program">{testimonial.program}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
