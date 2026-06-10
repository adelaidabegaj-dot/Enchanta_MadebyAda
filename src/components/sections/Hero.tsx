export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-blossom-100 to-lavender-100 pt-28 pb-20"
    >
      {/* dreamy sky glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blossom-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-lavender-300/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl" />

      {/* flowing side gradients */}
      <div className="animate-gradient-flow pointer-events-none absolute top-0 -left-1/3 h-full w-2/3 bg-[length:200%_200%] bg-gradient-to-br from-blossom-300/50 via-lavender-300/40 to-sky-300/50 blur-3xl" />
      <div className="animate-gradient-flow [animation-delay:-8s] pointer-events-none absolute top-0 -right-1/3 h-full w-2/3 bg-[length:200%_200%] bg-gradient-to-bl from-sky-300/50 via-blossom-300/40 to-lavender-300/50 blur-3xl" />

      {/* drifting petals */}
      <span className="animate-drift pointer-events-none absolute top-1/3 left-[12%] text-2xl opacity-70">
        🌸
      </span>
      <span className="animate-drift pointer-events-none absolute top-1/4 right-[15%] text-xl opacity-60 [animation-delay:4s]">
        🌷
      </span>
      <span className="animate-drift pointer-events-none absolute bottom-1/4 left-[20%] text-lg opacity-50 [animation-delay:9s]">
        ✨
      </span>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="animate-hero-in [animation-delay:0.1s] font-script text-2xl text-plum-500 sm:text-3xl">
          welcome to a little meadow of magic
        </span>
        <h1 className="animate-hero-in [animation-delay:0.35s] mt-3 font-display text-5xl font-semibold tracking-wide text-plum-700 sm:text-6xl md:text-7xl">
          ENCHANTA
        </h1>
        <p className="animate-hero-in [animation-delay:0.55s] mt-2 font-display text-sm tracking-[0.4em] text-plum-500 uppercase">
          Made by Ada
        </p>

        {/* entrance wrapper so float can run freely after heroIn */}
        <div className="animate-hero-in [animation-delay:0.72s]">
          <div className="animate-float relative mt-12 flex flex-col items-center">
            <div className="absolute -top-3 left-1/2 h-12 w-px -translate-x-1/2 -rotate-12 bg-plum-500/50" />
            <div className="relative w-56 rounded-2xl border-[6px] border-plum-700 bg-plum-900 p-3 shadow-2xl shadow-plum-900/40 sm:w-64">
              <video
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-36 w-full rounded-lg object-cover sm:h-40"
              />
              <div className="absolute top-1/2 -right-2.5 flex -translate-y-1/2 flex-col gap-2">
                <span className="h-3 w-3 rounded-full bg-blossom-300" />
                <span className="h-3 w-3 rounded-full bg-lavender-300" />
              </div>
            </div>
            {/* little bunny */}
            <div className="-mt-1 text-3xl">🐇</div>
          </div>
        </div>

        <p className="animate-hero-in [animation-delay:1s] mt-10 max-w-xl text-base leading-relaxed text-plum-700/80 sm:text-lg">
          Enchanta weaves hand-crocheted bags, dresses &amp; accessories — each
          piece stitched slowly, dipped in pastel dreams, and made to feel like
          a little piece of folklore you can carry with you.
        </p>

        <a
          href="#about"
          className="btn-shine animate-hero-in [animation-delay:1.2s] mt-8 inline-flex items-center gap-2 rounded-full bg-plum-700 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-plum-700/30 transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:bg-plum-900 hover:shadow-xl hover:shadow-plum-700/40"
        >
          Step into the meadow
          <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}
