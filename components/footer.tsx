import Link from 'next/link';
import { Container } from '@/components/ui';

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">RR</span>
            <span>
              <strong>River Raw Hair</strong>
              <small>Premium Vietnamese Human Hair Supplier</small>
            </span>
          </div>
          <p className="footer-text">
            River Raw Hair website starter built for wholesale positioning, stronger trust messaging,
            and a clearer inquiry flow for international buyers.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Pages</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Products</h4>
            <Link href="/raw-hair">Raw Hair</Link>
            <Link href="/wigs">Wigs</Link>
            <Link href="/closures">Closures</Link>
          </div>
          <div>
            <h4>Resources</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Wholesale Inquiry</Link>
            <Link href="/contact">Get Quote</Link>
          </div>
        </div>
      </Container>

      <Container className="footer-bottom">
        <span>© 2026 River Raw Hair. Premium Vietnamese Human Hair Supplier.</span>
        <span>riverrawhair.com</span>
      </Container>
    </footer>
  );
}
