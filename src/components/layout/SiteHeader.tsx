"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDetailsElement | null>(null);

  const mobileBrand =
    siteConfig.mobileShortName ||
    siteConfig.shortName
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");

  const closeMobileMenu = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false;
    }
  };

  useEffect(() => {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false;
    }
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="topbar container">
        <p>
          <strong>{siteConfig.shortName}</strong>
          <span>{siteConfig.tagline}</span>
        </p>
        <div className="topbar-contact">
          <a href={siteConfig.contact.phoneHref}>
            <Icon name="phone" size={15} />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <a href={siteConfig.contact.emailHref}>
            <Icon name="mail" size={15} />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
      </div>

      <div className="nav-shell container">
        <Link href="/" className="brand" aria-label="Accelerated Learning Center home">
          <span className="brand-desktop">{siteConfig.shortName}</span>
          <span className="brand-mobile">{mobileBrand}</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="nav-mobile" ref={mobileNavRef}>
          <summary aria-label="Open navigation menu">
            <Icon name="menu" size={18} />
          </summary>
          <nav aria-label="Mobile">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
