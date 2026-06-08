"use client";

import { useState } from "react";
import ArtPlaceholder from "@/components/ArtPlaceholder";
import { useInView } from "@/hooks/useInView";

const SLIDES = [
  { icon: "🐚", label: "Shell-stitch totes by the shore" },
  { icon: "🌊", label: "Woven for sun-soaked afternoons" },
  { icon: "🩷", label: "Hand-tied straps & sea-glass beads" },
  { icon: "🫧", label: "Light as sea foam, soft as sand" },
  { icon: "🌅", label: "Golden hour on the coastline" },
];

const PRODUCTS = [
  {
    name: "Azure Silk Tote",
    price: "$420.00",
    desc: "Një krijim artizanal prej mëndafshi të pastër, i krijuar për të reflektuar shkëlqimin e diellit mbi det.",
    icon: "👜",
    gradient: "bg-gradient-to-br from-sky-300 via-sky-100 to-white",
  },
  {
    name: "Sand Pearl Clutch",
    price: "$290.00",
    desc: "Detaje perlash të punuara me dorë në një bazë sateni, perfekte për mbrëmjet elegante të verës.",
    icon: "✨",
    gradient: "bg-gradient-to-br from-amber-200 via-orange-100 to-sky-100",
  },
  {
    name: "Coastline Mini",
    price: "$350.00",
    desc: "E vogël, fine dhe plot stil. Një aksesor që mban brenda magjinë e bregdetit.",
    icon: "🐚",
    gradient: "bg-gradient-to-br from-blossom-300 via-sky-200 to-sky-100",
  },
];

export default function Summer() {
  const [active, setActive] = useState(0);
  const [headingRef, headingInView] = useInView();
  const [productsRef, productsInView] = useInView();

  return (
    <section
      id="summer"
      className="relative overflow-hidden bg-gradient-to-b from-sky-700 via-sky-500 to-sky-300 pt-12 pb-24 text-white"
    >
      {/* wave top divider */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="block h-16 w-full sm:h-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1380,18 1440,36 L1440,0 L0,0 Z"
            fill="#9c5d7a"
          />
        </svg>
      </div>

      {/* iridescent bubbles */}
      <span className="animate-float pointer-events-none absolute top-16 left-10 h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm" />
      <span className="animate-float pointer-events-none absolute top-1/3 right-12 h-10 w-10 rounded-full bg-white/25 backdrop-blur-sm [animation-delay:2s]" />
      <span className="animate-float pointer-events-none absolute bottom-20 left-1/4 h-20 w-20 rounded-full bg-white/15 backdrop-blur-sm [animation-delay:3.5s]" />
      <span className="animate-float pointer-events-none absolute right-1/4 bottom-10 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm [animation-delay:1.2s]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* heading + carousel */}
        <div ref={headingRef} className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span
              className={`inline-block transition-[opacity,transform] duration-700 ease-out font-script text-3xl ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Mermaid Tales
            </span>
            <h2
              className={`mt-1 transition-[opacity,transform] duration-700 ease-out delay-100 font-display text-2xl font-semibold tracking-[0.2em] uppercase ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Koleksioni i ri
            </h2>
            <p
              className={`mt-5 max-w-md leading-relaxed text-white/85 transition-[opacity,transform] duration-700 ease-out delay-200 ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              A summer capsule inspired by tide pools and golden sand —
              hand-crocheted bags built for salty hair and bare feet.
            </p>
            <a
              href="#collections"
              className={`btn-shine mt-7 inline-flex items-center gap-2 rounded-full bg-sky-700 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-sky-900/30 transition-[opacity,transform,background-color,box-shadow] duration-500 ease-out delay-300 hover:-translate-y-1 hover:scale-[1.04] hover:bg-sky-900 hover:shadow-xl hover:shadow-sky-900/40 ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span aria-hidden>🛒</span> Buy Now
            </a>
          </div>

          {/* carousel — slides in from right */}
          <div
            className={`flex flex-col items-center transition-[opacity,transform] duration-1000 ease-out delay-200 ${headingInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-14"}`}
          >
            <ArtPlaceholder
              gradient={`bg-gradient-to-br from-sky-300 via-white/40 to-sky-100 ${
                active % 2 === 0 ? "" : "from-blossom-200 to-sky-200"
              }`}
              icon={SLIDES[active].icon}
              label={SLIDES[active].label}
              className="aspect-square w-full max-w-sm rounded-[2rem] border-4 border-white/40 shadow-2xl shadow-sky-900/30 transition-all duration-500"
            />
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.label}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* product grid */}
        <div ref={productsRef} className="mt-20 grid gap-6 sm:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.name}
              style={{ transitionDelay: `${i * 130}ms` }}
              className={`group/card flex flex-col rounded-[1.75rem] border border-white/25 bg-white/10 p-5 backdrop-blur-md transition-[opacity,transform,box-shadow,border-color,background-color] duration-500 ease-out hover:-translate-y-3 hover:border-white/45 hover:bg-white/18 hover:shadow-[0_20px_60px_rgba(14,165,233,0.25)] ${productsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <ArtPlaceholder
                gradient={product.gradient}
                icon={product.icon}
                className="aspect-square w-full rounded-2xl text-plum-700"
              />
              <h3 className="mt-5 font-display text-lg font-semibold">
                {product.name}
              </h3>
              <span className="mt-1 inline-block w-fit rounded-md bg-yellow-200/80 px-2 py-0.5 font-display text-sm font-semibold text-plum-700">
                {product.price}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-white/75 italic">
                {product.desc}
              </p>
              <button
                type="button"
                className="btn-shine mt-5 rounded-full bg-sky-700 py-2.5 text-sm font-semibold tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-sky-900 hover:shadow-lg hover:shadow-sky-900/40"
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 flex justify-center transition-[opacity,transform] duration-700 ease-out delay-500 ${productsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a
            href="#collections"
            className="btn-shine rounded-full bg-gradient-to-r from-blossom-500 to-blossom-300 px-8 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-plum-900/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl hover:shadow-blossom-500/30"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
