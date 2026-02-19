import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { DonationOption } from "@/data/donations";
import { defaultBlurDataURL } from "@/lib/image";

type DonationGridProps = {
  items: DonationOption[];
};

export function DonationGrid({ items }: DonationGridProps) {
  return (
    <div className="card-grid card-grid-3">
      {items.map((option, index) => (
        <article key={option.id} id={option.anchor} className={`content-card media-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <Image
            src={option.image}
            alt={option.imageAlt}
            width={560}
            height={360}
            sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={72}
            placeholder="blur"
            blurDataURL={defaultBlurDataURL}
          />
          <div className="media-card-copy">
            <h3 className="title-with-icon">
              <span className="icon-badge">
                <Icon name={option.icon} size={18} />
              </span>
              <span>{option.title}</span>
            </h3>
            <p>{option.summary}</p>
            <Link href={`/donate#${option.anchor}`} className="text-link inline-icon">
              <span>+ Donate Now</span>
              <Icon name="arrowRight" size={15} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
