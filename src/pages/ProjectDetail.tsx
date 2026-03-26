import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Clock, CheckCircle, Star } from "lucide-react";
import { projectsData } from "@/data/projects";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";
import heroImg from "@/assets/hero-renovation.jpg";

const imageMap: Record<string, string> = {
  "Residential": residentialImg,
  "Commercial": commercialImg,
  "Built-In": kitchenImg,
  "Warehouse": warehouseImg,
  "Exterior": exteriorImg,
  "Office": heroImg,
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  const relatedProjects = projectsData.filter((p) => p.slug !== slug).slice(0, 3);

  if (!project) {
    return (
      <main className="pt-16 section-padding text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Project Not Found</h1>
        <Button asChild><Link to="/projects">View All Projects</Link></Button>
      </main>
    );
  }

  const mainImage = imageMap[project.type] || residentialImg;

  return (
    <main className="pt-16">
      <PageMeta
        title={`${project.title} | ${project.location} | FLASH CAST Renovation`}
        description={`${project.description.slice(0, 155)}...`}
        keywords={`${project.type} renovation ${project.location}, ${project.title}, renovation project Malaysia`}
        canonicalPath={`/projects/${project.slug}`}
      />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "Projects", url: "/projects" }, { name: project.title, url: `/projects/${project.slug}` }]} />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <img src={mainImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        </div>
        <div className="relative z-10 container-narrow px-4 md:px-8 py-12">
          <Link to="/projects" className="inline-flex items-center gap-1 text-steel-light text-sm hover:text-accent transition-colors mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> All Projects
          </Link>
          <span className="text-accent text-xs font-medium uppercase tracking-wider block mb-2">{project.type}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{project.title}</h1>
          <div className="flex items-center gap-4 text-steel-light text-sm">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {project.location}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {project.duration}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>

              <h3 className="font-semibold mb-3">Client's Requirements</h3>
              <p className="text-muted-foreground mb-8">{project.clientNeed}</p>

              <h3 className="font-semibold mb-3">Project Highlights</h3>
              <ul className="space-y-2 mb-8">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Image Gallery Placeholder */}
              <h3 className="font-semibold mb-3">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[mainImage, imageMap[project.type] || residentialImg, kitchenImg, residentialImg].map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img src={img} alt={`${project.title} - Image ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {project.testimonial && (
                <div className="p-6 bg-muted rounded-lg">
                  <Star className="w-5 h-5 text-gold mb-3" />
                  <p className="italic text-foreground mb-2">"{project.testimonial}"</p>
                  <p className="text-sm text-muted-foreground">— Client, {project.location}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">{project.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-3">Scope of Work</h3>
                <ul className="space-y-2">
                  {project.scope.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-3">Materials Used</h3>
                <ul className="space-y-2">
                  {project.materialsUsed.map((m) => (
                    <li key={m} className="text-sm text-muted-foreground">{m}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent text-accent-foreground rounded-lg p-5 text-center">
                <h3 className="font-semibold mb-2">Want Something Similar?</h3>
                <p className="text-sm opacity-90 mb-4">Contact us for a free consultation.</p>
                <Button variant="secondary" size="sm" className="w-full" asChild>
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <h2 className="font-display text-2xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProjects.map((p) => (
              <Link key={p.id} to={`/projects/${p.slug}`} className="group rounded-lg overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={imageMap[p.type] || residentialImg} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-accent text-xs font-medium uppercase tracking-wider">{p.type}</span>
                  <h3 className="font-display text-base font-semibold mt-1">{p.title}</h3>
                  <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
