import { laceProducts } from '@/components/site-data';
import { ButtonLink, Card, Container, PlaceholderImage, SectionIntro } from '@/components/ui';

export default function ClosuresPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <SectionIntro
            eyebrow="Closures & Frontals"
            title="A more professional lace page for buyers who need clear closure and frontal choices"
            text="This page is designed to make lace options easier to understand, easier to compare, and easier to convert into an inquiry."
          />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mini-grid four">
            {laceProducts.map((item) => (
              <Card key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="soft-section">
        <Container className="split-grid">
          <div>
            <h2 className="subheading">What to add before publishing</h2>
            <div className="stack-list top-gap-small">
              {[
                'Real photos for each lace size',
                'HD vs transparent comparison visuals',
                'Basic explanation of each size and usage',
                'Direct CTA to ask for lace stock or bundle matching',
              ].map((item) => (
                <div key={item} className="list-chip">
                  {item}
                </div>
              ))}
            </div>
            <div className="top-gap">
              <ButtonLink href="/contact">Ask for Lace Products</ButtonLink>
            </div>
          </div>
          <div className="mini-grid two">
            <PlaceholderImage title="Closure close-up" subtitle="Use real lace melt visuals here." />
            <PlaceholderImage title="Frontal photo" subtitle="Show hairline effect and lace texture." />
            <PlaceholderImage title="Size comparison" subtitle="A simple educational visual improves clarity." />
            <PlaceholderImage title="Matching bundles" subtitle="Useful for cross-selling complete sets." />
          </div>
        </Container>
      </section>
    </>
  );
}
