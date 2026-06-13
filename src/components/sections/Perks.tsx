"use client";

import { useInView } from "@/hooks/useInView";

const PERKS = [
  {
    icon: "💬",
    title: "24/7 Chat Support",
    text: "We're here whenever you need us",
  },
  {
    icon: "🧶",
    title: "Hand Crafted",
    text: "Every piece made with care",
  },
  {
    icon: "💌",
    title: "Packed With Love",
    text: "Wrapped like a little gift",
  },
  {
    icon: "🚚",
    title: "Free Shipping",
    text: "On all orders over $100",
  },
];

export default function Perks() {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden bg-blossom-100 py-14">
      <div
        ref={ref}
        className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 sm:grid-cols-4"
      >
        {PERKS.map((perk, i) => (
          <div
            key={perk.title}
            style={{ transitionDelay: `${i * 110}ms` }}
            className={`flex flex-col items-center text-center transition-[opacity,transform] duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <span className="text-3xl">{perk.icon}</span>
            <h3 className="mt-3 font-display text-sm font-semibold text-pink-500 sm:text-base">
              {perk.title}
            </h3>
            <p className="mt-1 text-xs text-pink-500/70 sm:text-sm">{perk.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
