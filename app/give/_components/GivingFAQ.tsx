import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes. Gateway Christian Faith Baptist Church is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the fullest extent of the law. You will receive a giving statement at the end of each calendar year.",
  },
  {
    question: "What does my giving support?",
    answer:
      "Your gifts fund local ministry programs, staff salaries, building maintenance, community outreach, and international missions partnerships. GCFBC is committed to financial transparency — annual reports are available upon request.",
  },
  {
    question: "Is online giving secure?",
    answer:
      "Yes. Our online giving platform uses industry-standard encryption to protect your financial information. We do not store credit card or bank account details on our servers.",
  },
  {
    question: "Can I set up recurring giving?",
    answer:
      "Absolutely. Through our online giving portal you can schedule weekly, bi-weekly, or monthly recurring gifts. This is a great way to give faithfully without having to remember each week.",
  },
];

export default function GivingFAQ() {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={`faq-${i}`}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-4"
              >
                <AccordionTrigger className="font-heading font-semibold text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </SectionWrapper>
  );
}
