import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container simple-center">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist in this new Next.js structure.</p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
