import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'River Raw Hair | belongs to Vietnam Remy Hair Co., Ltd.- Premium Vietnamese Human Hair Supplier',
  description:
    'River Raw Hair (belongs to Vietnam Remy Hair Co., Ltd.,- Hair 68) is a premium Vietnamese human hair supplier for wholesale buyers, salons, resellers, and beauty brands.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
  <Header />
  <main>{children}</main>
  <Footer />
  <a
    href="https://wa.me/84352117091"
    target="_blank"
    rel="noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    WA
  </a>
</body>
    </html>
  );
}
