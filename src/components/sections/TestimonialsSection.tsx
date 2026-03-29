import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    text: "Very responsive team and solid workmanship. Delivered on time and within budget.",
    client: "Mr. Tan",
    type: "Condo Renovation",
    location: "Mont Kiara, KL",
  },
  {
    text: "Good communication throughout the project. The final result matches the design perfectly.",
    client: "Ms. Wong",
    type: "Kitchen & Built-In",
    location: "Bangsar, KL",
  },
  {
    text: "Professional team, excellent attention to detail. Our office looks amazing and our staff love the new workspace.",
    client: "Encik Ahmad",
    type: "Office Fit-Out",
    location: "Petaling Jaya",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted" id="testimonials">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Feedback from homeowners and businesses across KL and Selangor.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="p-6 bg-card rounded-lg border border-border h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="italic text-foreground text-sm leading-relaxed mb-5 flex-1">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold">{t.client}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.type} · {t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
