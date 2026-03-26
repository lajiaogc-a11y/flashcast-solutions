/**
 * Site-wide content data — homepage sections, about page, process steps, etc.
 * All content is centralized here for easy updates without touching components.
 */

import { LucideIcon } from "lucide-react";
import {
  Paintbrush, Wrench, Layers, Clock, MessageCircle, ShieldCheck,
  Award, Eye, Heart, Hammer, Users, Target, Star,
  ClipboardList, Ruler, FileText, Handshake,
  Home, Building2, PaintBucket, Warehouse, FileCheck, Palette,
} from "lucide-react";

// ============ HOMEPAGE SERVICES SECTION ============
export interface HomepageService {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
}

export const homepageServices: HomepageService[] = [
  {
    icon: Home,
    title: "Interior Design & Renovation",
    desc: "Complete residential renovation — space planning, 3D design, carpentry, electrical, plumbing, and finishing across KL and Selangor.",
    link: "/services/renovation",
  },
  {
    icon: Ruler,
    title: "Custom Built-In Furniture",
    desc: "Made-to-measure wardrobes, kitchen cabinets, TV consoles, shoe cabinets, vanities, and storage solutions with premium hardware.",
    link: "/services/builtin",
  },
  {
    icon: Building2,
    title: "Commercial & Shop Renovation",
    desc: "Office fit-outs, shop lot renovation, F&B interiors, retail displays, and showroom works within your business timeline.",
    link: "/services/commercial",
  },
  {
    icon: Palette,
    title: "Artistic Wall Coating — Remmers",
    desc: "Authorized German Remmers applicator. Premium textured wall finishes for feature walls, accent areas, and luxury interiors.",
    link: "/services/artistic-coating",
  },
  {
    icon: PaintBucket,
    title: "Exterior Works",
    desc: "Shopfront renovation, signage installation, and building façade upgrades for commercial and residential properties.",
    link: "/services/exterior",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Shelving",
    desc: "Industrial racking systems, warehouse shelving, and storage solutions for manufacturing and logistics operations.",
    link: "/services/warehouse",
  },
  {
    icon: FileCheck,
    title: "Design & Permitting",
    desc: "Architectural plans, construction drawings, permit applications, and regulatory approval coordination.",
    link: "/services/design",
  },
];

// ============ WHY CHOOSE US ============
export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const whyChooseUsReasons: WhyChooseItem[] = [
  {
    icon: Paintbrush,
    title: "In-House Design Team",
    desc: "Professional interior designers create 3D visualizations and detailed construction drawings — so you see the result before any work begins.",
  },
  {
    icon: Wrench,
    title: "One-Stop Renovation",
    desc: "From demolition to painting, carpentry to electrical — we manage all trades under one contract. No need to coordinate multiple contractors.",
  },
  {
    icon: Layers,
    title: "Quality Materials",
    desc: "We source materials from trusted suppliers and maintain a curated materials library. Visit our showroom to compare options before committing.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Every project comes with a detailed timeline and milestones. We keep you updated weekly and deliver on schedule.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    desc: "Itemized quotations, weekly progress reports, and a dedicated project manager for every project. No hidden costs, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "SSM Registered & Warranty",
    desc: "FLASH CAST SDN. BHD. is a fully SSM-registered company. All renovation works come with workmanship warranty for your peace of mind.",
  },
];

