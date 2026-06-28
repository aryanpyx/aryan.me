# aryan-pandey.me

A neo-brutalist personal portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies — just raw code with bold design choices.

This is a personal project, not a production template. The code prioritizes creativity and experimentation over best practices. It's a playground for trying out ideas, animations, and interactions.

**[Live Site](https://aryan-portfloio.netlify.app)**

---

## About

Portfolio of **Aryan Pandey** — Product Developer, UI/UX & Graphic Designer, and CEO of [APYX](https://apyx-ecosystem.netlify.app/). Building AI-powered digital products from Lucknow, India.

**Projects featured:**
- 🚀 [APYX Ecosystem](https://apyx-ecosystem.netlify.app/) — AI-powered ecosystem for founders, startups & creators
- 🎙️ [SpeakForge](https://speakforge.netlify.app/) — AI-powered voice platform for text-to-speech & audio generation

---

## What is Neo-Brutalism?

Neo-brutalism (also called neo-brutalist web design) is a UI style inspired by brutalist architecture — raw, bold, and unapologetically loud. It rejects the polished, rounded, drop-shadowed sameness of modern web design and replaces it with:

- **Thick black borders** — every element has a hard, visible edge
- **Flat, offset box shadows** — no soft gradients or blurs, just solid color blocks shifted by a few pixels (`box-shadow: 8px 8px 0 #000`)
- **High-contrast color palettes** — bright yellows, pinks, cyans, and greens on white/dark backgrounds
- **Visible structure** — the "bones" of the layout are intentionally exposed, not hidden behind smooth transitions
- **Playful imperfection** — torn paper edges, tape stickers, hand-drawn vibes mixed with geometric precision

This site leans into a **hand-crafted, scrapbook-like** take on neo-brutalism: paper tear dividers, a falling SVG terminal icon, highlight markers that animate on scroll, and a treasure map hidden behind a book-flip animation.

---

## Design Decisions

### Color System

The palette uses CSS custom properties for light/dark theming:

| Color  | Variable    | Usage                          |
|--------|-------------|--------------------------------|
| Yellow | `--yellow`  | Primary accent, CTAs, loader   |
| Cyan   | `--cyan`    | Code elements, highlights      |
| Pink   | `--pink`    | Secondary accent, highlights   |
| Green  | `--green`   | Success states, highlights     |
| Black  | `--border`  | Borders, shadows, text         |

### Typography

- **Space Grotesk** — headings and body text (geometric sans-serif that fits the brutalist aesthetic)
- **Space Mono** — code snippets and terminal elements
- **Caveat** — handwritten annotations (the "human touch" element)

### Key Design Elements

**Paper Tear Effect** — Sections are separated by SVG-drawn torn paper edges that close on scroll with a parallax effect, finished by a tape sticker that "seals" the tear back together.

**Book Flip Timeline** — The journey section starts as a closed treasure map that flips open like a book page to reveal the career timeline underneath.

**Scroll-Driven Highlights** — Text highlights animate in from left/right as you scroll, mimicking a highlighter pen being drawn across the page.

**Interactive Map** — Leaflet.js with Stamen watercolor tiles, styled with a grid overlay and a custom pirate illustration. Clicking timeline entries flies to the corresponding map marker.

**Matrix Typing Effect** — The hero greeting scrambles through random characters before resolving to the final text.

**Falling Decorative Icons** — SVG icons around the hero photo drop with gravity when you start scrolling.

**Animated APYX Logo** — Custom SVG logo with float animation, glow pulse, shimmer sweep, and upward-floating spark particles.

---

## Project Structure

```
.
├── index.html          # Main portfolio (neo-brutalist)
├── neo-styles.css      # Styles for index.html
├── terminal.html       # Terminal-style resume
├── styles.css          # Styles for terminal.html
├── script.js           # Terminal logic & commands
├── favicon.svg         # Site favicon
├── image/              # Assets (avatar, pirate, logos)
│   ├── avatar-gpt.png  # Hero avatar illustration
│   ├── pirat.png       # Pirate character for journey map
│   └── apyx-logo.svg   # Animated APYX logo
├── robots.txt          # Search engine directives
├── sitemap.xml         # Sitemap for SEO
└── LICENSE             # License
```

---

## Tech Stack

- **HTML / CSS / JS** — no frameworks, no build step
- **Leaflet.js** — interactive journey map
- **p5.js** — Snake game in terminal mode
- **Font Awesome 6.7** — icons (including `fa-x-twitter`)
- **Google Fonts** — Space Grotesk, Space Mono, Caveat

---

## Run Locally

```bash
# Any static server works
npx serve .

# or
python3 -m http.server 8000
```

Then open [http://localhost:3000](http://localhost:3000).

---

## License

This project is **proprietary**. All rights reserved. You may browse the source code for inspiration, but copying, modifying, or redistributing any part of it without written permission is not allowed. See the [LICENSE](LICENSE) file for details.
