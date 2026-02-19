import Image from "next/image";
import { Story } from "@/data/stories";
import { defaultBlurDataURL } from "@/lib/image";

type StoryGridProps = {
  items: Story[];
};

export function StoryGrid({ items }: StoryGridProps) {
  return (
    <div className="card-grid card-grid-3">
      {items.map((story, index) => (
        <article key={story.title} className={`content-card media-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <Image
            src={story.image}
            alt={story.imageAlt}
            width={560}
            height={360}
            sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={72}
            placeholder="blur"
            blurDataURL={defaultBlurDataURL}
          />
          <div className="media-card-copy">
            <p className="card-kicker">{story.dateLabel}</p>
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
