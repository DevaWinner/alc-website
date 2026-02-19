import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { defaultBlurDataURL } from "@/lib/image";

type Action = {
  readonly href: string;
  readonly label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: readonly Action[];
  image?: {
    readonly src: string;
    readonly alt: string;
  };
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function PageHero({ eyebrow, title, description, actions, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy reveal-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions?.length ? (
            <div className="hero-actions">
              {actions.map((action, index) => (
                isExternalHref(action.href) ? (
                  <a
                    key={action.href}
                    href={action.href}
                    className={index === 0 ? "btn btn-primary" : "btn btn-ghost"}
                  >
                    <span>{action.label}</span>
                    <Icon name={index === 0 ? "arrowRight" : "chevronRight"} size={16} />
                  </a>
                ) : (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={index === 0 ? "btn btn-primary" : "btn btn-ghost"}
                  >
                    <span>{action.label}</span>
                    <Icon name={index === 0 ? "arrowRight" : "chevronRight"} size={16} />
                  </Link>
                )
              ))}
            </div>
          ) : null}
        </div>

        {image ? (
          <div className="page-hero-image reveal-up reveal-delay-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={680}
              height={460}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={82}
              placeholder="blur"
              blurDataURL={defaultBlurDataURL}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
