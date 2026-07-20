/* Standalone product page behaviour (products/*.html): rebuilds the photo
   carousel from js/products.js, wires the quantity stepper, and hands
   off to the shared cart.js for Add to Cart / Buy Now. Requires
   js/products.js and js/cart.js to be loaded first. */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".product-detail-page[data-id]");
  if (!page) return;

  const product = (window.PRODUCTS || []).find((p) => p.id === page.dataset.id);
  if (!product) return;

  const slidesEl = page.querySelector("[data-slides]");
  const dotsEl = page.querySelector("[data-dots]");
  const images = product.images || [];
  const slideCount = images.length;
  let slideIndex = 0;

  function updateSlidePosition() {
    if (slidesEl) slidesEl.style.transform = `translateX(-${slideIndex * 100}%)`;
    if (dotsEl) {
      dotsEl.querySelectorAll(".product-modal-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === slideIndex);
      });
    }
  }

  function goToSlide(index) {
    if (!slideCount) return;
    slideIndex = (index + slideCount) % slideCount;
    updateSlidePosition();
  }

  if (slidesEl && slideCount) {
    slidesEl.innerHTML = images
      .map((src, i) => `<img src="${resolveAssetPath(src)}" alt="${product.title} photo ${i + 1}">`)
      .join("");
  }
  if (dotsEl && slideCount) {
    dotsEl.innerHTML = images
      .map((_, i) => `<button type="button" class="product-modal-dot" data-slide-index="${i}" aria-label="Photo ${i + 1}"></button>`)
      .join("");
    dotsEl.querySelectorAll(".product-modal-dot").forEach((dot) => {
      dot.addEventListener("click", () => goToSlide(Number(dot.dataset.slideIndex)));
    });
  }
  updateSlidePosition();

  page.querySelectorAll("[data-action='prev']").forEach((btn) => btn.addEventListener("click", () => goToSlide(slideIndex - 1)));
  page.querySelectorAll("[data-action='next']").forEach((btn) => btn.addEventListener("click", () => goToSlide(slideIndex + 1)));

  let touchStartX = null;
  if (slidesEl) {
    slidesEl.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; });
    slidesEl.addEventListener("touchend", (e) => {
      if (touchStartX === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 40) goToSlide(slideIndex + (deltaX < 0 ? 1 : -1));
      touchStartX = null;
    });
  }

  /* Quantity stepper */
  let qty = 1;
  const qtyValueEl = page.querySelector("[data-qty-value]");
  page.querySelectorAll("[data-qty]").forEach((btn) => {
    btn.addEventListener("click", () => {
      qty = Math.max(1, qty + Number(btn.dataset.qty));
      if (qtyValueEl) qtyValueEl.textContent = String(qty);
    });
  });

  /* Add to cart / Buy now */
  const addBtn = page.querySelector("[data-add-to-cart]");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      addToCart(product.id, qty);
      const original = addBtn.textContent;
      addBtn.textContent = "Added! ✓";
      setTimeout(() => { addBtn.textContent = original; }, 1200);
    });
  }
  const buyBtn = page.querySelector("[data-buy-now]");
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      addToCart(product.id, qty);
      openCartOverlay();
    });
  }

  /* Story block (materials/care + a couple of detail photos) and the
     "You may also like" grid both live outside .product-detail-page, as
     siblings inside .product-detail-wrap — everything is driven from
     this product's PRODUCTS entry so every products/*.html page stays
     in sync without hand-editing 9 near-identical files. */
  const wrap = page.closest(".product-detail-wrap") || document;
  const story = product.story;
  const storyTextEl = wrap.querySelector("[data-story-text]");
  if (story && storyTextEl) {
    const facts = story.facts && story.facts.length
      ? `<ul class="product-story-facts">${story.facts
          .map((f) => `<li><span>${f.label}</span>${f.value}</li>`)
          .join("")}</ul>`
      : "";
    storyTextEl.innerHTML = `
      <span class="kicker font-script">the details</span>
      <h2 class="font-display">${story.heading || "Crafted with care"}</h2>
      ${(story.paragraphs || []).map((p) => `<p>${p}</p>`).join("")}
      ${facts}
    `;
  }
  const storyPhotosEl = wrap.querySelector("[data-story-photos]");
  if (story && storyPhotosEl && story.photos && story.photos.length) {
    storyPhotosEl.innerHTML = story.photos
      .map((src, i) => `<img src="${resolveAssetPath(src)}" alt="${product.title} detail ${i + 1}" loading="lazy">`)
      .join("");
  }

  const relatedGridEl = wrap.querySelector("[data-related-grid]");
  if (relatedGridEl) {
    const others = (window.PRODUCTS || []).filter((p) => p.id !== product.id);
    const sameCollection = others.filter((p) => p.collection === product.collection);
    const rest = others.filter((p) => p.collection !== product.collection);
    const related = sameCollection.concat(rest).slice(0, 4);
    relatedGridEl.innerHTML = related
      .map(
        (p) => `
        <a class="related-card" href="${p.id}.html">
          <div class="related-card-img"><img src="${resolveAssetPath((p.images || [])[0] || "")}" alt="${p.title}" loading="lazy"></div>
          <div class="related-card-info">
            <h3 class="font-display">${p.title}</h3>
            <span class="related-card-price">${p.price}</span>
          </div>
        </a>`
      )
      .join("");
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
