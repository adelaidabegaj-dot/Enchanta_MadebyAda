"use client";

import ArtPlaceholder from "@/components/ArtPlaceholder";
import { useInView } from "@/hooks/useInView";

const WORKS: {
  name: string;
  desc: string;
  icon: string;
  gradient: string;
}[] = [
  {
    name: "Character Art",
    desc: "Custom character portraits brought to life with expressive detail and style.",
    icon: "⚔️",
    gradient: "bg-gradient-to-br from-slate-700 via-plum-700 to-plum-900",
  },
  {
    name: "Book Cover Design",
    desc: "Custom illustrated book covers, sprayed edges, end papers & more that visually capture your book's story.",
    icon: "📚",
    gradient: "bg-gradient-to-br from-amber-700 via-orange-800 to-plum-900",
  },
  {
    name: "Illustration",
    desc: "Expressive illustrated works with detailed backgrounds & more.",
    icon: "🌙",
    gradient: "bg-gradient-to-br from-sky-700 via-moon-800 to-moon-950",
  },
];

export default function DigitalArt() {
  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView();

  return (
    <section
      id="digital-art"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-lavender-100 to-blossom-50 py-24"
    >
      {/* soft ambient glows */}
      <div className="pointer-events-none absolute top-10 left-0 h-72 w-72 rounded-full bg-lavender-300/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blossom-300/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── header ── */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-[opacity,transform] duration-700 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="font-script text-2xl text-plum-500">digital art by Ada</span>
          <h2 className="mt-2 font-display text-4xl font-bold text-plum-700 sm:text-5xl">
            Your{" "}
            <span className="relative inline-block">
              <span className="pointer-events-none absolute -inset-2 -rotate-3 rounded-full border-2 border-plum-500/50" />
              story
            </span>{" "}
            brought to{" "}
            <span className="underline decoration-blossom-500 decoration-wavy underline-offset-4">
              life
            </span>
          </h2>
        </div>

        {/* ── work grid ── */}
        <div ref={gridRef} className="grid gap-8 sm:grid-cols-3">
          {WORKS.map((item, i) => (
            <div
              key={item.name}
              style={{ transitionDelay: `${i * 130}ms` }}
              className={`group/card flex flex-col transition-[opacity,transform] duration-700 ease-out ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-plum-700/15">
                <ArtPlaceholder
                  gradient={item.gradient}
                  icon={item.icon}
                  className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover/card:scale-105"
                />
                {/* title pill overlay */}
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-blossom-100/90 px-6 py-2.5 font-display text-sm font-semibold tracking-wide text-plum-700 shadow-md backdrop-blur-sm">
                  {item.name}
                </span>
              </div>
              <p className="mt-4 text-center text-sm leading-relaxed text-plum-700/70 italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── bottom CTA ── */}
        <div
          className={`mt-16 flex justify-center transition-[opacity,transform] duration-700 ease-out delay-300 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a
            href="#preorder"
            className="btn-shine rounded-full bg-plum-700 px-10 py-3.5 font-display text-sm font-semibold tracking-[0.15em] text-white uppercase shadow-lg shadow-plum-900/30 transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:bg-plum-900 hover:shadow-xl hover:shadow-plum-900/40"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
