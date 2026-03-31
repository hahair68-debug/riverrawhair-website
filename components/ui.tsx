import Link from 'next/link';
import { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-intro">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="section-title">{title}</h1>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}

export function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return (
    <Link href={href} className={secondary ? 'button button-secondary' : 'button'}>
      {children}
    </Link>
  );
}

export function PlaceholderImage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="placeholder-image">
      <div className="placeholder-badge">Media placeholder</div>
      <div className="placeholder-title">{title}</div>
      <div className="placeholder-text">{subtitle}</div>
    </div>
  );
}
