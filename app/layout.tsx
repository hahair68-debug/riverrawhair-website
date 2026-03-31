import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'River Raw Hair | Premium Vietnamese Human Hair Supplier',
  description:
    'River Raw Hair is a premium Vietnamese human hair supplier for wholesale buyers, salons, resellers, and beauty brands.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
