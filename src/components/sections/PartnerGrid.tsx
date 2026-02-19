import { PartnerCategory } from "@/data/partners";
import { Icon } from "@/components/ui/Icon";

type PartnerGridProps = {
  items: PartnerCategory[];
};

export function PartnerGrid({ items }: PartnerGridProps) {
  return (
    <div className="card-grid card-grid-2">
      {items.map((partner, index) => (
        <article key={partner.category} className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <h3 className="title-with-icon">
            <span className="icon-badge">
              <Icon name={partner.icon} size={18} />
            </span>
            <span>{partner.category}</span>
          </h3>
          <p>{partner.details}</p>
        </article>
      ))}
    </div>
  );
}
