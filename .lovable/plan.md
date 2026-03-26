

## Hero Trust Badges Redesign

Currently the three badges (KL & Selangor, 10+ Years, 200+ Projects) are plain text with small icons — they look flat and easily overlooked against the hero image.

### Design Concept: Frosted Glass Pill Badges

Each badge becomes a semi-transparent frosted glass pill with a subtle border, creating depth and premium feel while maintaining readability over any background image.

```text
┌─────────────────┐  ┌──────────────┐  ┌──────────────────┐
│ 📍 KL & Selangor│  │ ✓ 10+ Years  │  │ 🛡 200+ Projects │
└─────────────────┘  └──────────────┘  └──────────────────┘
   frosted glass        frosted glass       frosted glass
   bg-white/10          bg-white/10         bg-white/10
   backdrop-blur-md     backdrop-blur-md    backdrop-blur-md
   border-white/20      border-white/20     border-white/20
```

### Visual Details

- **Background**: `bg-white/10 backdrop-blur-md` — frosted glass effect
- **Border**: `border border-white/20 rounded-full` — soft pill shape with subtle edge
- **Padding**: `px-4 py-2` — comfortable internal spacing
- **Icon**: gold accent color (`text-gold`) to match brand, slightly larger (`w-4 h-4`)
- **Text**: pure white, `text-xs font-semibold tracking-wide uppercase`
- **Layout**: `flex flex-wrap gap-3` — wraps gracefully on mobile
- **Hover**: subtle `hover:bg-white/15` transition for interactivity feel

### File Changes

**`src/components/sections/HeroSection.tsx`** — Update the trust badges section (lines 85-104):
- Wrap each badge in a pill-shaped container with frosted glass styling
- Change icon color to gold accent
- Increase icon size slightly
- Add rounded-full pill shape with border

This creates a cohesive, premium look that elevates the hero section while keeping the badges readable across different background images.

