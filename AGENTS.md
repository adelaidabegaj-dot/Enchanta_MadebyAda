# Enchanta — static site

This is a static HTML/CSS/Bootstrap/JS site. There is no build step, no
Node.js dependencies, and no framework.

- `index.html` — all page markup/sections
- `css/style.css` — theme variables, keyframes, shared utilities
- `css/sections.css` — per-section styles
- `js/main.js` — all interactivity (nav, sparkles, bubbles, scroll-reveal, carousel, filters, forms)
- `assets/` — images and videos
- Bootstrap 5.3.3 is loaded via CDN in `index.html`

To preview locally, serve the directory with any static file server
(e.g. `npx serve .`) and open `index.html`.
