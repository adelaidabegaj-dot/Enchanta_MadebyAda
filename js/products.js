/* Single source of truth for product data — used by index.html (cards),
   cart.js (resolving cart line info on any page) and every products/*.html
   detail page. Image paths are site-root-relative (no leading "../");
   product-detail.js prefixes "../" for pages under products/. */
window.PRODUCTS = [
  {
    id: "sunrise",
    title: "Sunrise",
    price: "$12",
    desc: "Një çantë e endur me dorë në nuanca të buta gjelbër-rozë, e frymëzuar nga agimi. Ideale për ditë vere dhe dalje casual.",
    images: [
      "assets/products/Sunkissed pink .jpg",
      "assets/products/Sunkissed yellow.jpg",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
    ],
    collection: "Mermaid Tales",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "Every Sunrise bag begins as a single ball of hand-dyed cotton yarn worked stitch by stitch into that soft green-to-pink gradient — no two skeins fade quite the same way, so no two bags are identical.",
        "Ada shapes the base first, then builds the sides in a continuous spiral so the finished bag holds its form without any stiffening or lining underneath."
      ],
      facts: [
        { label: "Material", value: "100% combed cotton yarn" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/products/Sunkissed yellow.jpg", "assets/images/gallery-1.jpeg"]
    }
  },
  {
    id: "deep-ocean",
    title: "Deep Ocean",
    price: "$20",
    desc: "Gradient mahnitës blu-jeshile që kujton thellësitë e oqeanit. Çdo pikë e endur me kujdes për një pamje unike.",
    images: [
      "assets/products/deep-ocean-bag.jpg",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80"
    ],
    collection: "Mermaid Tales",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "The blue-to-green gradient is hand-blended from three separate yarns before Ada casts on, so the colour shifts gradually across the bag rather than in hard bands.",
        "A double-stranded base keeps the bottom sturdy enough for everyday carrying, while the body stays soft and slouchy."
      ],
      facts: [
        { label: "Material", value: "100% combed cotton yarn" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/gallery-2.jpeg", "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80"]
    }
  },
  {
    id: "sea-shell",
    title: "Sea Shell",
    price: "$25",
    desc: "Dizajn i frymëzuar nga guaskat e detit, me tekstura delikate dhe zinxhir të gjatë për ta mbajtur në krah.",
    images: [
      "assets/products/sea-shell-bag.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80"
    ],
    collection: "Mermaid Tales",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "Inspired by the ridges of a real shell, the textured stitch pattern is worked in a raised shell stitch that takes nearly twice as long as a plain single crochet — worth it for the dimension it gives the surface.",
        "The long chain strap is reinforced with a cotton cord core so it keeps its shape even when the bag is full."
      ],
      facts: [
        { label: "Material", value: "100% combed cotton yarn" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/lace-texture-study.jpg", "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80"]
    }
  },
  {
    id: "coral-dream",
    title: "Coral Dream",
    price: "$30",
    desc: "Ngjyra korale të ngrohta që sjellin një prekje ëndrrimtare në çdo look veror.",
    images: [
      "assets/products/Coral shell bag .png",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
    ],
    collection: "Mermaid Tales",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "Warm coral and blush tones are worked in a gentle ombré, hand-tied between skeins so the transition stays soft rather than stripey.",
        "A soft cotton lining, sewn in by hand, keeps smaller items from slipping through the stitch gaps."
      ],
      facts: [
        { label: "Material", value: "100% combed cotton yarn, cotton lining" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80", "assets/images/gallery-1.jpeg"]
    }
  },
  {
    id: "tide-pool",
    title: "Tide Pool",
    price: "$35",
    desc: "Nuanca të përziera blu-jeshile, si pellgjet e vogla që lë deti pas. E lehtë dhe praktike për përditshmërinë.",
    images: [
      "assets/products/beach bag.jpg",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80",
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=800&q=80"
    ],
    collection: "Mermaid Tales",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "Named for the mix of blues and greens left behind when the tide goes out, this one mixes two yarn weights in the same row for a subtly nubbly texture.",
        "Lightweight enough for everyday wear, with a flat crocheted base that lets it stand upright on its own."
      ],
      facts: [
        { label: "Material", value: "100% combed cotton yarn" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=800&q=80", "assets/images/gallery-2.jpeg"]
    }
  },
  {
    id: "salty-horizon",
    title: "Salty Horizon",
    price: "$40",
    desc: "Frymëzuar nga horizonti i kripur i detit, kjo çantë sjell qetësi dhe elegancë minimaliste.",
    images: [
      "assets/images/salty-horizon-bag.jpeg",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80"
    ],
    collection: "Mermaid Tales",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "A quieter piece — one solid weathered-blue yarn worked in a tight, even stitch for a clean, minimal silhouette.",
        "The strap length was designed to sit at the hip, so it layers easily under a jacket or cover-up."
      ],
      facts: [
        { label: "Material", value: "100% combed cotton yarn" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/lace-texture-study.jpg", "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80"]
    }
  },
  {
    id: "moonrise-tote",
    title: "Moonrise Tote",
    price: "$580",
    desc: "Hand-crocheted in midnight cotton with silver-threaded handles and a mother-of-pearl clasp.",
    images: ["assets/images/lace-texture-study.jpg"],
    collection: "Rising Moon",
    category: "canta",
    edition: "3 / 7",
    story: {
      heading: "A numbered piece",
      paragraphs: [
        "Part of Ada's small Rising Moon capsule — pieces made in editions of four to seven, each one numbered by hand as it's finished.",
        "Midnight-blue cotton is worked around silver-threaded handles, then finished with a genuine mother-of-pearl clasp sourced from a small European supplier."
      ],
      facts: [
        { label: "Material", value: "Midnight cotton, silver thread, mother-of-pearl" },
        { label: "Edition", value: "3 / 7" },
        { label: "Care", value: "Spot clean only, store stuffed with tissue" }
      ],
      photos: ["assets/images/gallery-1.jpeg", "assets/images/lace-texture-study.jpg"]
    }
  },
  {
    id: "crescent-clutch",
    title: "Crescent Clutch",
    price: "$420",
    desc: "Shaped like a waning crescent — silk-lined interior, hand-sewn pearl-button closure.",
    images: ["assets/products/sea-shell-bag.jpg"],
    collection: "Rising Moon",
    category: "canta",
    edition: "2 / 5",
    story: {
      heading: "A numbered piece",
      paragraphs: [
        "Shaped like a waning crescent moon, this clutch is worked flat in two mirrored pieces and joined by hand along the curve.",
        "The silk lining is cut and sewn in-house before the pearl-button closure is added last."
      ],
      facts: [
        { label: "Material", value: "Cotton yarn, silk lining, pearl button" },
        { label: "Edition", value: "2 / 5" },
        { label: "Care", value: "Spot clean only, store stuffed with tissue" }
      ],
      photos: ["assets/images/gallery-2.jpeg", "assets/products/sea-shell-bag.jpg"]
    }
  },
  {
    id: "mako-pearl-bag",
    title: "Mako Pearl Bag",
    price: "$650",
    desc: "Woven in deep-sea cotton yarn, finished with hand-knotted freshwater pearls.",
    images: ["assets/products/beach bag.jpg"],
    collection: "Rising Moon",
    category: "canta",
    edition: "1 / 4",
    story: {
      heading: "A numbered piece",
      paragraphs: [
        "Woven in a heavier deep-sea cotton yarn chosen for structure, then finished with freshwater pearls knotted individually along the flap.",
        "The rarest piece in the capsule — only four will ever be made."
      ],
      facts: [
        { label: "Material", value: "Deep-sea cotton yarn, freshwater pearls" },
        { label: "Edition", value: "1 / 4" },
        { label: "Care", value: "Spot clean only, store stuffed with tissue" }
      ],
      photos: ["assets/images/lace-texture-study.jpg", "assets/products/beach bag.jpg"]
    }
  },
  {
    id: "widows-lace",
    title: "Widow's Lace Tote",
    price: "$340",
    desc: "Hand-crocheted in charcoal cotton with an open lace stitch, lined in deep plum silk.",
    images: ["assets/images/lace-texture-study.jpg"],
    collection: "Moonlit Hollow",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "Worked in an open, cobweb-fine lace stitch, this tote is built from a charcoal cotton yarn that catches the light the way real lace does — dense in some rows, gauzy in others.",
        "The plum silk lining is hand-sewn in afterward so the delicate lace shell keeps its shape without stretching under the weight of everyday carrying."
      ],
      facts: [
        { label: "Material", value: "Charcoal cotton yarn, silk lining" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/lace-texture-study.jpg", "assets/images/gallery-1.jpeg"]
    }
  },
  {
    id: "raven-feather",
    title: "Raven Feather Clutch",
    price: "$260",
    desc: "A folded clutch finished with hand-stitched feather fringe and a bone-toned clasp.",
    images: ["assets/images/lace-texture-study.jpg"],
    collection: "Moonlit Hollow",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "A single folded panel of dense single-crochet forms the body, left unlined so the fabric keeps a soft, worn-in drape from the very first wear.",
        "Each feather along the fringe is shaped and stitched on individually by hand, then the bone-toned clasp is set last so it sits flush against the fold."
      ],
      facts: [
        { label: "Material", value: "Charcoal cotton yarn, bone-toned clasp" },
        { label: "Care", value: "Spot clean only, store flat" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/gallery-2.jpeg", "assets/images/lace-texture-study.jpg"]
    }
  },
  {
    id: "hollow-bloom",
    title: "Hollow Bloom Bag",
    price: "$310",
    desc: "Crocheted around a single wilting rose motif — dusky petals against midnight thread.",
    images: ["assets/images/lace-texture-study.jpg"],
    collection: "Moonlit Hollow",
    category: "canta",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "The wilting rose appliqué is crocheted separately, petal by petal, in a dusty rose yarn that's deliberately over-dyed to look a little faded — a bloom past its best day.",
        "It's then stitched by hand onto the midnight-thread body, so the flower sits slightly raised off the surface rather than flat."
      ],
      facts: [
        { label: "Material", value: "Midnight cotton yarn, dusty rose appliqué" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/lace-texture-study.jpg", "assets/images/gallery-1.jpeg"]
    }
  },
  {
    id: "starfish-hat",
    title: "Starfish Bucket Hat",
    price: "$22",
    desc: "Kapelë plazhi e thurur me dorë, me yje deti të qepur petal më petal — shoqëruesja perfekte për ditët me erë deti.",
    images: ["assets/images/lace-texture-study.jpg"],
    collection: "Mermaid Tales",
    category: "aksesor",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "Each starfish is crocheted separately in sunshine yellow and sea-foam white, then stitched onto the periwinkle crown by hand.",
        "The brim holds its shape thanks to a double-stranded edge — no wire, just tight stitches."
      ],
      facts: [
        { label: "Material", value: "100% combed cotton yarn" },
        { label: "Care", value: "Hand wash cold, reshape and dry flat" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/lace-texture-study.jpg"]
    }
  },
  {
    id: "pearl-glow-charm",
    title: "Pearl Glow Charm",
    price: "$10",
    desc: "Varëse me shkëlqim perle që kap dritën si një flluskë magjike nën ujë.",
    images: ["assets/images/pearl-glow-orb.webp"],
    collection: "Mermaid Tales",
    category: "aksesor",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "A tiny crocheted sphere worked around a shimmer core, so it catches the light like a soap bubble about to lift off.",
        "Clips onto a bag strap, a keyring, or a zipper pull — a little piece of glow to carry along."
      ],
      facts: [
        { label: "Material", value: "Cotton yarn, shimmer thread" },
        { label: "Care", value: "Spot clean only" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/pearl-glow-orb.webp"]
    }
  },
  {
    id: "meadow-poncho",
    title: "Meadow Poncho",
    price: "$45",
    desc: "Poncho i thurur me rrjetë të hapur në ngjyrë kremi — i lehtë, i butë dhe i përsosur mbi rroba banje.",
    images: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"],
    collection: "Mermaid Tales",
    category: "veshje",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "An open lattice stitch keeps this poncho airy enough for July while the fringe hem gives it that beach-cover-up swing.",
        "Worked in one continuous piece from the neckline down, so there are no seams to rub."
      ],
      facts: [
        { label: "Material", value: "Cream cotton-blend yarn" },
        { label: "Care", value: "Hand wash cold, lay flat to dry" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"]
    }
  },
  {
    id: "sunbeam-dress",
    title: "Sunbeam Wrap Dress",
    price: "$38",
    desc: "Fustan i lehtë veror në ngjyrën e rërës së artë — për mbrëmje të ngrohta buzë detit.",
    images: ["https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=800&q=80"],
    collection: "Mermaid Tales",
    category: "veshje",
    story: {
      heading: "Crafted with care",
      paragraphs: [
        "Golden-sand tones dyed in small batches, so every dress carries its own warmth of colour.",
        "The wrap silhouette ties at the waist and falls softly — made to move with the sea breeze."
      ],
      facts: [
        { label: "Material", value: "Lightweight cotton blend" },
        { label: "Care", value: "Hand wash cold, hang to dry" },
        { label: "Made", value: "Finished by hand in Ada's atelier" }
      ],
      photos: ["https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=800&q=80"]
    }
  },
  {
    id: "beach-day-print",
    title: "Beach Day Art Print",
    price: "$14",
    desc: "Print artistik me temë plazhi për të sjellë verën në murin tënd, gjithë vitin.",
    images: ["assets/images/gallery-2.jpeg"],
    collection: "Mermaid Tales",
    category: "dekor",
    story: {
      heading: "A little sunshine for your wall",
      paragraphs: [
        "An illustrated beach morning — towel down, notebook open, good things coming.",
        "Printed on thick matte paper with a soft, gallery-style finish."
      ],
      facts: [
        { label: "Material", value: "Matte 250gsm art paper" },
        { label: "Size", value: "A4 / A3" },
        { label: "Made", value: "Illustrated for Enchanta" }
      ],
      photos: ["assets/images/gallery-2.jpeg"]
    }
  },
  {
    id: "cosmos-print",
    title: "Cosmos Meadow Print",
    price: "$12",
    desc: "Print me lule kozmosi në nuanca rozë pastel — një copëz livadhi magjik për shtëpinë.",
    images: ["assets/images/tomoko-uji-kxvn1ogpTtE-unsplash.jpg"],
    collection: "Mermaid Tales",
    category: "dekor",
    story: {
      heading: "A little meadow for your wall",
      paragraphs: [
        "Pale pink cosmos flowers against a soft summer sky — the same meadow mood the whole Enchanta world is stitched from.",
        "Printed on thick matte paper with a soft, gallery-style finish."
      ],
      facts: [
        { label: "Material", value: "Matte 250gsm art paper" },
        { label: "Size", value: "A4 / A3" },
        { label: "Made", value: "Curated for Enchanta" }
      ],
      photos: ["assets/images/tomoko-uji-kxvn1ogpTtE-unsplash.jpg"]
    }
  },
  {
    id: "queen-b-bow",
    title: "Queen B Bow",
    price: "$14",
    desc: "A hand-crocheted burgundy bow charm with a gold-tone clasp — polished, poised and always in charge of the bag it's on.",
    images: ["assets/images/lace-texture-study.jpg"],
    collection: "XOXO",
    category: "aksesor",
    story: {
      heading: "Spotted: a very important bow",
      paragraphs: [
        "Crocheted in deep burgundy cotton and stiffened just enough to hold its perfect shape, the Queen B Bow clips onto any handle with a gold-tone clasp.",
        "Inspired by a certain headband-wearing queen of the Upper East Side — it doesn't follow your bag's style, it sets it."
      ],
      facts: [
        { label: "Material", value: "Cotton yarn, gold-tone clasp" },
        { label: "Size", value: "Approx. 7cm bow" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/images/lace-texture-study.jpg"]
    }
  },
  {
    id: "xoxo-heart",
    title: "XOXO Heart",
    price: "$12",
    desc: "A blush crochet heart stitched with a tiny \"xoxo\" — clip it on your bag and let them talk.",
    images: ["assets/products/Coral shell bag .png"],
    collection: "XOXO",
    category: "aksesor",
    story: {
      heading: "Your one and only source",
      paragraphs: [
        "A soft blush heart worked in tight single crochet so it keeps its plump shape, with \"xoxo\" embroidered across the front in rose thread.",
        "Little scandals for your handles — small enough for keys, bold enough to get noticed."
      ],
      facts: [
        { label: "Material", value: "Cotton yarn, rose embroidery thread" },
        { label: "Size", value: "Approx. 6cm heart" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/products/Coral shell bag .png"]
    }
  },
  {
    id: "spotted-pearls",
    title: "Spotted: Pearls",
    price: "$15",
    desc: "A cascade of pearl beads knotted onto a gold chain — scandalously elegant on any bag.",
    images: ["assets/images/pearl-glow-orb.webp"],
    collection: "XOXO",
    category: "aksesor",
    story: {
      heading: "Scandalously elegant",
      paragraphs: [
        "Creamy pearl beads are hand-knotted one by one down a fine gold-tone chain, finished with a crocheted blush rosette at the clasp.",
        "Worn on a tote, a clutch or a keyring — either way, everyone will know you were there."
      ],
      facts: [
        { label: "Material", value: "Glass pearls, gold-tone chain, cotton rosette" },
        { label: "Size", value: "Approx. 10cm drop" },
        { label: "Made", value: "Hand-finished by Ada" }
      ],
      photos: ["assets/images/pearl-glow-orb.webp"]
    }
  },
  {
    id: "s-star-charm",
    title: "The \"S\" Star",
    price: "$13",
    desc: "A gold-threaded crochet star that catches every flashbulb — effortless, just like S.",
    images: ["assets/products/Sunkissed pink .jpg"],
    collection: "XOXO",
    category: "aksesor",
    story: {
      heading: "Effortless, always",
      paragraphs: [
        "Crocheted from cotton twisted with a fine gold lurex thread, so the star shimmers whenever it moves — no polishing required.",
        "The charm every other charm secretly wants to be."
      ],
      facts: [
        { label: "Material", value: "Cotton & gold lurex yarn, gold-tone clasp" },
        { label: "Size", value: "Approx. 6.5cm star" },
        { label: "Made", value: "Hand-crocheted in small batches by Ada" }
      ],
      photos: ["assets/products/Sunkissed pink .jpg"]
    }
  }
];
