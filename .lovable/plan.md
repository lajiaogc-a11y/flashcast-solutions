

## Footer Redesign Plan

### Current Problems
- Flat, generic layout — looks like a template, not a premium renovation brand
- No visual hierarchy or breathing room between sections
- Missing CTA — footer is a prime conversion spot
- No brand personality (no accent colors, no decorative elements)
- Bottom bar is minimal and forgettable

### New Design Concept

A layered, premium footer with three distinct zones:

```text
┌─────────────────────────────────────────────────────────┐
│  ZONE 1: CTA Band (accent bg)                          │
│  "Ready to Transform Your Space?" + [Get Free Quote]   │
├─────────────────────────────────────────────────────────┤
│  ZONE 2: Main Footer (dark bg)                         │
│  ┌──────────┬──────────┬──────────┬──────────┐         │
│  │ Brand +  │ Services │ Company  │ Service  │         │
│  │ Contact  │ links    │ links    │ Areas    │         │
│  │ + Social │          │          │ (2-col)  │         │
│  │ icons    │          │          │          │         │
│  └──────────┴──────────┴──────────┴──────────┘         │
├─────────────────────────────────────────────────────────┤
│  ZONE 3: Bottom Bar (darker)                           │
│  © 2026 FLASH CAST  |  SSM No  |  Privacy  |  Terms   │
└─────────────────────────────────────────────────────────┘
```

### Design Details

1. **CTA Band** — Full-width accent-colored strip with a headline and button, using gold accent line as a divider. Drives conversions from every page.

2. **Main Footer** — Dark background with subtle top border using gold accent. Brand column gets social media icons (Facebook, Instagram, WhatsApp). Service Areas displayed in a compact 2-column grid to save space. Contact info gets subtle icon backgrounds for polish.

3. **Bottom Bar** — Slightly darker shade than main footer, with horizontal layout including copyright, SSM number, and policy links.

4. **Typography & Spacing** — Section headers use gold accent line beneath them. More generous vertical padding. Links get subtle left-border highlight on hover.

5. **Mobile** — Stacks gracefully, CTA band stays prominent, link columns collapse to full-width accordions or single columns.

### Technical Approach
- Edit only `src/components/Footer.tsx`
- Use existing Tailwind classes + design tokens (accent, gold, surface-dark)
- Add Lucide social icons (Facebook, Instagram, MessageCircle)
- No new dependencies, no structural changes

