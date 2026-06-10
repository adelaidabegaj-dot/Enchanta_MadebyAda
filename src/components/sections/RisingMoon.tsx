"use client";

import ArtPlaceholder from "@/components/ArtPlaceholder";
import { useInView } from "@/hooks/useInView";

const LIMITED: {
  name: string;
  price: string;
  edition: string;
  desc: string;
  icon: string;
  gradient: string;
}[] = [
  {
    name: "Moonrise Tote",
    price: "$580",
    edition: "3 / 7",
    desc: "Hand-crocheted in midnight cotton with silver-threaded handles and a mother-of-pearl clasp.",
    icon: "🌑",
    gradient: "bg-gradient-to-br from-slate-600 via-[#1a2d5a] to-[#06101f]",
  },
  {
    name: "Crescent Clutch",
    price: "$420",
    edition: "2 / 5",
    desc: "Shaped like a waning crescent — silk-lined interior, hand-sewn pearl-button closure.",
    icon: "🌙",
    gradient: "bg-gradient-to-br from-indigo-700 via-[#0d1b42] to-[#06101f]",
  },
  {
    name: "Mako Pearl Bag",
    price: "$650",
    edition: "1 / 4",
    desc: "Woven in deep-sea cotton yarn, finished with hand-knotted freshwater pearls.",
    icon: "🦪",
    gradient: "bg-gradient-to-br from-[#1a4a7a] via-[#0d1b42] to-[#06101f]",
  },
];

const STARS = [
  { top: "10%", left: "7%",  size: "h-0.5 w-0.5", opacity: "opacity-60" },
  { top: "18%", left: "22%", size: "h-1 w-1",     opacity: "opacity-40" },
  { top: "8%",  left: "55%", size: "h-0.5 w-0.5", opacity: "opacity-50" },
  { top: "25%", left: "80%", size: "h-1 w-1",     opacity: "opacity-35" },
  { top: "45%", left: "4%",  size: "h-0.5 w-0.5", opacity: "opacity-45" },
  { top: "52%", left: "92%", size: "h-1 w-1",     opacity: "opacity-30" },
  { top: "70%", left: "15%", size: "h-0.5 w-0.5", opacity: "opacity-55" },
  { top: "75%", left: "88%", size: "h-0.5 w-0.5", opacity: "opacity-40" },
  { top: "88%", left: "35%", size: "h-1 w-1",     opacity: "opacity-35" },
  { top: "92%", left: "62%", size: "h-0.5 w-0.5", opacity: "opacity-50" },
];

