import { colors as C } from "../../theme";

// Single paisley/mango (mangai) motif
export function Paisley({ size = 32, color, opacity = 0.5 }) {
  const c = color || C.antiqueGold;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "inline-block" }}>
      <path d="M16 4 Q24 4 26 12 Q28 20 22 26 Q18 28 14 24 Q10 18 12 12 Q14 6 16 4Z"
        fill="none" stroke={c} strokeWidth="0.8" opacity={opacity}/>
      <path d="M16 8 Q22 8 23 14 Q24 20 20 23 Q17 24 15 22 Q13 18 14 14 Q15 10 16 8Z"
        fill="none" stroke={c} strokeWidth="0.5" opacity={opacity * 0.7}/>
      <circle cx="18" cy="14" r="1.5" fill={c} opacity={opacity * 0.8}/>
      <circle cx="16" cy="20" r="1" fill={c} opacity={opacity * 0.6}/>
    </svg>
  );
}

// Pair of facing paisleys (decorative header element)
export function PaisleyPair({ color = C.antiqueGold, size = 28 }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
      <span style={{ transform: "scaleX(-1)", display: "inline-block" }}>
        <Paisley size={size} color={color}/>
      </span>
      <span style={{
        width: 5, height: 5, borderRadius: "50%",
        background: color, opacity: 0.7,
      }}/>
      <Paisley size={size} color={color}/>
    </div>
  );
}
