# Enchanta — static site

This is a static HTML/CSS/Bootstrap/JS site. There is no build step, no
Node.js dependencies, and no framework.

- `index.html` — homepage markup/sections
- `products/*.html` — one standalone detail page per shop-with-a-page product,
  plus a few collection landing pages (`collection.html`, `mermaid-tales.html`,
  `moonlit-hollow.html`, `rising-moon.html`)
- `css/style.css` — theme variables, keyframes, shared utilities
- `css/sections.css` — per-section styles
- `css/product.css` — product modal, standalone product page, and cart overlay styles
- `css/assistant.css` — Ada's Assistant chat widget styles
- `js/products.js` — single source of truth for product data (`window.PRODUCTS`), loaded before every other script
- `js/main.js` — homepage interactivity (nav, sparkles, bubbles, scroll-reveal, carousel, forms)
- `js/cart.js` — shopping cart (localStorage) + WhatsApp checkout handoff
- `js/product-detail.js` — standalone product page behaviour (gallery, qty, related products)
- `js/motion.js` — shared pointer/scroll-parallax and 3D tilt utilities
- `js/page-transitions.js` — GSAP nav-click page transition
- `js/assistant.js` — Ada's Assistant chat widget
- `assets/` — images and videos
- Bootstrap 5.3.3 is loaded via CDN; GSAP is loaded via CDN for page transitions

To preview locally, serve the directory with any static file server
(e.g. `npx serve .`) and open `index.html`.
