document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
     Global sparkles
     ============================================================ */
  const GLITTER = [
    { top: "4%",  left: "8%",  size: "0.75rem", color: "var(--color-blossom-300)", delay: "0s",   duration: "3.4s", opacity: 0.8 },
    { top: "11%", left: "27%", size: "0.875rem", color: "var(--color-lavender-300)", delay: "1.2s", duration: "4s",   opacity: 0.7 },
    { top: "6%",  left: "52%", size: "0.75rem",  color: "var(--color-sky-300)",     delay: "2.4s", duration: "3.6s", opacity: 0.75 },
    { top: "16%", left: "71%", size: "0.875rem", color: "var(--color-blossom-300)", delay: "0.6s", duration: "4.4s", opacity: 0.65 },
    { top: "9%",  left: "90%", size: "0.75rem",  color: "var(--color-lavender-300)", delay: "3s",   duration: "3.2s", opacity: 0.8 },
    { top: "24%", left: "16%", size: "0.75rem",  color: "var(--color-sky-300)",     delay: "1.8s", duration: "3.8s", opacity: 0.7 },
    { top: "29%", left: "62%", size: "0.875rem", color: "var(--color-blossom-300)", delay: "2.6s", duration: "4.2s", opacity: 0.6 },
    { top: "33%", left: "85%", size: "0.75rem",  color: "var(--color-lavender-300)", delay: "0.3s", duration: "3.5s", opacity: 0.75 },
    { top: "41%", left: "5%",  size: "0.875rem", color: "var(--color-sky-300)",     delay: "1.5s", duration: "4s",   opacity: 0.65 },
    { top: "47%", left: "38%", size: "0.75rem",  color: "var(--color-blossom-300)", delay: "2.1s", duration: "3.3s", opacity: 0.8 },
    { top: "52%", left: "73%", size: "0.875rem", color: "var(--color-lavender-300)", delay: "0.9s", duration: "4.3s", opacity: 0.6 },
    { top: "59%", left: "20%", size: "0.75rem",  color: "var(--color-sky-300)",     delay: "3.3s", duration: "3.7s", opacity: 0.7 },
    { top: "63%", left: "94%", size: "0.875rem", color: "var(--color-blossom-300)", delay: "1.1s", duration: "4.1s", opacity: 0.75 },
    { top: "68%", left: "44%", size: "0.75rem",  color: "var(--color-lavender-300)", delay: "2.9s", duration: "3.4s", opacity: 0.65 },
    { top: "74%", left: "8%",  size: "0.875rem", color: "var(--color-sky-300)",     delay: "0.4s", duration: "4.5s", opacity: 0.7 },
    { top: "78%", left: "60%", size: "0.75rem",  color: "var(--color-blossom-300)", delay: "1.9s", duration: "3.6s", opacity: 0.8 },
    { top: "84%", left: "30%", size: "0.875rem", color: "var(--color-lavender-300)", delay: "2.5s", duration: "4s",   opacity: 0.6 },
    { top: "89%", left: "82%", size: "0.75rem",  color: "var(--color-sky-300)",     delay: "0.7s", duration: "3.9s", opacity: 0.75 },
    { top: "94%", left: "15%", size: "0.875rem", color: "var(--color-blossom-300)", delay: "3.2s", duration: "4.3s", opacity: 0.65 },
    { top: "97%", left: "55%", size: "0.75rem",  color: "var(--color-lavender-300)", delay: "1.4s", duration: "3.5s", opacity: 0.8 },
  ];

  const sparkleLayer = document.querySelector(".sparkles-layer");
  if (sparkleLayer) {
    GLITTER.forEach((g) => {
      const span = document.createElement("span");
      span.className = "anim-twinkle";
      span.textContent = "✦";
      span.style.top = g.top;
      span.style.left = g.left;
      span.style.fontSize = g.size;
      span.style.color = g.color;
      span.style.animationDelay = g.delay;
      span.style.animationDuration = g.duration;
      span.style.setProperty("--twinkle-opacity", g.opacity);
      sparkleLayer.appendChild(span);
    });
  }

  /* ============================================================
     Bubbles (rising water bubbles)
     ============================================================ */
  function bubbleAt(i) {
    return {
      size: 20 + ((i * 17) % 50),
      side: i % 2 === 0 ? "left" : "right",
      offset: (i * 5.5) % 15,
      duration: 6 + ((i * 3.1) % 6),
      delay: (i * 1.7) % 8,
      drift: ((i * 13) % 60) - 30,
    };
  }

  document.querySelectorAll(".bubbles-layer").forEach((layer) => {
    const count = parseInt(layer.dataset.count || "16", 10);
    for (let i = 0; i < count; i++) {
      const b = bubbleAt(i);
      const span = document.createElement("span");
      span.className = "anim-bubble-flow";
      span.style.width = `${b.size}px`;
      span.style.height = `${b.size}px`;
      span.style[b.side] = `${b.offset}%`;
      span.style.animationDuration = `${b.duration}s`;
      span.style.animationDelay = `${b.delay}s`;
      span.style.setProperty("--drift", `${b.drift}px`);
      layer.appendChild(span);
    }
  });

  /* ============================================================
     Lazy autoplay videos — below-the-fold <video data-src> tags don't
     fetch a byte until they approach the viewport, then start playing.
     ============================================================ */
  const lazyVideos = document.querySelectorAll("video[data-src]");
  function loadLazyVideo(v) {
    v.src = v.dataset.src;
    v.removeAttribute("data-src");
    if (v.autoplay) v.play().catch(() => {});
  }
  if ("IntersectionObserver" in window && lazyVideos.length) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadLazyVideo(entry.target);
        videoObserver.unobserve(entry.target);
      });
    }, { rootMargin: "400px" });
    lazyVideos.forEach((v) => videoObserver.observe(v));
  } else {
    lazyVideos.forEach(loadLazyVideo);
  }

  /* ============================================================
     Nav
     ============================================================ */
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  function onScroll() {
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.classList.toggle("open");
      mobileMenu.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navToggle.classList.remove("open");
        mobileMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ============================================================
     Language switcher (UI only — no content translation yet)
     ============================================================ */
  const langCurrent = document.querySelector(".lang-current");
  const langOptions = document.querySelectorAll(".lang-option");
  const savedLang = localStorage.getItem("enchanta-lang") || "en";

  function setActiveLang(code) {
    langOptions.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === code);
    });
    const active = document.querySelector(`.lang-option[data-lang="${code}"]`);
    if (langCurrent && active) langCurrent.textContent = active.dataset.label;
  }

  setActiveLang(savedLang);

  langOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.lang;
      localStorage.setItem("enchanta-lang", code);
      setActiveLang(code);
    });
  });

  /* ============================================================
     Hero sparkles + tilt
     ============================================================ */
  const HERO_SPARKLES = [
    { top: "12%", left: "8%", size: 6, delay: "0s", duration: "3.2s", opacity: 0.9 },
    { top: "22%", left: "85%", size: 4, delay: "0.6s", duration: "2.6s", opacity: 0.7 },
    { top: "68%", left: "12%", size: 5, delay: "1.1s", duration: "3.8s", opacity: 0.8 },
    { top: "78%", left: "90%", size: 4, delay: "1.8s", duration: "3s", opacity: 0.65 },
    { top: "8%", left: "45%", size: 3, delay: "0.3s", duration: "2.4s", opacity: 0.6 },
    { top: "35%", left: "92%", size: 5, delay: "2.2s", duration: "3.5s", opacity: 0.85 },
    { top: "52%", left: "5%", size: 4, delay: "1.4s", duration: "2.9s", opacity: 0.7 },
    { top: "90%", left: "35%", size: 3, delay: "0.9s", duration: "2.7s", opacity: 0.6 },
    { top: "15%", left: "65%", size: 5, delay: "2.6s", duration: "3.3s", opacity: 0.8 },
    { top: "44%", left: "28%", size: 3, delay: "1.6s", duration: "2.5s", opacity: 0.55 },
    { top: "30%", left: "18%", size: 4, delay: "0.4s", duration: "3.1s", opacity: 0.75 },
    { top: "62%", left: "70%", size: 6, delay: "2s", duration: "3.6s", opacity: 0.85 },
    { top: "85%", left: "60%", size: 3, delay: "1.2s", duration: "2.8s", opacity: 0.6 },
    { top: "5%", left: "25%", size: 4, delay: "2.4s", duration: "3.4s", opacity: 0.7 },
    { top: "48%", left: "50%", size: 3, delay: "0.7s", duration: "2.6s", opacity: 0.5 },
    { top: "72%", left: "40%", size: 5, delay: "1.9s", duration: "3.2s", opacity: 0.8 },
  ];

  const heroSparkleField = document.querySelector(".hero .sparkle-field");
  if (heroSparkleField) {
    HERO_SPARKLES.forEach((s) => {
      const span = document.createElement("span");
      span.className = "sparkle anim-twinkle";
      span.style.top = s.top;
      span.style.left = s.left;
      span.style.width = `${s.size}px`;
      span.style.height = `${s.size}px`;
      span.style.animationDelay = s.delay;
      span.style.animationDuration = s.duration;
      span.style.setProperty("--twinkle-opacity", s.opacity);
      heroSparkleField.appendChild(span);
    });
  }

  /* ---- fairy dust: fine motes rising slowly through the portal,
     fading in and out at the ends of their climb ---- */
  const FAIRY_DUST = [
    { left: "6%", delay: "0s", duration: "9s", x: "14px", opacity: 0.7 },
    { left: "14%", delay: "-3s", duration: "11s", x: "-10px", opacity: 0.5 },
    { left: "22%", delay: "-6.5s", duration: "8s", x: "18px", opacity: 0.8 },
    { left: "30%", delay: "-1.5s", duration: "12s", x: "-16px", opacity: 0.55 },
    { left: "38%", delay: "-8s", duration: "9.5s", x: "12px", opacity: 0.65 },
    { left: "46%", delay: "-4s", duration: "10.5s", x: "-14px", opacity: 0.7 },
    { left: "54%", delay: "-10s", duration: "8.5s", x: "16px", opacity: 0.6 },
    { left: "62%", delay: "-2s", duration: "11.5s", x: "-12px", opacity: 0.75 },
    { left: "70%", delay: "-7s", duration: "9s", x: "10px", opacity: 0.5 },
    { left: "78%", delay: "-5.5s", duration: "10s", x: "-18px", opacity: 0.65 },
    { left: "86%", delay: "-9s", duration: "8s", x: "14px", opacity: 0.7 },
    { left: "94%", delay: "-3.5s", duration: "12.5s", x: "-10px", opacity: 0.55 },
    { left: "10%", delay: "-6s", duration: "10s", x: "16px", opacity: 0.6 },
    { left: "50%", delay: "-1s", duration: "9s", x: "-12px", opacity: 0.7 },
    { left: "90%", delay: "-8.5s", duration: "11s", x: "12px", opacity: 0.5 },
    { left: "34%", delay: "-4.5s", duration: "8.5s", x: "-16px", opacity: 0.65 },
  ];

  const fairyDustField = document.querySelector(".hero .fairy-dust");
  if (fairyDustField) {
    FAIRY_DUST.forEach((d) => {
      const span = document.createElement("span");
      span.className = "anim-dust";
      span.style.left = d.left;
      span.style.animationDelay = d.delay;
      span.style.animationDuration = d.duration;
      span.style.setProperty("--dust-x", d.x);
      span.style.setProperty("--dust-op", d.opacity);
      fairyDustField.appendChild(span);
    });
  }

  const heroSection = document.querySelector(".hero");
  const driftEls = document.querySelectorAll(".hero [data-drift-x], .hero [data-drift-y]");
  if (heroSection && driftEls.length && window.EnchantaMotion) {
    // Piggybacks on motion.js's single rAF-batched pointer tracker
    // instead of adding another raw mousemove listener.
    window.EnchantaMotion.onPointerMove((clientX, clientY) => {
      const rect = heroSection.getBoundingClientRect();
      const inside =
        clientX >= rect.left && clientX <= rect.right &&
        clientY >= rect.top && clientY <= rect.bottom;
      const x = inside ? (clientX - rect.left) / rect.width - 0.5 : 0;
      const y = inside ? (clientY - rect.top) / rect.height - 0.5 : 0;
      driftEls.forEach((el) => {
        const fx = parseFloat(el.dataset.driftX || 0);
        const fy = parseFloat(el.dataset.driftY || 0);
        el.style.transform = `translate(${x * fx}px, ${y * fy}px)`;
      });
    });
  }

  /* ============================================================
     Scroll reveal (IntersectionObserver)
     ============================================================ */
  const revealEls = document.querySelectorAll("[data-reveal], .reveal-group");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.02 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ============================================================
     Summer carousel
     ============================================================ */
  const SLIDES = [
    { icon: "🐚", label: "Shell-stitch totes by the shore", alt: false },
    { icon: "🌊", label: "Woven for sun-soaked afternoons", alt: true },
    { icon: "🩷", label: "Hand-tied straps & sea-glass beads", alt: false },
    { icon: "🫧", label: "Light as sea foam, soft as sand", alt: true },
    { icon: "🌅", label: "Golden hour on the coastline", alt: false },
  ];

  const carouselArt = document.querySelector(".summer .carousel-art");
  const carouselDots = document.querySelectorAll(".summer .carousel-dots button");
  if (carouselArt && carouselDots.length) {
    const setSlide = (i) => {
      const slide = SLIDES[i];
      carouselArt.querySelector(".art-icon").textContent = slide.icon;
      carouselArt.querySelector(".art-label").textContent = slide.label;
      carouselArt.classList.toggle("grad-skyfade", slide.alt);
      carouselArt.classList.toggle("grad-skydeep", !slide.alt);
      carouselDots.forEach((dot, di) => dot.classList.toggle("active", di === i));
    };
    carouselDots.forEach((dot, i) => {
      dot.addEventListener("click", () => setSlide(i));
    });
    setSlide(0);
  }

  /* ============================================================
     Collections filter + show more
     ============================================================ */
  const filterButtons = document.querySelectorAll(".collections-grid .filters button");
  const relics = document.querySelectorAll(".collections-grid .relic");
  const seeMoreBtn = document.querySelector(".collections-grid .see-more button");
  let showAll = false;

  function applyCollectionsFilter() {
    const activeFilter = document.querySelector(".collections-grid .filters button.active")?.dataset.filter || "all";
    let visibleCount = 0;
    let matchCount = 0;
    relics.forEach((relic) => {
      const matches = activeFilter === "all" || relic.dataset.category === activeFilter;
      if (matches) matchCount++;
    });
    relics.forEach((relic) => {
      const matches = activeFilter === "all" || relic.dataset.category === activeFilter;
      let show = false;
      if (matches) {
        if (showAll || visibleCount < 3) {
          show = true;
          visibleCount++;
        }
      }
      relic.style.display = show ? "" : "none";
    });
    if (seeMoreBtn) {
      seeMoreBtn.parentElement.style.display = matchCount > 3 ? "" : "none";
      seeMoreBtn.textContent = showAll ? "Show less" : "See more";
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showAll = false;
      applyCollectionsFilter();
    });
  });

  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", () => {
      showAll = !showAll;
      applyCollectionsFilter();
    });
  }

  if (filterButtons.length) applyCollectionsFilter();

  /* ============================================================
     PreOrder form
     ============================================================ */
  const preorderForm = document.querySelector(".preorder form");
  if (preorderForm) {
    preorderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = preorderForm.querySelector("input[type='email']").value;
      const msg = preorderForm.querySelector(".submitted-msg");
      if (email && msg) msg.style.display = "block";
    });
  }

  /* ============================================================
     Custom Made form
     ============================================================ */
  const customForm = document.querySelector(".custom-made form");
  if (customForm) {
    customForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = customForm.querySelector("input[type='text']").value;
      const details = customForm.querySelector("textarea").value;
      const msg = customForm.querySelector(".sent-msg");
      if (name && details && msg) msg.style.display = "block";
    });
  }
});

/* ============================================================
   One-time welcome popup (index.html #welcomePopup) — shows on a
   visitor's very first visit only; the localStorage flag is set
   the moment it appears so it never shows a second time.
   ============================================================ */
function closeWelcomePopup() {
  const popup = document.getElementById("welcomePopup");
  if (popup) {
    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("welcomePopup");
  if (!popup) return;

  const KEY = "enchantaWelcomeSeen";
  try {
    if (localStorage.getItem(KEY)) return;
    localStorage.setItem(KEY, "1");
  } catch (e) {
    return; // storage unavailable (private mode) — skip rather than nag on every visit
  }

  setTimeout(() => {
    popup.classList.add("active");
    popup.setAttribute("aria-hidden", "false");
  }, 900);

  popup.addEventListener("click", (e) => {
    if (e.target === popup) closeWelcomePopup();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeWelcomePopup();
  });
});
