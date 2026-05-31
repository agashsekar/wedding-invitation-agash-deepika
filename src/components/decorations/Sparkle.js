import { colors as C } from "../../theme";

// Sparkle/star with 4-pointed shape
export function Sparkle({ size = 16, color, delay = 0, opacity = 1 }) {
  const c = color || C.brightGold;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{
      display: "inline-block",
      animation: `sparkle 2.5s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      opacity,
    }}>
      <path d="M10 0 L11 8 L20 10 L11 12 L10 20 L9 12 L0 10 L9 8 Z" fill={c}/>
    </svg>
  );
}

// Tiny twinkle star (different shape)
export function Twinkle({ size = 10, color, delay = 0 }) {
  const c = color || C.shimmerGold;
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" style={{
      display: "inline-block",
      animation: `twinkle 3s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}>
      <circle cx="6" cy="6" r="1.5" fill={c}/>
      <circle cx="6" cy="6" r="3" fill="none" stroke={c} strokeWidth="0.4" opacity="0.5"/>
    </svg>
  );
}

// MANY more sparkles scattered in background
export function SparkleField() {
  const sparkles = [
    // Top area
    { x: "5%", y: "5%", size: 8, delay: 0, type: "star" },
    { x: "15%", y: "12%", size: 12, delay: 0.5, type: "star" },
    { x: "25%", y: "8%", size: 9, delay: 1.2, type: "twinkle" },
    { x: "40%", y: "15%", size: 14, delay: 0.3, type: "star" },
    { x: "55%", y: "6%", size: 7, delay: 1.8, type: "twinkle" },
    { x: "70%", y: "10%", size: 11, delay: 0.7, type: "star" },
    { x: "82%", y: "16%", size: 10, delay: 1.4, type: "star" },
    { x: "92%", y: "8%", size: 13, delay: 0.2, type: "star" },
    // Upper middle
    { x: "8%", y: "22%", size: 9, delay: 1.6, type: "twinkle" },
    { x: "30%", y: "25%", size: 11, delay: 0.4, type: "star" },
    { x: "50%", y: "28%", size: 8, delay: 1.1, type: "twinkle" },
    { x: "65%", y: "22%", size: 12, delay: 0.9, type: "star" },
    { x: "88%", y: "26%", size: 10, delay: 1.7, type: "twinkle" },
    // Middle
    { x: "3%", y: "40%", size: 14, delay: 0.6, type: "star" },
    { x: "18%", y: "45%", size: 8, delay: 1.3, type: "twinkle" },
    { x: "35%", y: "42%", size: 11, delay: 2, type: "star" },
    { x: "60%", y: "40%", size: 9, delay: 0.5, type: "twinkle" },
    { x: "78%", y: "44%", size: 13, delay: 1.2, type: "star" },
    { x: "95%", y: "40%", size: 7, delay: 0.8, type: "twinkle" },
    // Lower middle
    { x: "10%", y: "60%", size: 12, delay: 1.5, type: "star" },
    { x: "28%", y: "58%", size: 9, delay: 0.3, type: "twinkle" },
    { x: "45%", y: "62%", size: 10, delay: 1.1, type: "star" },
    { x: "70%", y: "58%", size: 14, delay: 0.7, type: "star" },
    { x: "85%", y: "62%", size: 8, delay: 1.9, type: "twinkle" },
    // Bottom area
    { x: "5%", y: "78%", size: 11, delay: 1.4, type: "star" },
    { x: "22%", y: "82%", size: 13, delay: 0.6, type: "star" },
    { x: "40%", y: "78%", size: 8, delay: 1.2, type: "twinkle" },
    { x: "58%", y: "85%", size: 10, delay: 0.4, type: "star" },
    { x: "75%", y: "80%", size: 12, delay: 1.6, type: "star" },
    { x: "92%", y: "85%", size: 9, delay: 0.9, type: "twinkle" },
    // Very bottom
    { x: "12%", y: "92%", size: 10, delay: 1.7, type: "star" },
    { x: "35%", y: "95%", size: 8, delay: 0.5, type: "twinkle" },
    { x: "60%", y: "93%", size: 11, delay: 1.1, type: "star" },
    { x: "85%", y: "96%", size: 9, delay: 1.8, type: "twinkle" },
  ];

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden",
    }}>
      {sparkles.map((s, i) => (
        <div key={i} style={{
          position: "absolute",
          left: s.x, top: s.y,
        }}>
          {s.type === "star"
            ? <Sparkle size={s.size} delay={s.delay} opacity={0.65 + Math.random() * 0.3}/>
            : <Twinkle size={s.size} delay={s.delay}/>}
        </div>
      ))}
    </div>
  );
}
