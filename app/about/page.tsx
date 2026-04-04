import { buyerTypes, values } from '@/components/site-data';
import { ButtonLink, Card, Container, PlaceholderImage, SectionIntro } from '@/components/ui';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <SectionIntro
            eyebrow="About River Raw Hair"
            title="RIVER RAW HAIR is belongs to Vietnam Remy Hair Co., Ltd., (Hair68) - a premium Vietnamese factory specializing in 100% raw human hair"
            text="Hair is ethically sourced from healthy donors, processed without chemicals to preserve its natural shine and strength. With factory-direct pricing and strict QC by bundle, River Raw Hair supplies wholesalers, salons, and wig makers worldwide"
          />
        </Container>
      </section>

      <section className="section">
        <Container className="split-grid">
          <div>
            <h2 className="subheading">Brand story</h2>
            <p className="body-text">
              River Raw Hair (Vietnam Remy Hair Co,.ltd - hair 68)is positioned as a premium Vietnamese human hair supplier for wholesale buyers,
              salon owners, wig businesses, resellers, and beauty brands who need stable quality, better communication,
              and a supplier they can grow with.
            </p>
            <p className="body-text">
              Instead of looking like a simple catalog, the site is structured like a real business brand:
              there is a clearer product system, stronger factory-direct messaging, dedicated category pages,
              and content areas that can support future SEO growth.
            </p>
            <div className="tag-row">
              {['Raw Vietnamese hair', 'Factory-direct supplier', 'Wholesale ready', 'Long-term business mindset'].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <PlaceholderImage
            title="Founder, office, or team visual"
            subtitle="Replace this with a real image to make the About page feel more trustworthy."
          />
        </Container>
      </section>

      <section className="soft-section">
        <Container>
          <SectionIntro
            eyebrow="Core values"
            title="Why you should choose us?"
            text="YOUR SATISFACTION IS OUR SUCCESS! We put customers first and pursue long-term, win-win partnerships built on reliable quality, transparent pricing, and steady supply. "
          />
          <div className="mini-grid four top-gap">
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
        <Container className="mini-grid two">
          <Card>
            <h3>Ideal buyer profiles</h3>
            <div className="stack-list top-gap-small">
              {buyerTypes.map((item) => (
                <div key={item} className="list-chip">
                  {item}
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3>Business message</h3>
            <p>
              The site speaks to the kind of buyers you want to attract: people who value quality,
              service, and stable cooperation. This helps filter out price-only inquiries and supports stronger brand perception.
            </p>
            <ButtonLink href="/contact">Contact River Raw Hair</ButtonLink>
          </Card>
        </Container>
      </section>
    </>
  );
}
