"use client";

import ArtPlaceholder from "@/components/ArtPlaceholder";
import { useInView } from "@/hooks/useInView";

const VALUES = [
  {
    icon: "🧶",
    title: "Hand-crocheted",
    text: "Every stitch made by hand, slowly, with cotton & silk-blend yarns.",
  },
  {
    icon: "🌙",
    title: "Small batches",
    text: "Limited drops so each piece keeps its one-of-a-kind charm.",
  },
  {
    icon: "💌",
    title: "Made to order",
    text: "Custom colours & sizing — Ada crafts each piece just for you.",
  },
];

export default function About() {
  const [ref, inView] = useInView();

  const up = (delay = 0) =>
    `transition-[opacity,transform] duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-plum-700 to-plum-500 py-24 text-white"
    >
      <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-blossom-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-lavender-300/20 blur-3xl" />

      <div
        ref={ref}
        className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center"
      >
        {/* left column */}
        <div>
          <span
            className={`inline-block transition-[opacity,transform] duration-700 ease-out font-script text-2xl text-blossom-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            the story behind the stitches
          </span>
          <h2
            className={`mt-2 transition-[opacity,transform] duration-700 ease-out delay-100 font-display text-4xl font-semibold sm:text-5xl ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            About Enchanta
          </h2>
          <p
            className={`mt-6 max-w-lg leading-relaxed text-white/85 transition-[opacity,transform] duration-700 ease-out delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Enchanta began as Ada&rsquo;s quiet hobby — a hook, a ball of yarn,
            and a love for fairy-tale colour palettes. It grew into a tiny
            atelier devoted to crochet pieces that feel like wearable
            daydreams: soft, textured, and just a little whimsical.
          </p>
          <p
            className={`mt-4 max-w-lg leading-relaxed text-white/70 transition-[opacity,transform] duration-700 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            From sun-soaked summer totes to moonlit evening bags, every
            Enchanta piece is designed to carry a bit of wonder into your
            everyday.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                style={{ transitionDelay: `${280 + i * 110}ms` }}
                className={`transition-[opacity,transform,box-shadow,border-color,background-color] duration-700 ease-out ${inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"} rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm hover:-translate-y-2 hover:scale-[1.03] hover:border-white/30 hover:bg-white/10 hover:shadow-[0_12px_32px_rgba(90,48,73,0.35)]`}
              >
                <span className="text-2xl">{value.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* right column — image slides from right */}
        <div
          className={`transition-[opacity,transform] duration-1000 ease-out delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <ArtPlaceholder
            gradient="bg-gradient-to-br from-blossom-300 via-lavender-300 to-plum-300"
            icon="🪡"
            label="Ada at her hook"
            className="aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white/20 shadow-2xl shadow-plum-900/40"
          />
        </div>
      </div>
    </section>
  );
}
