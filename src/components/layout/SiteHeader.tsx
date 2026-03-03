"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDetailsElement | null>(null);
  const activePath = pathname || "/";

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

  const isActiveNav = (href: string) => {
    if (href === "/") {
      return activePath === "/";
    }

    return activePath === href || activePath.startsWith(`${href}/`);
  };

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
          <Image
            src="/img/accelerated-wordmark.svg"
            alt=""
            aria-hidden="true"
            width={460}
            height={96}
            priority
            className="brand-desktop brand-logo-full"
          />
          <Image
            src="/img/accelerated-wordmark.svg"
            alt=""
            aria-hidden="true"
            width={460}
            height={96}
            priority
            className="brand-mobile brand-logo-full-mobile"
          />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActiveNav(item.href) ? "is-active" : undefined}
              aria-current={isActiveNav(item.href) ? "page" : undefined}
            >
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
              <Link
                key={item.href}
                href={item.href}
                className={isActiveNav(item.href) ? "is-active" : undefined}
                aria-current={isActiveNav(item.href) ? "page" : undefined}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
