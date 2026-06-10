"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#summer", label: "Summer" },
  { href: "#collections", label: "Collections" },
  { href: "#moodboard", label: "Moodboard" },
  { href: "#preorder", label: "Pre-order" },
  { href: "#editorial", label: "Editorial" },
  { href: "#custom", label: "Custom Made" },
  { href: "#moon", label: "Rising Moon" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`relative flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/40 bg-gradient-to-r from-blossom-300/90 via-blossom-500/85 to-lavender-500/85 py-2 pr-3 pl-5 shadow-lg shadow-plum-700/20 backdrop-blur-md transition-all sm:pr-4 sm:pl-6 ${
          scrolled ? "scale-[0.98] shadow-xl" : ""
        }`}
      >
        <a
          href="#top"
          className="shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/images/logo-enchanta.png"
            alt="Enchanta"
            width={677}
            height={606}
            priority
            className="h-12 w-auto object-contain drop-shadow-sm sm:h-14 md:h-16"
          />
        </a>

        <ul className="hidden items-center gap-5 text-sm font-semibold tracking-wide text-white/90 lg:flex xl:gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link pb-0.5 whitespace-nowrap transition-[color,opacity] duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#preorder"
          className="btn-shine hidden shrink-0 items-center gap-1.5 rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold tracking-wide text-plum-700 shadow-md transition-all duration-400 ease-out hover:-translate-y-0.5 hover:scale-[1.04] hover:bg-white hover:shadow-lg hover:shadow-plum-900/20 lg:inline-flex"
        >
          <span aria-hidden>✦</span> Shop now
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-white/20 text-white lg:hidden"
        >
          <span
            className={`h-0.5 w-4 rounded-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-4 rounded-full bg-white transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-4 rounded-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="absolute top-full mt-3 w-[calc(100%-2rem)] max-w-4xl rounded-3xl border border-white/40 bg-plum-700/95 p-4 shadow-xl backdrop-blur-md lg:hidden">
          <ul className="flex flex-col divide-y divide-white/10 text-center text-base font-semibold text-white">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 transition hover:text-blossom-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
