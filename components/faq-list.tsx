import { faqItems } from '@/components/site-data';
import { Card } from '@/components/ui';

export function FaqList() {
  return (
    <div className="grid gap-16">
      {faqItems.map((item) => (
        <Card key={item.question} className="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </Card>
      ))}
    </div>
  );
}
