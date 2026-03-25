/**
 * Mock data types and structures for FLASH CAST website.
 * All data is static mock — ready to be replaced with API/DB calls later.
 */

// ============ SERVICES ============
export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  suitableFor: string[];
  commonProjects: string[];
  processSteps: { title: string; desc: string }[];
  items: string[];
  faqs: { q: string; a: string }[];
  image: string;
}

// ============ MATERIALS ============
export interface MaterialItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  color: string;
  texture: string;
  suitableSpaces: string[];
  recommendedPairing: string;
  description: string;
  note: string;
  image: string;
}

export interface MaterialCategory {
  name: string;
  slug: string;
  description: string;
  items: MaterialItem[];
}

// ============ PROJECTS ============
export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  type: string;
  location: string;
  description: string;
  clientNeed: string;
  materialsUsed: string[];
  scope: string[];
  highlights: string[];
  duration: string;
  testimonial?: string;
  images: string[];
  thumbnail: string;
}

// ============ BLOG ============
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}
