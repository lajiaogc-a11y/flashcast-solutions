

## Mobile Navigation Menu Visual Enhancement

Keep the current layout and structure unchanged — only add visual polish to make the expanded mobile menu feel more premium.

### Changes (single file: `src/components/Navbar.tsx`)

**1. Staggered entrance animation for each nav link**
- Each link fades in and slides up with a slight delay based on its index (`style={{ animationDelay: \`${index * 40}ms\` }}`)
- Use the existing `animate-fade-in` keyframe with `opacity-0` initial state and `animation-fill-mode: forwards`

**2. Active link gets a gold left border accent**
- Active item: add `border-l-2 border-accent` instead of just background tint
- Slightly more visible active background: `bg-accent/10`

**3. Icon container with subtle background circle**
- Wrap each icon in a `w-8 h-8 rounded-full flex items-center justify-center` container
- Active: `bg-accent/15` background on the circle; Inactive: `bg-muted/50`

**4. Subtle separator line between nav section and CTA**
- Already has `border-t`, enhance with a thin gold gradient line using a pseudo-element or a small `<div>` with `bg-gradient-to-r from-transparent via-accent/30 to-transparent h-px`

**5. Bottom CTA area polish**
- Add `pb-safe` (safe area inset) padding for notched phones
- WhatsApp button gets the green WhatsApp icon inline
- Slight frosted glass feel on CTA area: `bg-background/95 backdrop-blur-sm`

**6. "Navigation" label gets a small gold dot before it**
- Prefix the section label with a `w-1.5 h-1.5 rounded-full bg-accent inline-block mr-2` dot

All changes are purely decorative CSS/className modifications within the existing JSX structure — no layout or DOM restructuring.

