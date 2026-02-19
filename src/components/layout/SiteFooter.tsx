import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import {
  footerGallery,
  footerLinks,
  officeHours,
  siteConfig,
  socialLinks
} from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>Our Office</h3>
          <p className="inline-icon">
            <Icon name="mapPin" size={16} />
            <span>{siteConfig.location}</span>
          </p>
          <p className="inline-icon">
            <Icon name="phone" size={16} />
            <span>{siteConfig.contact.phone}</span>
          </p>
          <p className="inline-icon">
            <Icon name="mail" size={16} />
            <span>{siteConfig.contact.email}</span>
          </p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Hours</h3>
          <ul className="footer-hours">
            {officeHours.map((slot) => (
              <li key={slot.day}>
                <strong>{slot.day}</strong>
                <span>{slot.hours}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Gallery</h3>
          <div className="footer-gallery">
            {footerGallery.map((item) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={96}
                height={72}
                sizes="96px"
              />
            ))}
          </div>
        </section>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
