import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

type TestimonialGridProps = {
  items: Testimonial[];
};

export function TestimonialGrid({ items }: TestimonialGridProps) {
  return (
    <div className="card-grid card-grid-3">
      {items.map((testimonial, index) => (
        <article key={testimonial.name} className={`content-card testimonial-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <Image src={testimonial.image} alt={testimonial.imageAlt} width={520} height={320} />
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
