"use client";

import ArtPlaceholder from "@/components/ArtPlaceholder";
import { useInView } from "@/hooks/useInView";

const ARTISTRY: {
  name: string;
  desc: string;
  icon: string;
  tag: string;
  gradient: string;
}[] = [
  {
    name: "Book Cover Design",
    desc: "Editorial covers for indie publishers — typography-led, mood-first, print-ready.",
    icon: "📖",
    tag: "Print",
    gradient: "bg-gradient-to-br from-amber-800 via-orange-900 to-plum-900",
  },
  {
    name: "Digital Illustration",
    desc: "Character art and dreamscapes for brands, books, and personal collections.",
    icon: "🎨",
    tag: "Digital",
    gradient: "bg-gradient-to-br from-violet-800 via-purple-900 to-plum-900",
  },
  {
    name: "Brand Identity",
    desc: "Visual identity systems — logo, colour palette, typography, and art direction.",
    icon: "✦",
    tag: "Branding",
    gradient: "bg-gradient-to-br from-rose-800 via-pink-900 to-plum-900",
  },
];

export default function Artistry() {
  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView();

  return (
    <section
      id="artistry"
      className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-[#7a3060] to-blossom-700 py-32 text-white"
    >
      {/* wave from RisingMoon moon-950 */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block h-16 w-full sm:h-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1380,18 1440,36 L1440,0 L0,0 Z" fill="#06101f" />
        </svg>
      </div>

      {/* artsy paint-splash glows */}
      <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-blossom-500/30 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-lavender-500/30 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-blossom-300/20 blur-3xl" />

      {/* drifting artsy sparkles */}
      <span className="animate-float pointer-events-none absolute top-[16%] left-[10%] text-2xl opacity-50">🎨</span>
      <span className="animate-float pointer-events-none absolute top-[12%] right-[12%] text-xl opacity-60 [animation-delay:3s]">✨</span>
      <span className="animate-float pointer-events-none absolute bottom-[18%] left-[8%] text-lg opacity-50 [animation-delay:6s]">🖌️</span>
      <span className="animate-float pointer-events-none absolute right-[8%] bottom-[14%] text-2xl opacity-40 [animation-delay:9s]">💫</span>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── header ── */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-[opacity,transform] duration-700 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="font-script text-2xl text-blossom-100">designed by Ada</span>
          <h2 className="mt-1 font-display text-4xl font-bold text-white sm:text-5xl">
            Artistry
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Beyond crochet — book cover design, digital illustration, and visual identity work
            created with the same care as every handmade piece.
          </p>
        </div>

        {/* ── work grid ── */}
        <div ref={gridRef} className="grid gap-6 sm:grid-cols-3">
          {ARTISTRY.map((item, i) => (
            <div
              key={item.name}
              style={{ transitionDelay: `${i * 130}ms` }}
              className={`group/card flex flex-col rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-[opacity,transform,box-shadow,border-color,background-color] duration-500 ease-out hover:-translate-y-3 hover:border-white/30 hover:bg-white/[0.16] hover:shadow-[0_20px_60px_rgba(230,115,173,0.3)] ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <ArtPlaceholder
                gradient={item.gradient}
                icon={item.icon}
                className="aspect-[4/3] w-full rounded-2xl"
              />

              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-display text-base font-semibold leading-snug">{item.name}</h3>
                <span className="shrink-0 rounded-full border border-white/25 px-2.5 py-0.5 font-display text-xs tracking-wide text-white/70">
                  {item.tag}
                </span>
              </div>
              <p className="mt-2 grow text-sm leading-relaxed text-white/75 italic">{item.desc}</p>

              <button
                type="button"
                className="btn-shine mt-5 rounded-full border border-white/25 bg-white/10 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-400 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-white/40 hover:bg-white/20 hover:shadow-lg hover:shadow-blossom-500/30"
              >
                View Work
              </button>
            </div>
          ))}
        </div>

        {/* ── bottom CTA ── */}
        <div
          className={`mt-16 flex justify-center transition-[opacity,transform] duration-700 ease-out delay-300 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a
            href="#preorder"
            className="btn-shine rounded-full bg-gradient-to-r from-blossom-500 to-lavender-500 px-10 py-3.5 font-display text-sm font-semibold tracking-wide text-white shadow-xl shadow-plum-900/40 transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(230,115,173,0.45)]"
          >
            Commission a Piece
          </a>
        </div>
      </div>

      {/* wave to Footer lavender-100 */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block h-16 w-full sm:h-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,36 C180,0 360,72 540,36 C720,0 900,72 1080,36 C1260,0 1380,54 1440,36 L1440,72 L0,72 Z" fill="#ece1f7" />
        </svg>
      </div>
    </section>
  );
}
