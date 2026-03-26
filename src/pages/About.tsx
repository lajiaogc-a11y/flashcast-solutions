import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Target, Shield, ArrowRight, Award, Clock, Hammer, Heart, Eye, Star, CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import heroImg from "@/assets/hero-about.jpg";

const milestones = [
  { year: "2015", title: "Company Founded", desc: "FLASH CAST SDN. BHD. established in Kuala Lumpur, starting with residential renovation projects." },
  { year: "2017", title: "Commercial Expansion", desc: "Expanded into commercial fit-out and office renovation, serving corporate clients across KL." },
  { year: "2019", title: "Remmers Partnership", desc: "Became an authorized applicator for German Remmers artistic wall coatings in Malaysia." },
  { year: "2021", title: "Industrial Division", desc: "Launched warehouse shelving and industrial racking division to serve manufacturing and logistics sectors." },
  { year: "2023", title: "200+ Projects Milestone", desc: "Completed over 200 projects across residential, commercial, and industrial categories." },
  { year: "2025", title: "Regional Growth", desc: "Expanded service coverage to all major areas across Kuala Lumpur and Selangor." },
];

const coreValues = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    desc: "Every project is executed with precision and attention to detail. We use premium materials and proven construction methods to ensure lasting results.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear quotations with no hidden costs. We provide itemized pricing, regular progress updates, and honest communication throughout your project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your timeline. Our project management system ensures milestones are met and your renovation is completed as scheduled.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    desc: "Your vision drives our work. We listen carefully, provide professional advice, and adapt our solutions to match your needs and budget.",
  },
];

const teamHighlights = [
  { icon: Hammer, title: "Skilled Carpenters", desc: "In-house carpentry team specializing in custom built-in furniture, cabinetry, and millwork." },
  { icon: Users, title: "Design Consultants", desc: "Experienced interior designers who translate your ideas into practical, beautiful living spaces." },
  { icon: Target, title: "Project Managers", desc: "Dedicated coordinators who oversee every phase — from permits and procurement to quality checks." },
  { icon: Star, title: "Specialist Applicators", desc: "Certified Remmers coating applicators trained in German artistic wall finishing techniques." },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <main className="pt-16">
      <PageMeta
        title="About FLASH CAST | Renovation Company in Kuala Lumpur"
        description="FLASH CAST SDN. BHD. is a registered renovation and interior design company based in Kuala Lumpur, Malaysia. We provide complete renovation solutions — design, custom built-in, construction, and project coordination across KL and Selangor."
        keywords="about FLASH CAST, renovation company KL, interior design company Malaysia, SSM registered renovation"
        canonicalPath="/about"
      />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="FLASH CAST renovation company office and showroom in Kuala Lumpur" className="w-full h-full object-cover" loading="eager" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container-narrow px-5 md:px-8 py-20 md:py-28">
          <p className="font-body font-semibold text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--gold))" }}>About Us</p>
          <h1
            className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-lg"
            style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Building Spaces,{" "}
            <br className="hidden sm:block" />
            Building Trust
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            FLASH CAST SDN. BHD. — a registered renovation and interior design company in Kuala Lumpur, delivering complete solutions from concept to completion since 2015.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <div className="accent-line mb-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2015, FLASH CAST SDN. BHD. has grown from a small residential renovation team into a full-service design and build company serving clients across Kuala Lumpur and Selangor.
                </p>
                <p className="text-muted-foreground mb-4">
                  We are SSM-registered (Company No. XXXXXXXXXX) and operate from our office at 94, Jalan Mega Mendung, Taman United, 58200 Kuala Lumpur. Our team handles every aspect of the renovation process — from initial design consultation and space planning to material selection, custom fabrication, construction, and final handover.
                </p>
                <p className="text-muted-foreground mb-6">
                  As an authorized applicator for German Remmers artistic coatings, we also bring European-quality decorative wall finishes to Malaysian homes and commercial spaces. Whether it's a full home renovation, a corporate office fit-out, or industrial warehouse racking — we bring the same level of professionalism and attention to detail.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["SSM Registered", "Remmers Authorized", "In-House Team", "10+ Years"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-6 bg-card rounded-lg border border-border group hover-lift">
                    <span className="font-display text-2xl md:text-3xl font-bold text-accent block mb-1">{stat.value}</span>
                    <span className="text-muted-foreground text-xs leading-relaxed">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="accent-line mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Our Core Values</h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
                These principles guide every project we take on — from the first consultation to the final handover.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="p-6 md:p-7 bg-background rounded-lg border border-border hover-lift h-full">
                  <div className="w-12 h-12 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-base md:text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="accent-line mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Our Team</h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
                A dedicated in-house team of professionals — no outsourced labour. Every member is part of the FLASH CAST family.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamHighlights.map((member, i) => (
              <Reveal key={member.title} delay={i * 80}>
                <div className="text-center p-6 bg-card rounded-lg border border-border group hover-lift h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                    <member.icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{member.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{member.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="accent-line mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Our Journey</h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
                Key milestones in the growth of FLASH CAST — from a small team to a trusted renovation partner.
              </p>
            </div>
          </Reveal>
          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, i) => (
              <Reveal key={milestone.year} delay={i * 60}>
                <div className="flex gap-5 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shrink-0">
                      {milestone.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-accent font-bold text-sm">{milestone.year}</span>
                      <h3 className="font-display font-semibold text-sm md:text-base">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-background">
        <Reveal>
          <div className="container-narrow">
            <div className="text-center mb-10">
              <div className="accent-line mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Visit Our Office</h2>
              <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
                Located in Taman United, Kuala Lumpur — conveniently accessible for consultations and showroom visits.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
              <div className="bg-card p-8 rounded-lg text-center hover-lift flex flex-col items-center justify-center border border-border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p className="font-semibold mb-1">FLASH CAST SDN. BHD.</p>
                <p className="text-muted-foreground text-sm mb-3">94, Jalan Mega Mendung, Taman United,<br />58200 Kuala Lumpur, Malaysia</p>
                <p className="text-muted-foreground text-xs">Mon–Sat: 9:00 AM – 6:00 PM</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-background border border-border min-h-[220px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.68!3d3.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDYnMzYuMCJOIDEwMcKwNDAnNDguMCJF!5e0!3m2!1sen!2smy!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "220px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FLASH CAST office location in Kuala Lumpur"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <Reveal>
          <div className="container-narrow">
            <h2 className="font-display text-3xl font-bold mb-4">Work With Us</h2>
            <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Whether you're renovating a home, fitting out an office, or setting up a warehouse — we're ready to help.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" size="lg" className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-bold tracking-wide rounded-md px-8 py-3 justify-center" asChild>
                <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button
                size="lg"
                className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-semibold bg-white text-neutral-800 border-0 hover:bg-white/90 shadow-md rounded-md px-8 py-3 justify-center"
                asChild
              >
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-[18px] h-[18px] mr-2 text-[#25D366]" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default About;
