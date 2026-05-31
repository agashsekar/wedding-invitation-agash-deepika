import { colors as C } from "../../theme";

export default function Lamp({ size = 28, animated }) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 32 44"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <defs>
        <radialGradient id="lamp-flame">
          <stop offset="0%" stopColor="#fff8d8"/>
          <stop offset="40%" stopColor={C.brightGold}/>
          <stop offset="100%" stopColor="#d97757"/>
        </radialGradient>
        <radialGradient id="lamp-bowl">
          <stop offset="0%" stopColor={C.warmGold}/>
          <stop offset="100%" stopColor={C.darkGold}/>
        </radialGradient>
        <radialGradient id="lamp-glow">
          <stop offset="0%" stopColor={C.brightGold} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={C.brightGold} stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="16" cy="14" r="18" fill="url(#lamp-glow)"/>
      <ellipse cx="16" cy="40" rx="10" ry="2.5" fill={C.darkGold} opacity="0.8"/>
      <ellipse cx="16" cy="39" rx="8.5" ry="2" fill={C.warmGold}/>
      <rect x="13.5" y="26" width="5" height="13" rx="1" fill="url(#lamp-bowl)"/>
      <path d="M6 24 Q6 30 16 30 Q26 30 26 24 Q26 19 16 19 Q6 19 6 24Z" fill="url(#lamp-bowl)"/>
      <rect x="15.4" y="17" width="1.2" height="3" rx="0.5" fill="#5a3818"/>
      <g style={animated ? { animation: "flicker 1.8s ease-in-out infinite", transformOrigin: "16px 12px" } : {}}>
        <path d="M16 4 Q19 9 19 14 Q19 17 16 17 Q13 17 13 14 Q13 9 16 4Z" fill="url(#lamp-flame)"/>
        <path d="M16 6 Q17.5 10 17.5 13 Q17.5 15 16 15 Q14.5 15 14.5 13 Q14.5 10 16 6Z" fill="#fff8d8" opacity="0.9"/>
      </g>
    </svg>
  );
}
