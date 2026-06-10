type ArtPlaceholderProps = {
  gradient: string;
  icon?: string;
  label?: string;
  className?: string;
};

export default function ArtPlaceholder({
  gradient,
  icon,
  label,
  className = "",
}: ArtPlaceholderProps) {
  return (
    <div
      className={`group/art relative flex flex-col items-center justify-center gap-3 overflow-hidden ${gradient} ${className}`}
    >
      {/* radial shine — dims on hover so icon pops */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_55%)] transition-opacity duration-500 group-hover/art:opacity-40" />

      {/* inner shimmer sweep on hover */}
      <div className="pointer-events-none absolute inset-0 translate-x-[-110%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] transition-transform duration-700 ease-in-out group-hover/art:translate-x-[210%]" />

      {icon && (
        <span className="relative text-4xl drop-shadow-sm transition-transform duration-700 ease-[cubic-bezier(.25,.8,.25,1)] sm:text-5xl group-hover/art:-translate-y-2 group-hover/art:scale-110">
          {icon}
        </span>
      )}
      {label && (
        <span className="relative font-display text-xs tracking-[0.2em] uppercase transition-[opacity,letter-spacing] duration-400 text-white/80 group-hover/art:tracking-[0.28em] group-hover/art:text-white">
          {label}
        </span>
      )}
    </div>
  );
}
