"use client";

import { useState } from "react";
import ArtPlaceholder from "@/components/ArtPlaceholder";
import { useInView } from "@/hooks/useInView";

type Category = "All Relics" | "Bags" | "Outfits";

const FILTERS: Category[] = ["All Relics", "Bags", "Outfits"];

const RELICS: { name: string; price: string; desc: string; icon: string; category: Category }[] = [
  {
    name: "Forest Moon Bag",
    price: "$180",
    desc: "A lunar-inspired velvet bag.",
    icon: "🌙",
    category: "Bags",
  },
  {
    name: "Willow Wrap Dress",
    price: "$240",
    desc: "Flowing silk dress.",
    icon: "🌿",
    category: "Outfits",
  },
  {
    name: "Pixie Dust Mini",
    price: "$95",
    desc: "Tiny pouch filling.",
    icon: "✨",
    category: "Bags",
  },
  {
    name: "Starlit Cardigan",
    price: "$210",
    desc: "Cloud-soft knit for cool evenings.",
    icon: "⭐",
    category: "Outfits",
  },
  {
    name: "Dewdrop Crossbody",
    price: "$150",
    desc: "Petite, dainty, dipped in pearls.",
    icon: "💧",
    category: "Bags",
  },
  {
    name: "Meadow Slip Dress",
    price: "$260",
    desc: "Hand-finished hem & lace trim.",
    icon: "🌼",
    category: "Outfits",
  },
];

export default function Collections() {
  const [filter, setFilter] = useState<Category>("All Relics");
  const [showAll, setShowAll] = useState(false);
  const [bannerRef, bannerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  const filtered =
    filter === "All Relics" ? RELICS : RELICS.filter((r) => r.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="collections" className="relative">
      {/* Magical Glow banner */}
      <div className="relative flex min-h-[26rem] items-center overflow-hidden bg-gradient-to-br from-sky-100 via-blossom-100 to-blossom-300 px-6 py-20 sm:min-h-[30rem]">
        <div className="pointer-events-none absolute top-10 left-0 text-6xl opacity-50 sm:text-8xl">
          🌸
        </div>
        <div className="pointer-events-none absolute right-6 bottom-6 text-6xl opacity-40 sm:text-8xl">
          🌸
        </div>

        <div
          ref={bannerRef}
          className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span
            className={`transition-[opacity,transform] duration-700 ease-out font-script text-2xl text-plum-500 ${bannerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            a softer kind of shine
          </span>
          <h2
            className={`mt-2 transition-[opacity,transform] duration-700 ease-out delay-150 font-display text-4xl font-bold tracking-wide text-plum-700 sm:text-5xl ${bannerInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            MAGICAL GLOW
          </h2>
          <a
            href="#preorder"
            className={`btn-shine mt-7 inline-flex items-center justify-center rounded-full bg-plum-700 px-10 py-3.5 text-sm font-semibold tracking-[0.15em] text-white uppercase shadow-lg shadow-plum-900/30 transition-[opacity,transform,background-color,box-shadow] duration-500 ease-out delay-300 hover:-translate-y-1 hover:scale-[1.04] hover:bg-plum-900 hover:shadow-xl hover:shadow-plum-900/40 ${bannerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Order yours now
          </a>
        </div>
      </div>

      {/* Enchanted Collections grid */}
      <div className="relative overflow-hidden bg-gradient-to-b from-plum-500 via-plum-700 to-plum-900 px-6 py-24 text-white">
        <div className="pointer-events-none absolute top-1/4 right-10 h-64 w-64 rounded-full bg-blossom-300/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-lavender-300/15 blur-3xl" />

        <div ref={gridRef} className="relative mx-auto max-w-6xl text-center">
          <h2
            className={`transition-[opacity,transform] duration-700 ease-out bg-gradient-to-r from-white via-blossom-100 to-sky-100 bg-clip-text font-display text-4xl font-bold text-transparent sm:text-5xl ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Enchanted Collections
          </h2>

          <div
            className={`mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-sm transition-[opacity,transform] duration-700 ease-out delay-150 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setFilter(label);
                  setShowAll(false);
                }}
                className={`rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition duration-200 hover:scale-[1.06] ${
                  filter === label
                    ? "bg-white text-plum-700 shadow-md shadow-plum-900/20"
                    : "text-white/70 hover:bg-white/15 hover:text-white hover:shadow-sm"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6">
            {visible.map((relic, i) => (
              <div
                key={relic.name}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
                className={`group/card flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-md transition-[opacity,transform,box-shadow,border-color,background-color] duration-500 ease-out hover:border-white/25 hover:bg-white/10 hover:shadow-[0_20px_56px_rgba(90,48,73,0.4)] sm:flex-row sm:items-center ${i % 2 === 1 ? "sm:flex-row-reverse" : ""} ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <ArtPlaceholder
                  gradient="bg-gradient-to-br from-plum-300/70 to-plum-700/70"
                  icon={relic.icon}
                  className="aspect-square w-full rounded-2xl sm:w-1/2"
                />
                <div className="flex flex-col sm:w-1/2">
                  <h3 className="font-display text-lg font-semibold">{relic.name}</h3>
                  <span className="mt-1 font-display text-base font-bold text-blossom-100">
                    {relic.price}
                  </span>
                  <p className="mt-2 text-sm text-white/65 italic">{relic.desc}</p>
                  <button
                    type="button"
                    className="btn-shine mt-5 w-fit rounded-full bg-plum-900/70 px-8 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-400 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-plum-900 hover:shadow-lg hover:shadow-plum-900/50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length > 3 && (
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="btn-shine rounded-full bg-gradient-to-r from-blossom-500 to-blossom-300 px-8 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-plum-900/30 transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl hover:shadow-blossom-500/30"
              >
                {showAll ? "Show less" : "See more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
