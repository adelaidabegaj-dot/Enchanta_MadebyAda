type Bubble = {
  size: number;
  side: "left" | "right";
  offset: number;
  duration: number;
  delay: number;
  drift: number;
};

function bubbleAt(i: number): Bubble {
  return {
    size: 20 + ((i * 17) % 50),
    side: i % 2 === 0 ? "left" : "right",
    offset: (i * 5.5) % 15,
    duration: 6 + ((i * 3.1) % 6),
    delay: (i * 1.7) % 8,
    drift: ((i * 13) % 60) - 30,
  };
}

type BubblesProps = {
  count?: number;
  className?: string;
};

export default function Bubbles({ count = 16, className = "" }: BubblesProps) {
  const bubbles = Array.from({ length: count }, (_, i) => bubbleAt(i));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="animate-bubble-flow absolute rounded-full border border-white/25 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),rgba(255,255,255,0.05))] shadow-[inset_-3px_-3px_8px_rgba(255,255,255,0.15),0_0_8px_rgba(255,255,255,0.08)] before:absolute before:top-[15%] before:left-[15%] before:h-[20%] before:w-[20%] before:rounded-full before:bg-white/40"
          style={{
            width: b.size,
            height: b.size,
            [b.side]: `${b.offset}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            ["--drift" as string]: `${b.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
