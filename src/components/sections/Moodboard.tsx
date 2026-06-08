"use client";

import ArtPlaceholder from "@/components/ArtPlaceholder";
import { useInView } from "@/hooks/useInView";

export default function Moodboard() {
  const [ref, inView] = useInView();

  return (
    <section
      id="moodboard"
      className="relative overflow-hidden bg-gradient-to-br from-blossom-50 via-lavender-100 to-blossom-100 py-24"
    >
      <div className="pointer-events-none absolute top-10 left-10 h-56 w-56 rounded-full bg-blossom-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-64 w-64 rounded-full bg-lavender-300/30 blur-3xl" />

      <div
        ref={ref}
        className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center"
      >
        {/* left — slides in from left */}
        <div
          className={`transition-[opacity,transform] duration-800 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <h2 className="font-display text-4xl leading-tight font-bold sm:text-5xl">
            <span
              className={`block transition-[opacity,transform] duration-700 ease-out text-plum-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Photo Gallery
            </span>
            <span
              className={`block transition-[opacity,transform] duration-700 ease-out delay-150 bg-gradient-to-r from-lavender-500 to-blossom-500 bg-clip-text text-transparent ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              To inspire you
            </span>
          </h2>
          <p
            className={`mt-5 max-w-md text-plum-700/70 italic transition-[opacity,transform] duration-700 ease-out delay-250 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Zgjidh atë që të pëlqen dhe ne do ta krijojmë të personalizuar për ty.
          </p>
          <a
            href="#custom"
            aria-label="Browse the moodboard"
            className={`mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavender-500/20 text-2xl text-lavender-500 transition-[opacity,transform,background-color,box-shadow] duration-500 ease-out delay-300 hover:translate-x-2 hover:scale-110 hover:bg-lavender-500/35 hover:shadow-[0_0_20px_rgba(171,132,208,0.4)] ${inView ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            →
          </a>
        </div>

        {/* right — scales in with slight rotation */}
        <div
          className={`relative transition-[opacity,transform] duration-1000 ease-out delay-200 ${inView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"}`}
        >
          <ArtPlaceholder
            gradient="bg-gradient-to-br from-lavender-300 via-blossom-200 to-white"
            icon="🤍"
            label="texture & lace study"
            className="aspect-[4/5] w-full max-w-md rounded-[2rem] border-4 border-white shadow-2xl shadow-plum-700/20 sm:ml-auto"
          />
          <button
            type="button"
            className={`btn-shine absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-plum-700 shadow-lg backdrop-blur-sm transition-[opacity,transform,background-color,box-shadow] duration-500 ease-out delay-500 hover:-translate-y-1 hover:scale-[1.05] hover:bg-white hover:shadow-xl hover:shadow-plum-700/20 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span aria-hidden>✨</span> Open Moodboard
          </button>
        </div>
      </div>
    </section>
  );
}
