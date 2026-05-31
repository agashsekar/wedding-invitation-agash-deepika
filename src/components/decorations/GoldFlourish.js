import { colors as C } from "../../theme";

// Decorative gold flourish/scrollwork (like ornate wedding invitation frames)
export default function GoldFlourish({ side = "left", size = 80 }) {
  const flip = side === "right";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        display: "inline-block",
        transform: flip ? "scaleX(-1)" : "none",
        filter: "drop-shadow(0 2px 6px rgba(245,208,103,0.3))",
      }}
    >
      <defs>
        <linearGradient id={`fl-${side}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.shimmerGold}/>
          <stop offset="50%" stopColor={C.brightGold}/>
          <stop offset="100%" stopColor={C.warmGold}/>
        </linearGradient>
      </defs>

      {/* Main scrollwork - large outer curl */}
      <g fill="none" stroke={`url(#fl-${side})`} strokeWidth="1.8" strokeLinecap="round">
        {/* Outer flourish */}
        <path d="M95 50 Q70 50 60 60 Q50 70 35 70 Q15 70 10 55 Q8 45 18 40 Q28 38 30 48 Q31 55 25 55"/>
        {/* Inner curl */}
        <path d="M95 50 Q75 48 65 38 Q55 28 40 30 Q22 32 18 45"/>
        {/* Decorative top swirl */}
        <path d="M80 45 Q72 38 65 42 Q60 46 65 50"/>
        {/* Bottom flourish */}
        <path d="M85 60 Q70 65 60 70 Q50 75 45 80 Q42 85 50 88"/>
      </g>

      {/* Small leaves */}
      <g fill={`url(#fl-${side})`}>
        <path d="M30 48 Q33 44 36 48 Q33 52 30 48Z"/>
        <path d="M50 30 Q53 26 56 30 Q53 34 50 30Z"/>
        <path d="M65 38 Q68 34 71 38 Q68 42 65 38Z"/>
        <path d="M45 80 Q48 76 51 80 Q48 84 45 80Z"/>
      </g>

      {/* Decorative dots */}
      <g fill={C.brightGold}>
        <circle cx="25" cy="55" r="1.5"/>
        <circle cx="40" cy="68" r="1.2"/>
        <circle cx="55" cy="38" r="1.5"/>
        <circle cx="70" cy="50" r="1.2"/>
        <circle cx="50" cy="88" r="1.5"/>
        <circle cx="85" cy="55" r="1.5"/>
      </g>

      {/* Tiny diamond accent */}
      <g fill={C.shimmerGold}>
        <path d="M50 50 L52 52 L50 54 L48 52 Z"/>
        <path d="M65 70 L67 72 L65 74 L63 72 Z"/>
      </g>
    </svg>
  );
}
