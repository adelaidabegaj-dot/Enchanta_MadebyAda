/* ============================================================
   Ada's Assistant — a small on-site helper that answers
   questions about products (from js/products.js), prices,
   shipping, ordering, etc. No server needed: everything it
   knows lives in ASSISTANT_INFO below and window.PRODUCTS.

   ✏️ TO TEACH IT NEW THINGS: edit the ASSISTANT_INFO object.
   Every string there is a canned answer — write whatever you
   want the assistant to say. Add extra Q&As under "custom".
   ============================================================ */

(function () {
  "use strict";

  /* On pages inside /products/ every site link needs a ../ prefix */
  var BASE = /\/products\//.test(location.pathname) ? "../" : "";

  /* ---------------------------------------------------------
     ✏️ EDIT ME — the assistant's knowledge (besides products)
     --------------------------------------------------------- */
  var ASSISTANT_INFO = {
    name: "Ada's Assistant",
    tagline: "Ask me about products, prices & shipping ✨",
    avatar: BASE + "assets/images/ada-assistant.jpg",

    /* WhatsApp number, digits only with country code, e.g. "355691234567".
       Leave "" to just open WhatsApp without a number. */
    whatsappNumber: "",

    email: "hello@enchanta.com",

    shipping:
      "Every order is arranged personally with Ada 💌 When you order via WhatsApp she confirms the shipping options, cost and delivery time for your address. " +
      "✏️ (Edit this answer in js/assistant.js with your real shipping details — e.g. \"Free shipping in Albania, 2–4 days\".)",

    payment:
      "Payment is arranged directly with Ada when you place your order via WhatsApp — she'll walk you through the options. " +
      "✏️ (Edit this answer in js/assistant.js with your real payment methods.)",

    returns:
      "Since every piece is handmade in small batches, just message Ada on WhatsApp if something isn't right — she'll help with an exchange or fix. " +
      "✏️ (Edit this answer in js/assistant.js with your real return policy.)",

    ordering:
      "Ordering is easy 🛍️\n1. Add pieces to your bag on the site (or just tell Ada what you love)\n2. Tap “Order via WhatsApp”\n3. Ada confirms availability, shipping and payment with you personally",

    about:
      "Enchanta is Ada's little world of hand-crocheted bags and treasures 🧜‍♀️ Every piece is made by hand in small batches — no two are exactly alike.",

    /* Add your own Q&As here. "keywords": if the visitor's message
       contains ANY of these words, "answer" is shown. */
    custom: [
      /* Example:
      {
        keywords: ["custom order", "porosi speciale", "personalized"],
        answer: "Yes! Ada takes custom orders — message her on WhatsApp with your idea 💜"
      },
      */
    ]
  };

  /* Product detail pages that actually exist in /products/ —
     the assistant only links to a product page if it's listed here. */
  var PRODUCT_PAGES = [
    "sunrise", "deep-ocean", "sea-shell", "coral-dream", "tide-pool",
    "salty-horizon", "moonrise-tote", "crescent-clutch", "mako-pearl-bag",
    "widows-lace", "raven-feather", "hollow-bloom"
  ];

  var CATEGORY_LABELS = { canta: "bags", aksesor: "accessories", veshje: "clothing", dekor: "home decor" };

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */

  function normalize(text) {
    return String(text)
      .toLowerCase()
      .replace(/ç/g, "c").replace(/ë/g, "e")
      .replace(/[’'"]/g, "")
      .replace(/[^a-z0-9$€ ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeHTML(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  /* True if the message contains any keyword starting at a word boundary
     (so "hat" matches "hats" but not "what"). */
  function hasAny(msg, words) {
    for (var i = 0; i < words.length; i++) {
      var w = normalize(words[i]).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (new RegExp("(^|[^a-z0-9])" + w).test(msg)) return true;
    }
    return false;
  }

  function priceNumber(p) {
    return parseFloat(String(p.price).replace(/[^0-9.]/g, "")) || 0;
  }

  function products() {
    return window.PRODUCTS || [];
  }

  function whatsappLink() {
    return "https://wa.me/" + ASSISTANT_INFO.whatsappNumber;
  }

  function productLink(p) {
    if (PRODUCT_PAGES.indexOf(p.id) !== -1) {
      return BASE + "products/" + p.id + ".html";
    }
    return BASE + "index.html#shop";
  }

  function productLine(p) {
    return "• <a href=\"" + productLink(p) + "\"><strong>" + escapeHTML(p.title) + "</strong></a> — " + escapeHTML(p.price);
  }

  /* Find the product a message is talking about (best keyword score wins) */
  var GENERIC_TOKENS = ["bag", "tote", "clutch", "hat", "print", "charm", "dress", "poncho", "the", "art", "wrap", "bucket"];
  function findProduct(msg) {
    var best = null;
    var bestScore = 0;
    products().forEach(function (p) {
      var title = normalize(p.title);
      var score = 0;
      if (msg.indexOf(title) !== -1) score += 10;
      title.split(" ").forEach(function (token) {
        if (token.length < 4 || GENERIC_TOKENS.indexOf(token) !== -1) return;
        if (msg.indexOf(token) !== -1) score += 2;
      });
      if (score > bestScore) { bestScore = score; best = p; }
    });
    return bestScore >= 2 ? best : null;
  }

  function productCard(p) {
    var lines = ["<strong>" + escapeHTML(p.title) + "</strong> — " + escapeHTML(p.price)];
    if (p.desc) lines.push(escapeHTML(p.desc));
    if (p.story && p.story.facts) {
      p.story.facts.forEach(function (f) {
        lines.push("• " + escapeHTML(f.label) + ": " + escapeHTML(f.value));
      });
    }
    lines.push("<a href=\"" + productLink(p) + "\">See it here →</a>");
    return lines.join("\n");
  }

  /* ---------------------------------------------------------
     The brain — turns a visitor message into an answer (HTML)
     --------------------------------------------------------- */
  function answer(rawMsg) {
    var msg = normalize(rawMsg);
    if (!msg) return "Say something and I'll do my best ✨";

    /* Owner-added custom Q&As win first */
    for (var i = 0; i < ASSISTANT_INFO.custom.length; i++) {
      if (hasAny(msg, ASSISTANT_INFO.custom[i].keywords)) {
        return escapeHTML(ASSISTANT_INFO.custom[i].answer);
      }
    }

    var wantsPrice = hasAny(msg, ["price", "cost", "how much", "cmim", "sa kushton", "kushton", "$"]);
    var mentioned = findProduct(msg);

    /* Greetings / thanks / bye */
    if (/^(hi|hey|hello|yo|hola|pershendetje|ckemi|c kemi|tung|mirdita|miredita|good (morning|evening|afternoon))\b/.test(msg) && msg.split(" ").length <= 3) {
      return "Hi there! 🧚 I'm " + escapeHTML(ASSISTANT_INFO.name) + " — ask me about our products, prices, shipping or how to order.";
    }
    if (hasAny(msg, ["thank", "thanks", "faleminderit", "flm", "rrofsh"])) {
      return "You're so welcome! 💕 Anything else you'd like to know?";
    }
    if (hasAny(msg, ["bye", "goodbye", "mirupafshim", "shnet"])) {
      return "Bye-bye! Come back anytime ✨";
    }

    /* Shipping */
    if (hasAny(msg, ["shipping", "ship", "deliver", "delivery", "transport", "dergesa", "dergese", "posta", "arrive", "sa dite", "how long"])) {
      return ASSISTANT_INFO.shipping;
    }

    /* Payment */
    if (hasAny(msg, ["payment", "pay", "pagesa", "paguaj", "card", "cash", "paypal", "bank"])) {
      return ASSISTANT_INFO.payment;
    }

    /* Returns */
    if (hasAny(msg, ["return", "refund", "exchange", "kthim", "kthej", "nderroj", "warranty", "garanci"])) {
      return ASSISTANT_INFO.returns;
    }

    /* Ordering */
    if (hasAny(msg, ["order", "buy", "purchase", "porosi", "porosis", "blej", "checkout"])) {
      return ASSISTANT_INFO.ordering + "\n<a href=\"" + whatsappLink() + "\" target=\"_blank\" rel=\"noopener noreferrer\">Open WhatsApp →</a>";
    }

    /* Contact */
    if (hasAny(msg, ["contact", "kontakt", "email", "phone", "number", "reach", "instagram", "whatsapp"])) {
      return "You can reach Ada here 💌\n• WhatsApp: <a href=\"" + whatsappLink() + "\" target=\"_blank\" rel=\"noopener noreferrer\">chat now</a>\n• Email: <a href=\"mailto:" + ASSISTANT_INFO.email + "\">" + ASSISTANT_INFO.email + "</a>";
    }

    /* About (only when no specific product is being asked about) */
    if (!mentioned && hasAny(msg, ["about", "who is ada", "who made", "handmade", "brand", "enchanta", "story"])) {
      return ASSISTANT_INFO.about;
    }

    /* A specific product was mentioned */
    if (mentioned) {
      if (wantsPrice) {
        return "<strong>" + escapeHTML(mentioned.title) + "</strong> is <strong>" + escapeHTML(mentioned.price) + "</strong> 💰\n<a href=\"" + productLink(mentioned) + "\">See it here →</a>";
      }
      return productCard(mentioned);
    }

    /* Cheapest / most expensive / price range */
    var sorted = products().slice().sort(function (a, b) { return priceNumber(a) - priceNumber(b); });
    if (sorted.length) {
      if (hasAny(msg, ["cheapest", "cheap", "lowest", "me e lire", "e lire", "affordable", "budget"])) {
        return "Our friendliest prices right now ✨\n" + sorted.slice(0, 3).map(productLine).join("\n");
      }
      if (hasAny(msg, ["most expensive", "expensive", "luxury", "premium", "me e shtrenjte", "e shtrenjte"])) {
        return "Our most precious pieces 👑\n" + sorted.slice(-3).reverse().map(productLine).join("\n");
      }
      var under = msg.match(/(?:under|below|less than|max|nen|deri)\s*\$?\s*(\d+)/);
      if (under) {
        var limit = parseInt(under[1], 10);
        var within = sorted.filter(function (p) { return priceNumber(p) <= limit; });
        if (!within.length) return "Nothing under $" + limit + " right now — our prices start at " + escapeHTML(sorted[0].price) + ".";
        return "Here's what fits under $" + limit + " 💫\n" + within.slice(0, 6).map(productLine).join("\n");
      }
      if (wantsPrice) {
        return "Prices go from <strong>" + escapeHTML(sorted[0].price) + "</strong> to <strong>" + escapeHTML(sorted[sorted.length - 1].price) + "</strong> 💰 Ask me about any piece — for example “How much is " + escapeHTML(sorted[0].title) + "?”";
      }
    }

    /* Category browsing */
    var catAsk = null;
    if (hasAny(msg, ["bags", "bag", "canta", "cante", "tote", "clutch", "purse"])) catAsk = "canta";
    else if (hasAny(msg, ["accessor", "aksesor", "hat", "kapele", "charm", "varese"])) catAsk = "aksesor";
    else if (hasAny(msg, ["clothes", "clothing", "veshje", "dress", "fustan", "poncho"])) catAsk = "veshje";
    else if (hasAny(msg, ["decor", "dekor", "print", "wall", "poster"])) catAsk = "dekor";
    if (catAsk) {
      var inCat = products().filter(function (p) { return p.category === catAsk; });
      if (inCat.length) {
        return "Our " + CATEGORY_LABELS[catAsk] + " 🛍️\n" + inCat.slice(0, 8).map(productLine).join("\n");
      }
    }

    /* Collections */
    if (hasAny(msg, ["collection", "koleksion", "mermaid", "rising moon", "moonlit"])) {
      var cols = {};
      products().forEach(function (p) { cols[p.collection] = (cols[p.collection] || 0) + 1; });
      return "We have these collections 🌙\n" + Object.keys(cols).map(function (c) {
        return "• <strong>" + escapeHTML(c) + "</strong> (" + cols[c] + " pieces)";
      }).join("\n") + "\n<a href=\"" + BASE + "index.html#shop\">Browse the shop →</a>";
    }

    /* What do you sell */
    if (hasAny(msg, ["what do you sell", "products", "produkte", "cfare shisni", "cfare keni", "catalog", "show me", "everything", "sell"])) {
      return "We make hand-crocheted bags, accessories, clothing and art prints 🧶 A few favourites:\n" +
        sorted.slice(0, 4).map(productLine).join("\n") +
        "\n<a href=\"" + BASE + "index.html#shop\">See everything →</a>";
    }

    /* Fallback */
    return "Hmm, I'm not sure about that one 🫧 I can help with:\n• Product info & prices (“How much is Sunrise?”)\n• Shipping & payment\n• How to order\nOr ask Ada directly on <a href=\"" + whatsappLink() + "\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> 💬";
  }

  /* ---------------------------------------------------------
     Widget UI
     --------------------------------------------------------- */

  var CHIPS = [
    { label: "💰 Prices", ask: "What are your prices?" },
    { label: "🚚 Shipping", ask: "How does shipping work?" },
    { label: "🛍️ How to order", ask: "How do I order?" },
    { label: "👜 Show me bags", ask: "Show me your bags" }
  ];

  function buildWidget() {
    /* styles come from css/assistant.css, linked in each page's <head> —
       loading it there (render-blocking) means the panel can never flash
       unstyled while the stylesheet downloads */
    if (document.querySelector(".ada-launcher")) return;

    var launcher = document.createElement("button");
    launcher.className = "ada-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Chat with " + ASSISTANT_INFO.name);
    launcher.setAttribute("aria-expanded", "false");
    launcher.innerHTML =
      "<img src=\"" + ASSISTANT_INFO.avatar + "\" alt=\"\">" +
      "<span class=\"ada-launcher-badge\">✦</span>";

    var panel = document.createElement("div");
    panel.className = "ada-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", ASSISTANT_INFO.name);
    panel.innerHTML =
      "<div class=\"ada-header\">" +
        "<img src=\"" + ASSISTANT_INFO.avatar + "\" alt=\"\">" +
        "<div><span class=\"ada-header-name\">" + escapeHTML(ASSISTANT_INFO.name) + "</span>" +
        "<span class=\"ada-header-sub\">" + escapeHTML(ASSISTANT_INFO.tagline) + "</span></div>" +
        "<button type=\"button\" class=\"ada-close\" aria-label=\"Close chat\">✕</button>" +
      "</div>" +
      "<div class=\"ada-messages\"></div>" +
      "<div class=\"ada-chips\"></div>" +
      "<form class=\"ada-input\">" +
        "<input type=\"text\" placeholder=\"Ask me anything…\" aria-label=\"Your question\">" +
        "<button type=\"submit\" aria-label=\"Send\">" +
          "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z\"/></svg>" +
        "</button>" +
      "</form>";

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    var messagesEl = panel.querySelector(".ada-messages");
    var chipsEl = panel.querySelector(".ada-chips");
    var form = panel.querySelector(".ada-input");
    var input = form.querySelector("input");
    var greeted = false;

    function addMessage(html, who) {
      var el = document.createElement("div");
      el.className = "ada-msg " + who;
      el.innerHTML = html;
      messagesEl.appendChild(el);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return el;
    }

    function respond(question) {
      var typing = addMessage("<span class=\"ada-typing\"><span></span><span></span><span></span></span>", "bot");
      setTimeout(function () {
        typing.innerHTML = answer(question);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }, 500 + Math.random() * 400);
    }

    function ask(question) {
      addMessage(escapeHTML(question), "user");
      respond(question);
    }

    CHIPS.forEach(function (chip) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "ada-chip";
      b.textContent = chip.label;
      b.addEventListener("click", function () { ask(chip.ask); });
      chipsEl.appendChild(b);
    });

    function toggle(open) {
      panel.classList.toggle("open", open);
      launcher.setAttribute("aria-expanded", String(open));
      if (open) {
        if (!greeted) {
          greeted = true;
          addMessage("Hi! I'm " + escapeHTML(ASSISTANT_INFO.name) + " 🧚 Ask me about our handmade pieces, prices, shipping or ordering — or tap a question below!", "bot");
        }
        input.focus();
      }
    }

    launcher.addEventListener("click", function () {
      toggle(!panel.classList.contains("open"));
    });
    panel.querySelector(".ada-close").addEventListener("click", function () { toggle(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("open")) toggle(false);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q) return;
      input.value = "";
      ask(q);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildWidget);
  } else {
    buildWidget();
  }
})();
