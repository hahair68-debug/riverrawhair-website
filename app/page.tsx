import { buyerTypes, testimonials, trustMetrics, values } from '@/components/site-data';
import { ButtonLink, Card, Container, PlaceholderImage, SectionIntro } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <Container className="hero-grid">
          <div>
            <div className="pill">Premium Vietnamese Human Hair Supplier</div>
            <h1 className="hero-title">
              River Raw Hair for global wholesale buyers who want premium quality, stable supply,
              and long-term business support.
            </h1>
            <p className="hero-text">
              Built to position River Raw Hair as a professional Vietnamese human hair supplier for salon owners,
              resellers, beauty brands, and wholesale buyers.
            </p>
            <div className="button-row">
              <ButtonLink href="/raw-hair">Explore Products</ButtonLink>
              <ButtonLink href="/contact" secondary>
                Contact Wholesale Team
              </ButtonLink>
            </div>
            <div className="stats-grid">
              {trustMetrics.map((item) => (
                <Card key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </Card>
              ))}
            </div>
          </div>

          <div className="media-grid">
            <PlaceholderImage
              title="Hair stock wall or bundle display"
              subtitle="Replace this with your real product image to create a stronger first impression."
            />
            <Card className="feature-card dark-card">
              <h3>Available hair and custom production</h3>
              <p>
                Show both ready stock and custom production support so buyers can choose the route that fits their order.
              </p>
            </Card>
            <Card className="feature-card">
              <h3>More trust. Better inquiries.</h3>
              <p>
                The homepage is designed to help buyers understand your quality, product focus, and business style fast.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="soft-section">
        <Container>
          <div className="mini-grid four">
            {values.map((item) => (
              <Card key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionIntro
            eyebrow="Main categories"
            title="A homepage that leads buyers into the right product sections"
            text="Each section below can expand into a stronger product landing page later for both SEO and conversion."
          />
          <div className="mini-grid four top-gap">
            {[
              ['Raw Vietnamese Hair', 'Premium Vietnamese human hair for salon owners, resellers, and wholesale buyers.', '/raw-hair'],
              ['Human Hair Wigs', 'Straight, wavy, curly, and color wigs designed for stronger retail and wholesale appeal.', '/wigs'],
              ['Closures & Frontals', 'HD lace and frontal options that help buyers build premium wig collections.', '/closures'],
              ['Blog & Buying Guides', 'SEO-friendly education content that helps River Raw Hair get found by new buyers.', '/blog'],
            ].map(([title, text, href]) => (
              <Card key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <ButtonLink href={href} secondary>
                  Open page
                </ButtonLink>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="split-grid">
          <div>
            <SectionIntro
              eyebrow="Factory proof"
              title="This is where River Raw Hair can prove the brand with real factory and product media"
              text="For wholesale hair buyers, real proof matters. Add factory photos, hair stock walls, close-up bundle visuals, packing videos, and customer feedback here."
            />
          </div>
          <div className="mini-grid two">
            <PlaceholderImage title="Factory or office exterior" subtitle="Use a real image that makes the company feel established." />
            <PlaceholderImage title="Bundle close-up" subtitle="Show texture, shine, ends, and natural movement." />
            <PlaceholderImage title="Stock wall" subtitle="Useful for available hair and ready-to-ship messaging." />
            <PlaceholderImage title="Packing and shipping" subtitle="Helpful for trust, logistics, and repeat buyers." />
          </div>
        </Container>
      </section>

      <section className="dark-section">
        <Container className="split-grid">
          <SectionIntro
            eyebrow="Who this site is for"
            title="Built around the way wholesale hair buyers actually make decisions"
            text="Buyers want to know what hair you sell, whether your quality is stable, whether you have ready stock, and how they can place an order."
          />
          <div className="mini-grid two">
            {buyerTypes.map((item) => (
              <Card key={item} className="dark-outline">
                <h3>{item}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionIntro
            eyebrow="Testimonials"
            title="Trust blocks ready to be replaced with real River Raw Hair customer feedback"
            text="Even a clean testimonial section helps first-time buyers feel that the brand is active and credible."
          />
          <div className="mini-grid three top-gap">
            {testimonials.map((item) => (
              <Card key={`${item.role}-${item.country}`}>
                <div className="stars">★★★★★</div>
                <p>“{item.text}”</p>
                <strong>{item.role}</strong>
                <span>{item.country}</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
