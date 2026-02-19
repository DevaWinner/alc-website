import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar container">
        <p>
          <strong>{siteConfig.shortName}</strong>
          <span>{siteConfig.tagline}</span>
        </p>
        <div className="topbar-contact">
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
          <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
        </div>
      </div>

      <div className="nav-shell container">
        <Link href="/" className="brand" aria-label="Accelerated Learning Centers home">
          <span>{siteConfig.shortName}</span>
          <small>ALC Chuuk</small>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="nav-mobile">
          <summary>Menu</summary>
          <nav aria-label="Mobile">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
