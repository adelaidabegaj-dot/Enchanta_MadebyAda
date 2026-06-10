const GLITTER = [
  { top: "4%",  left: "8%",  size: "text-xs",  color: "text-blossom-300", delay: "0s",   duration: "3.4s", opacity: 0.8 },
  { top: "11%", left: "27%", size: "text-sm",  color: "text-lavender-300", delay: "1.2s", duration: "4s",   opacity: 0.7 },
  { top: "6%",  left: "52%", size: "text-xs",  color: "text-sky-300",     delay: "2.4s", duration: "3.6s", opacity: 0.75 },
  { top: "16%", left: "71%", size: "text-sm",  color: "text-blossom-300", delay: "0.6s", duration: "4.4s", opacity: 0.65 },
  { top: "9%",  left: "90%", size: "text-xs",  color: "text-lavender-300", delay: "3s",   duration: "3.2s", opacity: 0.8 },
  { top: "24%", left: "16%", size: "text-xs",  color: "text-sky-300",     delay: "1.8s", duration: "3.8s", opacity: 0.7 },
  { top: "29%", left: "62%", size: "text-sm",  color: "text-blossom-300", delay: "2.6s", duration: "4.2s", opacity: 0.6 },
  { top: "33%", left: "85%", size: "text-xs",  color: "text-lavender-300", delay: "0.3s", duration: "3.5s", opacity: 0.75 },
  { top: "41%", left: "5%",  size: "text-sm",  color: "text-sky-300",     delay: "1.5s", duration: "4s",   opacity: 0.65 },
  { top: "47%", left: "38%", size: "text-xs",  color: "text-blossom-300", delay: "2.1s", duration: "3.3s", opacity: 0.8 },
  { top: "52%", left: "73%", size: "text-sm",  color: "text-lavender-300", delay: "0.9s", duration: "4.3s", opacity: 0.6 },
  { top: "59%", left: "20%", size: "text-xs",  color: "text-sky-300",     delay: "3.3s", duration: "3.7s", opacity: 0.7 },
  { top: "63%", left: "94%", size: "text-sm",  color: "text-blossom-300", delay: "1.1s", duration: "4.1s", opacity: 0.75 },
  { top: "68%", left: "44%", size: "text-xs",  color: "text-lavender-300", delay: "2.9s", duration: "3.4s", opacity: 0.65 },
  { top: "74%", left: "8%",  size: "text-sm",  color: "text-sky-300",     delay: "0.4s", duration: "4.5s", opacity: 0.7 },
  { top: "78%", left: "60%", size: "text-xs",  color: "text-blossom-300", delay: "1.9s", duration: "3.6s", opacity: 0.8 },
  { top: "84%", left: "30%", size: "text-sm",  color: "text-lavender-300", delay: "2.5s", duration: "4s",   opacity: 0.6 },
  { top: "89%", left: "82%", size: "text-xs",  color: "text-sky-300",     delay: "0.7s", duration: "3.9s", opacity: 0.75 },
  { top: "94%", left: "15%", size: "text-sm",  color: "text-blossom-300", delay: "3.2s", duration: "4.3s", opacity: 0.65 },
  { top: "97%", left: "55%", size: "text-xs",  color: "text-lavender-300", delay: "1.4s", duration: "3.5s", opacity: 0.8 },
];

export default function Sparkles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {GLITTER.map((g, i) => (
        <span
          key={i}
          className={`animate-twinkle absolute ${g.size} ${g.color}`}
          style={{
            top: g.top,
            left: g.left,
            animationDelay: g.delay,
            animationDuration: g.duration,
            ["--twinkle-opacity" as string]: g.opacity,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
