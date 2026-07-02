@AGENTS.md

# Study Insights — Frontend

Marketing site + SuperAdmin dashboard for Study Insights, a study-abroad educational consultancy. Brand promise: "we don't sell dreams — we build trust." Design and copy should read as premium, honest, and calm, never salesy.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css` — no `tailwind.config.ts`)
- shadcn/ui (`radix-nova` style, Radix primitives under the hood) — components live in `components/ui/`, do not hand-edit generated primitives beyond what's already customized (see Button below)
- `lucide-react` for UI icons, `country-flag-icons` for real SVG country flags (do not use flag emoji — they render as raw text codes on Windows)
- `recharts` (via shadcn `chart.tsx`) for admin dashboard charts

## Design system

### Brand colors (fixed — do not change without explicit request)

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#FFFFE3` (ivory) | Page background |
| `--primary` | `#000080` (navy) | Headings, body text, header/footer/sidebar surfaces |
| `--accent` | `#FF6700` (safety orange) | **All buttons/CTAs by default**, links, active states, icons that need to pop |

These are real hex values in `app/globals.css` `:root` / `.dark`, not approximated with `oklch()`. Always use the semantic Tailwind classes (`bg-primary`, `text-accent`, `border-border`, etc.) — never hardcode the hex values in components.

Full token list (light mode) in `app/globals.css`:
- `--card` / `--popover`: white (`#FFFFFF`) — cards sit slightly lighter than the ivory page background
- `--secondary`: `#E8E8C8` — used for alternating section backgrounds (`bg-secondary/40`)
- `--muted`: `#F5F5DC`, `--muted-foreground`: `#4B4B7A`
- `--border` / `--input`: `#D9D9B8`
- `--ring`: `#FF6700` (focus rings use accent, not primary)
- `--sidebar*`: navy sidebar tokens for the SuperAdmin dashboard (`--sidebar: #000080`, `--sidebar-primary: #FF6700`)

A `.dark` variant exists (deep navy `#05052B` background) but the site does not currently expose a theme toggle — dark tokens are defined for future use, not active.

### Typography

- **Font: Calibri**, per brand spec. Declared as a system/local font stack in `app/globals.css`:
  ```css
  --font-sans: Calibri, "Calibri Light", "Segoe UI", "Trebuchet MS", Verdana, sans-serif;
  ```
- Calibri is a Microsoft proprietary font with no legal web-embed/Google Fonts equivalent — it is **not** loaded via `next/font`. It renders natively on Windows/Office-installed systems; other platforms fall back to `Segoe UI` → `Trebuchet MS` → `Verdana` → generic sans-serif. Do not swap this for a Google Font without checking with the brand owner first — Calibri is an explicit requirement from the design brief.
- `font-sans` is applied globally via `html { @apply font-sans; }` in `globals.css` — don't re-apply it per component.
- Headings use `font-bold` with `tracking-tight`; body copy is regular weight. There is no separate heading font (`--font-heading` aliases to `--font-sans`).
- Standard heading scale used across the homepage: `text-3xl sm:text-4xl` (section H2), `text-4xl sm:text-5xl lg:text-6xl` (hero H1).

### Buttons

`components/ui/button.tsx` has been customized from the shadcn default — **the `default` variant uses `bg-accent`, not `bg-primary`**, because the brand brief specifies safety orange for all button accents. A separate `primary` variant (navy) exists for cases that need to sit on an already-orange or high-contrast context (e.g. header CTA). When regenerating this file via `npx shadcn add`, the CLI will overwrite this customization — always re-apply the `default: "bg-accent ..."` / `primary: "bg-primary ..."` variants and `link: "text-accent ..."` after running any shadcn add/update command.

### Layout conventions

- `app/(site)/` — public marketing site route group, wrapped by `Header` + `Footer` + floating `WhatsAppWidget` in `app/(site)/layout.tsx`.
- `app/admin/` — SuperAdmin dashboard, separate layout with a navy `Sidebar` (shadcn sidebar component) + `AdminTopbar`, no public header/footer.
- Section rhythm on the homepage: alternate `bg-background` and `bg-secondary/40` between sections, `py-20 sm:py-28` vertical padding, `max-w-7xl` content width.
- Cards default to a **subtle border, no fill** at rest (`border-border/60`, transparent/inherited background) and only pick up `bg-card` + shadow when active/expanded (see `destinations-showcase.tsx`, `scholarships-list.tsx`) — this is the "premium, not boxy" look the client asked for. Don't default every card to a solid white panel.
- Auto-scrolling rows (destinations, scholarships) use a shared `@keyframes marquee` (defined once in `globals.css`) via the arbitrary Tailwind class `animate-[marquee_<duration>s_linear_infinite]`, content duplicated `[...arr, ...arr]` and translated exactly `-50%` for a seamless loop, wrapped in `mask-[linear-gradient(...)]` for edge fade, and paused via a `group-hover:paused` + explicit `paused` class when a card is expanded. Reuse this pattern for any future horizontal ticker instead of introducing a new carousel library.

### Contact / brand data — single source of truth

All real contact info (WhatsApp number, phone, email, office address, Google Maps link, Facebook/Instagram URLs) lives in `lib/site-config.ts` (`siteConfig`). Never hardcode a phone number, address, or social URL directly in a component — import from `siteConfig` so updates only happen in one place. WhatsApp deep-links (with pre-filled messages) go through the `whatsappLink(message?)` helper in the same file.

### Logo assets

Real brand logo files live in `public/images/logo/`:
- `logo.png` — full navy wordmark, for light/ivory backgrounds (header)
- `logowhite.png` — full white wordmark, for navy backgrounds (footer)
- `mark.png` / `mark-white.png` — square icon-only crop (book + orange dot), extracted from the two wordmarks above, for small slots like the admin sidebar
- `favicon icon.png` — source for `app/favicon.ico` (regenerated as a multi-resolution ICO, not just resized)

Do not reintroduce the old placeholder SVGs (`logo.svg`, `logo-mark.svg` under `public/`) — they were removed once real assets were uploaded.

## Content data

Homepage content (hero stats, feature strip, popular fields, destinations, scholarships, journey steps, testimonials, FAQ, footer links) is centralized in `lib/homepage-data.ts`. Team, services, nav, and contact info are in `lib/site-config.ts`. Admin dashboard mock data is in `lib/admin-data.ts`. Prefer editing these data files over hardcoding content inline in page components.

## Team photos

`public/images/team/{first-last}.jpg` (all lowercase, hyphenated, `.jpg`). `components/team-card.tsx` renders a full-bleed portrait (3:4 aspect) with a graceful initials fallback if the image 404s — safe to reference a team member's image path before the actual photo is uploaded.

## Commands

```
npm run dev     # Turbopack dev server
npm run build   # production build (also runs the TypeScript check)
npm run lint    # ESLint
```

Always run `npm run build` after non-trivial changes — it catches type errors the dev server won't surface immediately.
