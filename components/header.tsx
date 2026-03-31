import Link from 'next/link';
import { navItems } from '@/components/site-data';
import { ButtonLink, Container } from '@/components/ui';

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-row">
        <Link href="/" className="brand">
          <span className="brand-mark">RR</span>
          <span>
            <strong>River Raw Hair</strong>
            <small>Premium Vietnamese Human Hair Supplier</small>
          </span>
        </Link>

        <nav className="main-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <ButtonLink href="/contact">Request Quote</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
