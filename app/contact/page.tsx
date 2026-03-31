import { FaqList } from '@/components/faq-list';
import { Card, Container, SectionIntro } from '@/components/ui';

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <SectionIntro
            eyebrow="Contact Us"
            title="Contact River Raw Hair for wholesale inquiries"
            text="We supply premium Vietnamese human hair for salon owners, resellers, and wholesale buyers worldwide."
          />
        </Container>
      </section>

      <section className="section">
        <Container className="mini-grid two">
          <Card>
            <div className="eyebrow">Contact River Raw Hair</div>
            <h3>Get in touch with River Raw Hair</h3>
            <div className="stack-list top-gap-small">
              <div className="list-chip">Email: Ha.hair68@gmail.com</div>
              <div className="list-chip">WhatsApp: +84352117091</div>
              <div className="list-chip">Hotline: +84352117091</div>
              <div className="list-chip">Address: Hai Boi, Dong Anh, Ha Noi</div>
            </div>
            <p className="top-gap-small">
              You can later connect this page to WhatsApp, an email inbox, a CRM form, or a simple form handler.
            </p>
          </Card>

          <Card>
            <div className="eyebrow">Wholesale inquiry form</div>
            <h3>A practical form structure for first-time buyers</h3>
            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your Business email" />
              <input type="text" placeholder="Your WhatsApp number" />
              <input type="text" placeholder="What hair product are you looking for?" />
              <textarea placeholder="Tell us quantity, length, texture, lace size, color, or custom request" rows={6} />
              <button type="button" className="button">Request Wholesale Quote</button>
            </form>
          </Card>
        </Container>
      </section>

      <section className="soft-section">
        <Container>
          <SectionIntro
            eyebrow="FAQ"
            title="Clear answers reduce hesitation before the customer contacts you"
            text="This FAQ works well on the Contact page because many buyers still have basic questions at this stage."
          />
          <div className="top-gap">
            <FaqList />
          </div>
        </Container>
      </section>
    </>
  );
}
