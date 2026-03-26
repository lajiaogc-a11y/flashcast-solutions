import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const homeFaqs = [
  {
    q: "What renovation services does FLASH CAST provide in Kuala Lumpur?",
    a: "We provide comprehensive renovation services including interior design, residential and commercial renovation, custom built-in furniture (wardrobes, kitchen cabinets, vanities), artistic wall coating (German Remmers), exterior works, warehouse shelving, and permit coordination — all across Kuala Lumpur and Selangor.",
  },
  {
    q: "How do I get a free renovation quotation?",
    a: "Contact us via WhatsApp, phone, or our online quote form. We'll arrange a free site measurement and provide a detailed, itemized quotation based on your requirements. There is no obligation — the consultation and measurement are completely free for projects in KL and Selangor.",
  },
  {
    q: "How long does a typical renovation project take?",
    a: "Timeline depends on the scope. A simple built-in cabinet project may take 2–3 weeks, while a full home renovation typically takes 6–12 weeks. Commercial fit-outs range from 4–10 weeks. We provide a detailed timeline with every quotation so you know exactly what to expect.",
  },
  {
    q: "Do you handle renovation permits and condo management approvals?",
    a: "Yes. We handle all paperwork — management office renovation applications, DBKL permit submissions, drawing coordination, and site inspection scheduling. This is included as part of our project management service.",
  },
  {
    q: "What areas in Malaysia do you serve?",
    a: "We are based in Kuala Lumpur and serve the entire KL and Selangor region — including Petaling Jaya, Bangsar, Mont Kiara, Cheras, Subang Jaya, Shah Alam, Puchong, Damansara, and surrounding areas. Free site measurement is included for all enquiries within our service area.",
  },
  {
    q: "Can I see the design before construction starts?",
    a: "Absolutely. We provide 3D visualizations and detailed construction drawings so you can review and approve every detail before any work begins. This prevents costly changes during the renovation and ensures the final result matches your expectations.",
  },
];

const HomeFAQSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-narrow max-w-3xl">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Common questions about our renovation services, process, and pricing in Kuala Lumpur and Selangor.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="space-y-2">
            {homeFaqs.map((f, i) => (
              <AccordionItem key={i} value={`home-faq-${i}`} className="bg-card rounded-lg border border-border px-4">
                <AccordionTrigger className="text-left font-medium text-sm md:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={200}>
          <div className="text-center mt-8">
            <Button variant="outline" className="btn-press" asChild>
              <Link to="/faq">View All FAQ <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeFAQSection;
