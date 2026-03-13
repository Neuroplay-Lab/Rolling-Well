# Rolling Well Conference 2026

Next.js 16 website for the Rolling Well Conference — Gaming for Health & Wellbeing.

## Event Summary
- **Dates:** 29–30 July 2026
- **Venue:** The Amelia Scott, Mount Pleasant Road, Royal Tunbridge Wells, Kent, TN1 1AW
- **Fee:** £10 per day (lunch & refreshments included)
- **Email:** event@rollingwell.org.uk

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts:** Syne (display) · Instrument Sans (body) · JetBrains Mono (mono/labels)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages / Sections

| Component | Section |
|-----------|---------|
| `Hero.tsx` | Landing, key dates, stats |
| `About.tsx` | Conference description, what to expect |
| `Registration.tsx` | Day tickets, registration status |
| `Speakers.tsx` | Programme (placeholder until May 2026) |
| `Organisers.tsx` | All 6 organisers with bios, partner logos |
| `Location.tsx` | Amelia Scott address, all transport modes |
| `Contact.tsx` | Email CTA, topic shortcuts |
| `Footer.tsx` | Nav, contact, credits |

## Updating Content

All content is inlined in each component — no CMS required:

- **Registration opens:** Edit `Registration.tsx` — replace the "opening April" notice with a live booking link
- **Speakers & Schedule:** Edit `Speakers.tsx` — replace placeholder cards with real speaker bios and timetable
- **Organiser bios:** Edit the `organisers` / `venueOrganisers` arrays in `Organisers.tsx`
- **Event details:** All in `Hero.tsx` and `About.tsx`
- **Partner logos:** Replace the text abbreviation blocks in `Organisers.tsx` with real `<img>` tags when available

## Design Notes

- **Palette:** Deep ink (`#0f1117`) base with electric cyan (`#00bcd4`) accents — matching the Rolling Well brand
- **Grid texture:** Subtle map/dungeon-grid CSS background throughout — nods to the TTRPG context
- **Typography:** Syne (bold display), Instrument Sans (readable body), JetBrains Mono (labels/metadata)
- **Dice:** Floating SVG d20, d6, d8 in the hero with parallax mouse tracking
- **Scroll reveals:** IntersectionObserver on all sections for staggered entrance animations

## Deployment

```bash
npm run build
npm start
```

Deploys cleanly to Vercel, Netlify or any Node host.
