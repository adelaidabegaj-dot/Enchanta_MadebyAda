/* ============================================================
   Nav-click page transitions
   Clicking an in-page anchor plays one shared fairy-core
   "magical event": the colour veil fades up while golden
   sparkle stars bloom in with a slow twirl, pink dust motes
   shimmer upward and petals flutter down — then everything
   dissolves as the veil lifts on the destination. The `.pt-veil`
   opacity fade is what actually guarantees the jump is hidden;
   the sparkles are pure decoration on top of it, built from
   plain transforms so nothing here depends on WebGL or
   SVG morphing.
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const overlayEl = document.getElementById("pageTransition");
  const veilEl = document.getElementById("ptVeil");
  if (!overlayEl || !veilEl || typeof gsap === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  /* Every destination shares the fairy-core scene; only the veil
     colour changes to match where you're headed. */
  const VEILS = {
    top: "#dcedfb",
    about: "#5a3049",
    summer: "#4a7fc4",
    moon: "#06101f",
    preorder: "#5a3049",
    moodboard: "#fef1f6",
    bags: "#fef1f6",
    editorial: "#fef1f6",
    custom: "#ece1f7",
  };

  const scene = overlayEl.querySelector('.pt-scene[data-flavor="fairycore"]');
  const stars = scene ? scene.querySelectorAll(".pt-fairy-star") : [];
  const motes = scene ? scene.querySelectorAll(".pt-fairy-mote") : [];
  const petals = scene ? scene.querySelectorAll(".pt-fairy-petal") : [];

  let isTransitioning = false;

  function playTransition(id) {
    const veil = VEILS[id];
    const target = document.getElementById(id);
    if (!veil || !target || !scene || isTransitioning) return false;

    isTransitioning = true;
    overlayEl.classList.add("is-active");
    veilEl.style.backgroundColor = veil;

    gsap.set(scene, { opacity: 1 });
    gsap.set(stars, { scale: 0, opacity: 0, rotation: 0, transformOrigin: "50% 50%" });
    gsap.set(motes, { scale: 0, opacity: 0, y: 0, transformOrigin: "50% 50%" });
    gsap.set(petals, { y: -10, opacity: 0, rotation: -25, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({
      onComplete() {
        overlayEl.classList.remove("is-active");
        gsap.set(scene, { opacity: 0 });
        isTransitioning = false;
      },
    });

    tl.to(veilEl, { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0);

    /* dust motes shimmer in and drift gently upward */
    tl.to(motes, { scale: 1, opacity: 0.9, duration: 0.35, ease: "power1.out", stagger: { each: 0.02, from: "random" } }, 0);
    tl.to(motes, { y: -12, duration: 1.15, ease: "sine.out", stagger: { each: 0.02, from: "random" } }, 0);

    /* sparkle stars bloom with a soft overshoot, twirling slowly */
    tl.to(stars, { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(2.5)", stagger: { each: 0.035, from: "random" } }, 0.05);
    tl.to(stars, { rotation: 90, duration: 1.1, ease: "sine.inOut" }, 0.05);

    /* petals flutter down through the dust */
    tl.to(petals, { y: 14, opacity: 0.95, rotation: 30, duration: 1.05, ease: "sine.inOut", stagger: 0.07 }, 0.08);

    tl.call(
      () => {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        history.pushState(null, "", "#" + id);
      },
      null,
      0.55
    );

    /* everything dissolves as the veil lifts */
    tl.to([...stars, ...motes, ...petals], { opacity: 0, scale: 0.4, duration: 0.4, ease: "power1.in", stagger: { each: 0.012, from: "random" } }, 0.72);
    tl.to(veilEl, { opacity: 0, duration: 0.55, ease: "power2.inOut" }, 0.62);

    return true;
  }

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest('a[href^="#"]');
    if (!link || link.getAttribute("href") === "#") return;

    const id = link.getAttribute("href").slice(1);
    if (!VEILS[id]) return;

    if (playTransition(id)) {
      event.preventDefault();
    }
  });
});
