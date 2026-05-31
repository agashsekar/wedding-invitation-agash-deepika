import { colors as C } from "../../theme";

export default function Frame({ children, style = {}, accent = C.antiqueGold, soft = false }) {
  return (
    <div style={{
      position: "relative",
      border: soft ? `1px solid ${C.borderSoft}` : `1.5px solid ${C.border}`,
      borderRadius: 4,
      padding: "32px 24px",
      background: soft
        ? "rgba(255,253,246,0.6)"
        : `linear-gradient(180deg, ${C.cardBg} 0%, #fdf8e9 100%)`,
      boxShadow: soft
        ? "0 1px 8px rgba(74,24,37,0.04)"
        : `0 0 0 1px ${accent}10, 0 8px 32px rgba(74,24,37,0.06), inset 0 0 60px rgba(184,150,76,0.025)`,
      ...style,
    }}>
      {/* Inner border line */}
      {!soft && (
        <div style={{
          position: "absolute",
          inset: 6,
          border: `0.5px solid ${accent}33`,
          borderRadius: 3,
          pointerEvents: "none",
        }}/>
      )}

      {/* Corner ornaments — minimal, refined */}
      {!soft && ["tl", "tr", "bl", "br"].map(p => (
        <svg key={p} style={{
          position: "absolute",
          width: 28, height: 28,
          ...(p === "tl" && { top: 2, left: 2 }),
          ...(p === "tr" && { top: 2, right: 2, transform: "scaleX(-1)" }),
          ...(p === "bl" && { bottom: 2, left: 2, transform: "scaleY(-1)" }),
          ...(p === "br" && { bottom: 2, right: 2, transform: "scale(-1,-1)" }),
        }} viewBox="0 0 28 28">
          <path d="M2 6 L2 2 L6 2" stroke={accent} strokeWidth="0.8" fill="none" opacity="0.7"/>
          <path d="M6 6 Q4 4 6 2" stroke={accent} strokeWidth="0.6" fill="none" opacity="0.5"/>
          <circle cx="3" cy="3" r="0.8" fill={accent}/>
        </svg>
      ))}

      {children}
    </div>
  );
}
