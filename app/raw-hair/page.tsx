import { rawHairLines } from '@/components/site-data';
import { ButtonLink, Card, Container, PlaceholderImage, SectionIntro } from '@/components/ui';

export default function RawHairPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <SectionIntro
            eyebrow="Raw Hair"
            title="A publish-ready product page for River Raw Hair's main wholesale category"
            text="This page presents your best-selling raw hair types more clearly, explains the value in business language, and pushes buyers toward asking for stock or quotation."
          />
        </Container>
      </section>

      <section className="section">
        <Container className="mini-grid two">
          {rawHairLines.map((item) => (
            <Card key={item.name}>
              <div className="eyebrow">{item.tag}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="stack-list top-gap-small">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="list-chip">
                    {bullet}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </Container>
      </section>

      <section className="soft-section">
        <Container className="split-grid">
          <div>
            <SectionIntro
              eyebrow="Media and specs"
              title="What to replace before publishing"
              text="Add real specifications here later: length range, weight, texture, color options, bulk or weft availability, and packaging details."
            />
            <ButtonLink href="/contact">Ask for Raw Hair Quote</ButtonLink>
          </div>
          <div className="mini-grid two">
            <PlaceholderImage title="Raw hair close-up" subtitle="Show shine, ends, and full bundle look here." />
            <PlaceholderImage title="Length or stock chart" subtitle="Use a practical image that supports buying decisions." />
          </div>
        </Container>
      </section>
    </>
  );
}
