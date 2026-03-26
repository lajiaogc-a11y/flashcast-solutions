

## Fix: Mobile Navigation Menu Links Not Visible

### Problem
When tapping the hamburger menu, the menu opens (X icon appears) but the 9 navigation links are invisible. The page content shows through the menu area because the mobile menu panel's `z-40` is lower than needed, and being a `fixed` child inside a `fixed` header creates stacking context issues.

### Root Cause
The mobile menu uses `fixed` positioning with `z-40` inside a header with `z-50`. Since both are `fixed`, they compete in the root stacking context, and the main page content can overlap the menu.

### Solution

**File: `src/components/Navbar.tsx`**

1. Move the mobile menu **outside** the `<header>` element (render it as a sibling) so it's not constrained by the header's stacking context
2. Increase z-index to `z-[60]` to ensure it sits above everything
3. Ensure `bg-background` is fully opaque (no transparency)
4. Remove `animate-fade-in` (which starts at opacity 0 with translateY) and use a simpler opacity transition or no animation to prevent the invisible state

### Technical Details

- Restructure the component to render the mobile menu overlay as a portal-like sibling to `<header>`, not a child
- Use `z-[60]` on the mobile menu container
- Replace `animate-fade-in` with a simpler `animate-in fade-in-0` from tailwindcss-animate or remove animation entirely
- Keep the absolute positioning strategy for the scrollable nav area (`top-0 bottom-[140px]`) and fixed CTA (`bottom-0`)

