/* ============================================================
   Shared motion utilities — one rAF-batched pointer tracker, one
   rAF-batched scroll tracker, a 3D tilt handler for [data-tilt]
   cards, and a scroll-depth parallax handler for [data-parallax]
   elements. Everything funnels through a single listener per event
   type so layering on several decorative effects doesn't mean
   stacking several raw mousemove/scroll listeners.

   Fully inert under prefers-reduced-motion: reduce, and tilt is
   skipped on touch/coarse-pointer devices (hover doesn't apply) —
   in both cases elements just sit at their CSS fallback (0deg
   tilt, no parallax offset), so nothing breaks, it's just still.
   ============================================================ */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  var pointerCallbacks = [];
  window.EnchantaMotion = {
    /* Lets other scripts (e.g. main.js's hero petal parallax) piggyback
       on the same rAF-batched pointer stream instead of adding their
       own raw mousemove listener. Callback receives (clientX, clientY). */
    onPointerMove: function (cb) { pointerCallbacks.push(cb); },
  };

  if (prefersReducedMotion) return;

  /* ---- pointer tracker: sets --pointer-x/--pointer-y (-0.5..0.5) on
     <html>, for any CSS that wants decor to drift gently with the
     cursor, plus fans out to registered callbacks ---- */
  var pointerX = window.innerWidth / 2;
  var pointerY = window.innerHeight / 2;
  var pointerFrameQueued = false;

  function flushPointer() {
    pointerFrameQueued = false;
    var root = document.documentElement;
    root.style.setProperty("--pointer-x", (pointerX / window.innerWidth - 0.5).toFixed(4));
    root.style.setProperty("--pointer-y", (pointerY / window.innerHeight - 0.5).toFixed(4));
    for (var i = 0; i < pointerCallbacks.length; i++) pointerCallbacks[i](pointerX, pointerY);
  }

  window.addEventListener("pointermove", function (e) {
    pointerX = e.clientX;
    pointerY = e.clientY;
    if (!pointerFrameQueued) {
      pointerFrameQueued = true;
      requestAnimationFrame(flushPointer);
    }
  }, { passive: true });

  /* ---- scroll-depth parallax: [data-parallax="0.3"] elements drift by
     depth * distance-from-viewport-center, translateY only (GPU-cheap,
     never touches layout) ---- */
  var parallaxEls = [];
  var scrollFrameQueued = false;

  function updateParallax() {
    scrollFrameQueued = false;
    var vh = window.innerHeight;
    for (var i = 0; i < parallaxEls.length; i++) {
      var item = parallaxEls[i];
      var rect = item.el.getBoundingClientRect();
      var centerOffset = rect.top + rect.height / 2 - vh / 2;
      item.el.style.transform = "translateY(" + (centerOffset * -item.depth * 0.08).toFixed(2) + "px)";
    }
  }

  function queueParallax() {
    if (!scrollFrameQueued) {
      scrollFrameQueued = true;
      requestAnimationFrame(updateParallax);
    }
  }

  window.addEventListener("scroll", queueParallax, { passive: true });
  window.addEventListener("resize", queueParallax, { passive: true });

  /* ---- 3D tilt on [data-tilt] cards: rotateX/rotateY follow the
     cursor's position within the card, rAF-batched, reset on leave.
     Desktop-with-a-mouse only — touch has no hover to tilt toward. ---- */
  function setupTilt(el) {
    var maxTilt = parseFloat(el.dataset.tilt) || 6; // degrees
    var pendingEvent = null;
    var frameQueued = false;

    function apply() {
      frameQueued = false;
      if (!pendingEvent) return;
      var rect = el.getBoundingClientRect();
      var px = (pendingEvent.clientX - rect.left) / rect.width - 0.5;
      var py = (pendingEvent.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--tilt-x", (-py * maxTilt).toFixed(2) + "deg");
      el.style.setProperty("--tilt-y", (px * maxTilt).toFixed(2) + "deg");
    }

    el.addEventListener("pointermove", function (e) {
      pendingEvent = e;
      if (!frameQueued) {
        frameQueued = true;
        requestAnimationFrame(apply);
      }
    }, { passive: true });

    el.addEventListener("pointerleave", function () {
      pendingEvent = null;
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (canHover) {
      document.querySelectorAll("[data-tilt]").forEach(setupTilt);
    }

    document.querySelectorAll("[data-parallax]").forEach(function (el) {
      parallaxEls.push({ el: el, depth: parseFloat(el.dataset.parallax) || 0.2 });
    });
    if (parallaxEls.length) updateParallax();
  });
})();
