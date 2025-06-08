
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do you vet your experts?",
      answer: "Every expert on LumoTalk undergoes a comprehensive screening process including credential verification, background checks, and interview assessments. We validate their professional certifications, review their track record, and ensure they have real expertise in their domain."
    },
    {
      question: "What if I'm not satisfied with my session?",
      answer: "We offer a satisfaction guarantee. If you're not completely satisfied with your session, we'll work with you to make it right, including potential refunds or complimentary follow-up sessions with a different expert."
    },
    {
      question: "How much do sessions cost?",
      answer: "Session pricing varies by expert and ranges from $50-$90 for 30-minute sessions. You can see each expert's pricing clearly on their profile before booking. We believe quality financial guidance should be accessible and fairly priced."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule up to 24 hours before your session without any fees. For cancellations within 24 hours, a small fee may apply, but we're always flexible for emergency situations."
    },
    {
      question: "How do the video sessions work?",
      answer: "All sessions are conducted via secure video calls. After booking, you'll receive a confirmation email with your meeting link and calendar invite. The expert will join you at your scheduled time for a private, one-on-one consultation."
    },
    {
      question: "Are experts available for follow-up questions?",
      answer: "Many experts offer follow-up sessions or brief email consultations. This varies by expert and can be discussed during your session. Some experts also offer package deals for ongoing guidance."
    }
  ];

  return (
    <section className="py-16 bg-lumo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about how LumoTalk works? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-lumo-200 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-lumo-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
