import { PartnerCategory } from "@/data/partners";

type PartnerGridProps = {
  items: PartnerCategory[];
};

export function PartnerGrid({ items }: PartnerGridProps) {
  return (
    <div className="card-grid card-grid-2">
      {items.map((partner, index) => (
        <article key={partner.category} className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <h3>{partner.category}</h3>
          <p>{partner.details}</p>
        </article>
      ))}
    </div>
  );
}
