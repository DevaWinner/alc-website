import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  description:
    "The page you requested could not be found. Continue to ALC programs, impact, or contact support.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container simple-center">
        <p className="eyebrow">404</p>
        <h1>We couldn&apos;t find that page</h1>
        <p>
          The link may be outdated, moved, or entered incorrectly. Continue
          using the main navigation below.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">
            Go to Home
          </Link>
          <Link href="/programs" className="btn btn-ghost">
            View Programs
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact Us
          </Link>
        </div>
        <p>
          Need help finding a program, donation option, or team contact? Visit
          the contact page and we&apos;ll route you quickly.
        </p>
      </div>
    </section>
  );
}