// ============ PROCESS STEPS ============
export interface ProcessStep {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Enquiry & Consultation",
    desc: "Tell us about your project — what you need, your preferences, and your budget. We'll discuss your requirements and suggest the best approach.",
    details: ["Submit enquiry via website, WhatsApp, or phone", "Discuss requirements, timeline, and budget", "We provide initial advice and recommendations"],
  },
  {
    num: "02",
    icon: Ruler,
    title: "Site Measurement",
    desc: "Our team visits your site to take precise measurements and assess the existing conditions. This step is free for all enquiries in KL and Selangor.",
    details: ["Free on-site measurement", "Assess existing conditions and constraints", "Take photos and notes for design reference"],
  },
  {
    num: "03",
    icon: FileText,
    title: "Design & Quotation",
    desc: "We prepare a detailed quotation with itemized costs, material specifications, and 3D visualizations so you can see the result before committing.",
    details: ["Space planning and layout design", "3D visualization of proposed design", "Detailed quotation with itemized pricing", "Material samples and selection"],
  },
  {
    num: "04",
    icon: Hammer,
    title: "Construction & Execution",
    desc: "Upon confirmation, we handle all permits, coordinate all trades, and execute the renovation with regular progress updates.",
    details: ["Permit application and coordination", "Demolition and preparation works", "All trades executed by our team", "Weekly progress updates with photos"],
  },
  {
    num: "05",
    icon: Handshake,
    title: "Handover & Aftercare",
    desc: "Final inspection, defect rectification, thorough cleaning, and handover. We provide warranty and post-project support.",
    details: ["Final walkthrough and inspection", "Defect list and rectification", "Professional cleaning", "Warranty and aftercare support"],
  },
];

// ============ ABOUT PAGE ============
export interface MilestoneItem {
  year: string;
  title: string;
  desc: string;
}

export const companyMilestones: MilestoneItem[] = [
  { year: "2015", title: "Company Founded", desc: "FLASH CAST SDN. BHD. established in Kuala Lumpur, starting with residential renovation projects." },
  { year: "2017", title: "Commercial Expansion", desc: "Expanded into commercial fit-out and office renovation, serving corporate clients across KL." },
  { year: "2019", title: "Remmers Partnership", desc: "Became an authorized applicator for German Remmers artistic wall coatings in Malaysia." },
  { year: "2021", title: "Industrial Division", desc: "Launched warehouse shelving and industrial racking division to serve manufacturing and logistics sectors." },
  { year: "2023", title: "200+ Projects Milestone", desc: "Completed over 200 projects across residential, commercial, and industrial categories." },
  { year: "2025", title: "Regional Growth", desc: "Expanded service coverage to all major areas across Kuala Lumpur and Selangor." },
];

export interface CoreValueItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const coreValues: CoreValueItem[] = [
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

export interface TeamHighlightItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const teamHighlights: TeamHighlightItem[] = [
  { icon: Hammer, title: "Skilled Carpenters", desc: "In-house carpentry team specializing in custom built-in furniture, cabinetry, and millwork." },
  { icon: Users, title: "Design Consultants", desc: "Experienced interior designers who translate your ideas into practical, beautiful living spaces." },
  { icon: Target, title: "Project Managers", desc: "Dedicated coordinators who oversee every phase — from permits and procurement to quality checks." },
  { icon: Star, title: "Specialist Applicators", desc: "Certified Remmers coating applicators trained in German artistic wall finishing techniques." },
];

export const companyStats = [
  { value: "200+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

// ============ HOMEPAGE FAQ ============
export interface FAQItem {
  q: string;
  a: string;
}

export const homeFAQs: FAQItem[] = [
  { q: "How much does a renovation cost in KL?", a: "A typical condo renovation in Kuala Lumpur ranges from RM 30,000 – RM 150,000+ depending on scope, size, and materials. We provide a detailed itemized quotation after a free site measurement." },
  { q: "How long does a typical renovation take?", a: "Most residential renovations take 6-12 weeks. Kitchen cabinet projects take 2-4 weeks. Commercial fit-outs take 4-8 weeks. We provide a detailed timeline with milestones." },
  { q: "Do you provide free quotations?", a: "Yes. We provide free site measurements and detailed quotations for all projects in Kuala Lumpur and Selangor — no obligation, no hidden charges." },
  { q: "Are you a registered company?", a: "Yes. FLASH CAST SDN. BHD. is a fully SSM-registered company (Company No. XXXXXXXXXX) based in Kuala Lumpur." },
  { q: "What areas do you serve?", a: "We serve all areas in Kuala Lumpur and Selangor including Mont Kiara, Bangsar, Cheras, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, and surrounding areas." },
  { q: "Do you handle renovation permits?", a: "Yes. We handle all permit applications — condo management office applications, DBKL permits, and local council approvals. This is included in our project management service." },
];
