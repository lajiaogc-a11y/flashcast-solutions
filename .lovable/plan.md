

## Design Audit & Micro-Optimization Plan

After reviewing all pages from a designer's perspective, here are the issues found and fixes proposed.

---

### 1. App.css Residual Styles (Critical)
**Problem:** `App.css` still contains Vite boilerplate (`#root { max-width: 1280px; margin: 0 auto; padding: 2rem; }`) which constrains layout width and adds unwanted padding to every page.
**Fix:** Clear `App.css` to remove all leftover styles.

### 2. Navbar — Desktop Nav Crowding
**Problem:** 9 nav items + 2 buttons on desktop creates tight spacing at common viewport widths (1280-1440px). Links feel cramped.
**Fix:** Reduce gap from `gap-6` to `gap-5`, use `text-xs` for nav links. Add active link underline indicator (2px accent bottom border) for better visual feedback instead of just color change.

### 3. Hero Section — Text Readability
**Problem:** Hero subtitle uses `text-steel-light` which may lack contrast against the dark gradient overlay.
**Fix:** Increase subtitle opacity to `text-white/70` for better readability. Add a subtle text-shadow for the headline.

### 4. Services Cards — Inconsistent Height
**Problem:** On 2-column mobile, cards with different text lengths create uneven grid rows.
**Fix:** Add `h-full` to the card link to equalize heights within each row.

### 5. Materials Carousel — No Scroll Indicator
**Problem:** Horizontal scroll section has no visual cue that more items exist off-screen.
**Fix:** Add a subtle gradient fade on the right edge to hint at scrollable content.

### 6. Projects Grid — Image Aspect Ratio
**Problem:** `aspect-[4/3]` on Index page vs `aspect-[16/10]` on Projects page creates inconsistent visual language.
**Fix:** Standardize to `aspect-[4/3]` on both pages.

### 7. Process Page — Timeline Alignment
**Problem:** The vertical timeline line (`left-6`) doesn't perfectly center through the number circles on all viewport sizes.
**Fix:** Adjust to `left-[23px]` (half of w-12 = 24px minus half of w-px).

### 8. Contact Form — Label Spacing
**Problem:** Form labels use `mb-1` which feels tight. Missing focus ring consistency on the select dropdown.
**Fix:** Increase to `mb-1.5`. Ensure select inherits same focus styles.

### 9. Quote Page — Missing Entrance Animation
**Problem:** Quote page hero section lacks the same `animate-fade-in` / `animate-slide-up` entrance animations used on all other pages.
**Fix:** Add consistent hero animations matching other pages.

### 10. About Page — "Our Address" Section Feels Empty
**Problem:** Single address card centered on full width looks isolated and underwhelming.
**Fix:** Add a Google Maps placeholder/embed frame alongside the address card in a 2-column layout.

### 11. CTA Sections — Repetitive Visual
**Problem:** Every page ends with the same blue accent CTA band. While functional, it creates visual fatigue.
**Fix:** Alternate between two CTA styles: one with accent bg (current), one with dark bg + gold accent line, so they feel less monotonous.

### 12. FloatingCTA — Mobile Overlap
**Problem:** The WhatsApp button at `bottom-6 right-6` can overlap footer content on short viewports.
**Fix:** Increase to `bottom-8 right-5` on mobile, add `mb-safe` for iOS safe area.

---

### Files to Edit
| File | Changes |
|------|---------|
| `src/App.css` | Remove all Vite boilerplate styles |
| `src/components/Navbar.tsx` | Tighten spacing, add active underline indicator |
| `src/pages/Index.tsx` | Hero text contrast, service card `h-full`, material scroll fade, standardize project aspect ratio |
| `src/pages/Projects.tsx` | Standardize image aspect ratio to `4/3` |
| `src/pages/Process.tsx` | Fix timeline line position |
| `src/pages/Contact.tsx` | Form label spacing |
| `src/pages/Quote.tsx` | Add hero entrance animations |
| `src/pages/About.tsx` | Enhance address section with map placeholder |
| `src/pages/Services.tsx` | Alternate CTA style |
| `src/pages/FAQ.tsx` | Alternate CTA style |
| `src/components/FloatingCTA.tsx` | Adjust mobile positioning |
| `src/index.css` | Add scroll-fade utility, text-shadow utility |

