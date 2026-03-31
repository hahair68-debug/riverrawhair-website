import { blogPosts } from '@/components/site-data';
import { Card, Container, PlaceholderImage, SectionIntro } from '@/components/ui';

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <SectionIntro
            eyebrow="Blog"
            title="A blog page designed to support SEO and educate first-time River Raw Hair buyers"
            text="This page gives River Raw Hair a place to publish buying guides, hair education, product comparisons, and trend-driven articles that can attract search traffic over time."
          />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mini-grid three">
            {blogPosts.map((post) => (
              <Card key={post.title}>
                <div className="eyebrow">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="top-gap-small">
                  <PlaceholderImage title="Blog cover image" subtitle="Replace with a real banner or product education visual." />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