export default function RisingMoon() {
  const [headerRef, headerInView] = useInView(0.1);
  const [limitedRef, limitedInView] = useInView();

  return (
    <section
      id="moon"
      className="relative overflow-hidden bg-gradient-to-b from-moon-950 via-moon-900 to-moon-950 py-32 text-white"
    >
      {/* wave from CustomMade sky-100 */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block h-16 w-full sm:h-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1380,18 1440,36 L1440,0 L0,0 Z" fill="#dcedfb" />
        </svg>
      </div>

      {/* scattered stars */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute rounded-full bg-white ${s.size} ${s.opacity}`}
          style={{ top: s.top, left: s.left }}
        />
      ))}

      {/* drifting sparkles */}
      <span className="animate-float pointer-events-none absolute top-[14%] left-[9%]  text-lg text-white/30 [animation-delay:1s]">✦</span>
      <span className="animate-float pointer-events-none absolute top-[62%] right-[7%] text-sm text-white/20 [animation-delay:4s]">✧</span>
      <span className="animate-float pointer-events-none absolute top-[38%] left-[3%] text-xs text-white/25 [animation-delay:7s]">✦</span>

      {/* deep blue ambient glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/6 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-10 h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 h-56 w-56 rounded-full bg-blue-400/6 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* ── moon header ── */}
        <div ref={headerRef} className="mb-20 flex flex-col items-center text-center">

          {/* full moon SVG */}
          <div className={`relative mb-10 flex items-center justify-center transition-[opacity,transform] duration-1000 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
            {/* outer pulse rings */}
            <span className="animate-moon-pulse pointer-events-none absolute h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />
            <span className="animate-moon-pulse pointer-events-none absolute h-44 w-44 rounded-full bg-blue-200/15 blur-2xl [animation-delay:1.5s]" />
            <span className="animate-moon-pulse pointer-events-none absolute h-32 w-32 rounded-full bg-white/20 blur-xl [animation-delay:0.8s]" />
            {/* full moon SVG */}
            <svg
              width="128"
              height="128"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative drop-shadow-[0_0_40px_rgba(147,197,253,0.8)]"
            >
              <defs>
                <radialGradient id="mg" cx="38%" cy="32%" r="68%" gradientUnits="objectBoundingBox">
                  <stop offset="0%"   stopColor="#ffffff" />
                  <stop offset="45%"  stopColor="#dbe7ff" />
                  <stop offset="100%" stopColor="#9ab4e8" />
                </radialGradient>
                <radialGradient id="mshine" cx="38%" cy="32%" r="30%" gradientUnits="objectBoundingBox">
                  <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* full circle */}
              <circle cx="48" cy="48" r="44" fill="url(#mg)" />
              {/* shine highlight */}
              <circle cx="48" cy="48" r="44" fill="url(#mshine)" className="animate-moon-pulse" />
            </svg>
          </div>

          <span
            className={`font-script text-xl text-blue-200/60 transition-[opacity,transform] duration-700 ease-out delay-200 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            limited · bespoke · celestial
          </span>
          <h2
            className={`mt-2 font-display text-5xl font-bold tracking-wide text-white transition-[opacity,transform] duration-700 ease-out delay-300 sm:text-6xl ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Rising Moon
          </h2>
          <span
            className={`mt-1 font-display text-lg tracking-[0.45em] text-blue-300/70 uppercase transition-[opacity,transform] duration-700 ease-out delay-400 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            in Mako
          </span>
          <p
            className={`mt-5 max-w-lg leading-relaxed text-white/50 transition-[opacity,transform] duration-700 ease-out delay-500 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            A curated drop of one-of-a-kind hand-crocheted pieces, crafted in the smallest of
            numbers. Each carries a lunar story — only a few will ever exist.
          </p>
        </div>

        {/* ── limited edition crochet cards ── */}
        <div ref={limitedRef} className="grid gap-6 sm:grid-cols-3">
          {LIMITED.map((item, i) => (
            <div
              key={item.name}
              style={{ transitionDelay: `${i * 130}ms` }}
              className={`group/card relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-[opacity,transform,box-shadow,border-color,background-color] duration-500 ease-out hover:-translate-y-3 hover:border-blue-300/30 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(59,130,246,0.22)] ${limitedInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* edition badge */}
              <span className="absolute top-4 right-4 z-10 rounded-full border border-blue-300/25 bg-blue-400/15 px-3 py-1 font-display text-xs font-semibold tracking-wide text-blue-200 backdrop-blur-sm">
                {item.edition}
              </span>

              <ArtPlaceholder
                gradient={item.gradient}
                icon={item.icon}
                className="aspect-square w-full rounded-2xl"
              />

              <h3 className="mt-5 font-display text-lg font-semibold">{item.name}</h3>
              <span className="mt-1 inline-block w-fit rounded-md bg-blue-300/15 px-2.5 py-0.5 font-display text-sm font-semibold text-blue-100">
                {item.price}
              </span>
              <p className="mt-3 grow text-sm leading-relaxed text-white/55 italic">{item.desc}</p>

              <button
                type="button"
                className="btn-shine mt-5 rounded-full bg-moon-800 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-400 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-moon-700 hover:shadow-lg hover:shadow-blue-900/60"
              >
                Reserve Yours
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* wave to Artistry plum-900 */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block h-16 w-full sm:h-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,36 C180,0 360,72 540,36 C720,0 900,72 1080,36 C1260,0 1380,54 1440,36 L1440,72 L0,72 Z" fill="#5a3049" />
        </svg>
      </div>
    </section>
  );
}
