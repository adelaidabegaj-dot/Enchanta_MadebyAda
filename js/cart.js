/* ============================================================
   Shopping cart
   No backend exists for this site (the pre-order/custom-made
   forms are lead-gen mockups, not real submissions), so checkout
   here means: build a plain-text order summary and hand it off
   to WhatsApp for Ada to follow up on and arrange real payment —
   the same model the rest of the site already uses. WhatsApp is
   the only ordering path on purpose (simplest for Ada to manage).

   *** CONFIGURE BEFORE GOING LIVE ***
   Fill in the real WhatsApp number (digits only, country code,
   no + or spaces) below, or the order button goes nowhere.
   ============================================================ */
const STORE_WHATSAPP_NUMBER = ""; // e.g. "355691234567"

const CART_STORAGE_KEY = "enchanta_cart";

/* Pages under products/ set <html data-base="../"> so shared scripts can
   turn the site-root-relative paths in js/products.js into working <img
   src> values no matter how deep the current page is nested. */
const ASSET_BASE = document.documentElement.dataset.base || "";
function resolveAssetPath(path) {
  if (!path || /^https?:\/\//.test(path)) return path;
  return ASSET_BASE + path;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function getCartCount() {
  return getCart().reduce((sum, line) => sum + line.qty, 0);
}

/* js/products.js is the single source of truth for product data (loaded
   on every page before this file), so the cart can always resolve every
   line's title/price/image regardless of which page the cart is opened
   from. Cards on the current page are still scanned as a fallback, in
   case a product isn't in that shared list for some reason. */
function buildProductIndex() {
  const index = {};
  (window.PRODUCTS || []).forEach((p) => {
    index[p.id] = {
      id: p.id,
      title: p.title,
      price: parseFloat(String(p.price).replace(/[^0-9.]/g, "")) || 0,
      priceLabel: p.price,
      image: resolveAssetPath((p.images || [])[0] || ""),
    };
  });
  document.querySelectorAll("[data-id]").forEach((el) => {
    const id = el.dataset.id;
    if (!id || index[id]) return;
    const images = JSON.parse(el.dataset.images || "[]");
    index[id] = {
      id,
      title: el.dataset.title || "",
      price: parseFloat((el.dataset.price || "0").replace(/[^0-9.]/g, "")) || 0,
      priceLabel: el.dataset.price || "",
      image: resolveAssetPath(images[0] || ""),
    };
  });
  return index;
}

function addToCart(id, qty) {
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find((line) => line.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  saveCart(getCart().filter((line) => line.id !== id));
  renderCartOverlay();
}

function updateCartLineQty(id, qty) {
  const cart = getCart();
  const line = cart.find((l) => l.id === id);
  if (!line) return;
  line.qty = Math.max(1, qty);
  saveCart(cart);
  renderCartOverlay();
}

function updateCartBadge() {
  const badge = document.querySelectorAll(".cart-count");
  const count = getCartCount();
  badge.forEach((el) => {
    el.textContent = String(count);
    el.classList.toggle("is-visible", count > 0);
  });
}

function renderCartOverlay() {
  const products = buildProductIndex();
  const cart = getCart();
  const listEl = document.getElementById("cartLines");
  const emptyEl = document.getElementById("cartEmpty");
  const totalEl = document.getElementById("cartTotal");

  if (!cart.length) {
    listEl.innerHTML = "";
    emptyEl.style.display = "block";
    totalEl.textContent = "$0";
    return;
  }
  emptyEl.style.display = "none";

  let total = 0;
  listEl.innerHTML = cart
    .map((line) => {
      const p = products[line.id];
      if (!p) return "";
      total += p.price * line.qty;
      return `
        <div class="cart-line">
          <img src="${p.image}" alt="${p.title}" class="cart-line-img">
          <div class="cart-line-info">
            <h4 class="font-display">${p.title}</h4>
            <span class="cart-line-price">${p.priceLabel}</span>
            <div class="qty-stepper">
              <button type="button" onclick="updateCartLineQty('${p.id}', ${line.qty - 1})" aria-label="Decrease quantity">&minus;</button>
              <span>${line.qty}</span>
              <button type="button" onclick="updateCartLineQty('${p.id}', ${line.qty + 1})" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button type="button" class="cart-line-remove" onclick="removeFromCart('${p.id}')" aria-label="Remove ${p.title}">&times;</button>
        </div>`;
    })
    .join("");

  totalEl.textContent = "$" + total.toFixed(2).replace(/\.00$/, "");
}

function buildOrderMessage() {
  const products = buildProductIndex();
  const cart = getCart();
  let total = 0;
  const lines = cart.map((line) => {
    const p = products[line.id];
    if (!p) return "";
    const lineTotal = p.price * line.qty;
    total += lineTotal;
    return `${line.qty}x ${p.title} — $${lineTotal.toFixed(2).replace(/\.00$/, "")}`;
  });
  return (
    `Hi Ada! I'd like to order:\n\n` +
    lines.join("\n") +
    `\n\nTotal: $${total.toFixed(2).replace(/\.00$/, "")}` +
    `\n\n(Sent from the Enchanta website)`
  );
}

function checkoutViaWhatsApp() {
  if (!getCart().length) return;
  const text = encodeURIComponent(buildOrderMessage());
  window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
}

function openCartOverlay() {
  renderCartOverlay();
  document.getElementById("cartOverlay").classList.add("active");
}

function closeCartOverlay() {
  document.getElementById("cartOverlay").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  /* Wire the per-card quick "Add to Cart" buttons (Mermaid Tales cards use
     .luxury-order-btn, Rising Moon cards use .reserve-btn) without needing
     to open the full product page first. */
  document.querySelectorAll(".luxury-order-btn, .reserve-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = btn.closest("[data-id]");
      if (!card) return;
      addToCart(card.dataset.id, 1);
      const original = btn.textContent;
      btn.textContent = "Added! ✓";
      setTimeout(() => { btn.textContent = original; }, 1200);
    });
  });
});
