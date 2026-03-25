

## Mobile Footer Redesign Plan

### Problems Identified (from screenshots at 390px)
- Footer is extremely long on mobile - 4 full-width link columns stacked vertically
- No visual separation between link sections - monotonous wall of text
- CTA band text is left-aligned, looks unbalanced
- Social icons are small (36px) and hard to tap on mobile
- Services and Company links take full width unnecessarily
- Bottom bar text wraps awkwardly

### Design Solution

**File:** `src/components/Footer.tsx` (only file changed)

#### Zone 1: CTA Band (Mobile)
- Center-align text and button
- Button goes full-width on mobile for bigger tap target
- Slightly reduce padding

#### Zone 2: Main Footer (Mobile)
- **Brand section**: Center-align logo, description, contact info, and social icons on mobile
- **Social icons**: Increase to 44px tap targets (Apple HIG minimum)
- **Link sections**: Use collapsible accordion pattern on mobile (Services / Company / Service Areas) - each section header is tappable to expand/collapse
- This reduces the footer from ~1200px tall to ~600px on mobile
- On desktop (lg+), keep the current 4-column grid layout unchanged

#### Zone 3: Bottom Bar
- Stack copyright and legal links vertically on mobile
- Center-align everything

### Technical Approach
- Add a simple `useState` toggle for each accordion section (mobile only)
- Use `md:hidden` / `hidden md:block` to swap between accordion (mobile) and grid (desktop) layouts
- Increase social icon touch targets with `w-11 h-11` on mobile
- Add `text-center md:text-left` for brand section alignment
- Add subtle divider lines between accordion sections on mobile

### Visual Result
```text
Mobile (390px):
┌─────────────────────────┐
│   Ready to Transform    │
│     Your Space?         │
│  [====Get Free Quote====]│
├─────────────────────────┤
│     FLASH CAST          │
│   (centered desc)       │
│   📍 Address            │
│   📞 Phone              │
│   ✉️ Email              │
│   [fb] [ig] [wa]        │
│─────────────────────────│
│ ▸ Services           ▾  │
│   (collapsed links)     │
│─────────────────────────│
│ ▸ Company            ▾  │
│   (collapsed links)     │
│─────────────────────────│
│ ▸ Service Areas      ▾  │
│   (collapsed links)     │
├─────────────────────────┤
│  © 2026 FLASH CAST      │
│  SSM | Privacy | Terms   │
└─────────────────────────┘
```

Desktop stays exactly as current 4-column layout.

