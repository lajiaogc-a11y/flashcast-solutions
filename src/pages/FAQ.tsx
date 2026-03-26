import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdFAQ, JsonLdBreadcrumb } from "@/components/JsonLd";

const faqData = [
  {
    category: "General",
    items: [
      { q: "What renovation services does FLASH CAST provide?", a: "We provide comprehensive renovation services including interior design, residential and commercial renovation, custom built-in furniture (wardrobes, kitchen cabinets, vanities), exterior works, warehouse shelving, and permit coordination — all across Kuala Lumpur and Selangor." },
      { q: "Which areas do you serve?", a: "We serve Kuala Lumpur, Selangor, Petaling Jaya, Cheras, Mont Kiara, Bangsar, Subang Jaya, Shah Alam, and surrounding areas." },
      { q: "Is FLASH CAST a registered company?", a: "Yes, FLASH CAST SDN. BHD. is a fully SSM-registered company based in Taman United, Kuala Lumpur." },
    ],
  },
  {
    category: "Process & Pricing",
    items: [
      { q: "How do I get a quotation?", a: "You can contact us via WhatsApp, phone, or our online quote form. We'll arrange a site measurement and provide a detailed quotation based on your requirements." },
      { q: "Do you offer free site measurements?", a: "Yes, we provide free on-site measurements for projects in KL and Selangor as part of our quotation process." },
      { q: "Can I see material samples before committing?", a: "Absolutely. We encourage clients to view material samples — flooring, tiles, boards, and cabinet finishes — before making a decision. Contact us to arrange a viewing." },
      { q: "How long does a typical renovation take?", a: "Timeline depends on the scope. A simple built-in project may take 2–3 weeks, while a full home renovation typically takes 6–12 weeks. We provide a detailed timeline with every quotation." },
    ],
  },
  {
    category: "Custom Built-In",
    items: [
      { q: "Can you build custom furniture to my exact dimensions?", a: "Yes, all our built-in furniture is made to measure — wardrobes, kitchen cabinets, TV consoles, shoe cabinets, and more. We tailor everything to fit your space." },
      { q: "What materials do you use for cabinets?", a: "We use melamine boards, plywood, solid timber, and premium hardware from established suppliers. Material selection is based on your budget, style preference, and usage requirements." },
    ],
  },
  {
    category: "Commercial & Permits",
    items: [
      { q: "Do you handle renovation permits and approvals?", a: "Yes, we assist with management office renovation applications, DBKL permit submissions, drawing coordination, and site inspection scheduling." },
      { q: "Can you renovate my shop or office?", a: "Yes, we handle shop renovation, office fit-out, F&B interiors, showroom works, and retail displays for commercial clients across KL and Selangor." },
    ],
  },
];

const FAQ = () => {
  return (
    <main className="pt-16">
      <PageMeta
        title="FAQ | Renovation Questions Kuala Lumpur | FLASH CAST"
        description="Frequently asked questions about renovation services, pricing, materials, custom built-in furniture, and permits in Kuala Lumpur and Selangor by FLASH CAST SDN. BHD."
        keywords="renovation FAQ Malaysia, renovation questions KL, built-in furniture FAQ, renovation permit KL"
        canonicalPath="/faq"
      />
      <JsonLdFAQ faqs={faqData.flatMap(cat => cat.items.map(item => ({ question: item.q, answer: item.a })))} />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]} />
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4 animate-fade-in" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up" style={{ opacity: 0, animationDelay: "0.1s" }}>Frequently Asked Questions</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            Common questions about our renovation services, process, pricing, and materials.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          {faqData.map((cat, catIdx) => (
            <Reveal key={cat.category} delay={catIdx * 100}>
              <div className="mb-10">
                <h2 className="font-display text-xl font-bold mb-4">{cat.category}</h2>
                <Accordion type="single" collapsible>
                  {cat.items.map((item, i) => (
                    <AccordionItem key={i} value={`${cat.category}-${i}`}>
                      <AccordionTrigger className="text-left text-sm font-medium">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface-dark text-center">
        <Reveal>
          <div className="container-narrow">
            <div className="accent-line mx-auto mb-4" style={{ backgroundColor: "hsl(var(--gold))" }} />
            <h2 className="font-display text-3xl font-bold mb-4 text-primary-foreground">Still Have Questions?</h2>
            <p className="text-steel-light mb-6">Reach out to us directly — we're happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-press" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-steel text-primary-foreground hover:bg-primary-foreground/10 btn-press" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default FAQ;
