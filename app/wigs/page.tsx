import { wigCollections } from '@/components/site-data';
import { ButtonLink, Card, Container, PlaceholderImage, SectionIntro } from '@/components/ui';

export default function WigsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <SectionIntro
            eyebrow="Wigs"
            title="A cleaner wig page built for buyers who need beauty, clarity, and easier product choice"
            text="This page helps River Raw Hair present wigs in a way that feels more premium, more organized, and more trustworthy for both first-time and repeat buyers."
          />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mini-grid three">
            {wigCollections.map((item) => (
              <Card key={item.title}>
                <div className="eyebrow">{item.subtitle}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="top-gap-small">
                  <PlaceholderImage title="Wig product image" subtitle="Replace with your real wig photography." />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="dark-section">
        <Container>
          <div className="mini-grid three">
            {[
              'Straight, wavy, curly, and color wig pages can be expanded later.',
              'Add density, lace size, cap type, and length filters when you are ready.',
              'Use real before-and-after or customer-wearing photos to increase conversion.',
            ].map((item) => (
              <Card key={item} className="dark-outline">
                <p>{item}</p>
              </Card>
            ))}
          </div>
          <div className="top-gap">
            <ButtonLink href="/contact" secondary>
              Request Wig Price List
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
