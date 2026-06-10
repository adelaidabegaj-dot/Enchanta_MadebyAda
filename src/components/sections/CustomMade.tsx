"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const STEPS = [
  { icon: "🎨", title: "Pick your palette", text: "Tell Ada the colours and yarns that feel like you." },
  { icon: "📐", title: "Share your fit", text: "Send measurements or a reference piece for sizing." },
  { icon: "🧵", title: "Watch it woven", text: "Ada hand-stitches your piece and shares progress along the way." },
];

export default function CustomMade() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !details) return;
    setSent(true);
  };

  return (
    <section
      id="custom"
      className="relative overflow-hidden bg-gradient-to-br from-lavender-100 via-blossom-100 to-sky-100 py-24"
    >
      <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-lavender-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-blossom-300/30 blur-3xl" />

      <div
        ref={ref}
        className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-start"
      >
        {/* left — text + steps stagger from left */}
        <div>
          <span
            className={`inline-block transition-[opacity,transform] duration-700 ease-out font-script text-2xl text-plum-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            woven just for you
          </span>
          <h2
            className={`mt-1 transition-[opacity,transform] duration-700 ease-out delay-100 font-display text-4xl font-bold text-plum-700 sm:text-5xl ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            Custom Made
          </h2>
          <p
            className={`mt-5 max-w-md leading-relaxed text-plum-700/75 transition-[opacity,transform] duration-700 ease-out delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Dreaming of a one-of-a-kind piece? Ada designs bespoke crochet bags,
            dresses &amp; accessories tailored to your colours, your shape, your story.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                style={{ transitionDelay: `${220 + i * 120}ms` }}
                className={`flex gap-4 rounded-2xl border border-plum-300/20 bg-white/60 p-4 backdrop-blur-sm transition-[opacity,transform,box-shadow,background-color,border-color] duration-500 ease-out hover:translate-x-1.5 hover:border-plum-300/40 hover:bg-white/80 hover:shadow-[0_6px_24px_rgba(122,67,97,0.12)] ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum-700 font-display text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-plum-700">
                    <span className="mr-1.5">{step.icon}</span>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-plum-700/65">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right — form slides in from right */}
        <form
          onSubmit={handleSubmit}
          className={`rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-xl shadow-plum-700/10 backdrop-blur-md transition-[opacity,transform] duration-1000 ease-out delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <h3 className="font-display text-xl font-semibold text-plum-700">
            Start your custom order
          </h3>
          <p className="mt-1 text-sm text-plum-700/60">
            Share a few details and Ada will reach out to bring your idea to life.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-plum-700">
              Your name
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elira"
                className="rounded-2xl border border-plum-300/30 bg-white px-4 py-3 text-sm font-normal text-plum-700 placeholder:text-plum-700/35 focus:ring-2 focus:ring-lavender-300 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-plum-700">
              Tell us your vision
              <textarea
                required
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Colours, style, occasion, size..."
                className="resize-none rounded-2xl border border-plum-300/30 bg-white px-4 py-3 text-sm font-normal text-plum-700 placeholder:text-plum-700/35 focus:ring-2 focus:ring-lavender-300 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="btn-shine mt-1 rounded-full bg-plum-700 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-plum-700/30 transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-plum-900 hover:shadow-xl hover:shadow-plum-700/40"
            >
              Send my idea to Ada
            </button>
            {sent && (
              <p className="text-center text-sm text-plum-700/70">
                Lovely — Ada will be in touch soon. ✨
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
