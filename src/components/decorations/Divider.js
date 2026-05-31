import { colors as C } from "../../theme";

export default function Divider({ wide, color }) {
  const w = wide ? 280 : 220;
  const cx = w / 2;
  const accent = color || C.brightGold;

  return (
    <svg width={w} height="32" viewBox={`0 0 ${w} 32`} style={{ display: "block", margin: "12px auto" }}>
      <defs>
        <linearGradient id={`div-${w}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accent} stopOpacity="0"/>
          <stop offset="30%" stopColor={accent} stopOpacity="0.6"/>
          <stop offset="50%" stopColor={accent} stopOpacity="1"/>
          <stop offset="70%" stopColor={accent} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={accent} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="10" y1="16" x2={w - 10} y2="16" stroke={`url(#div-${w})`} strokeWidth="1"/>
      <g transform={`translate(${cx}, 16)`}>
        <circle r="8" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.5"/>
        <path d="M0 -6 L5 0 L0 6 L-5 0 Z" fill={accent}/>
        <circle r="1.8" fill={C.deepBurgundy}/>
      </g>
      <g transform={`translate(${cx - 32}, 16)`}>
        <circle r="3" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.7"/>
        <circle r="1.2" fill={accent}/>
      </g>
      <g transform={`translate(${cx + 32}, 16)`}>
        <circle r="3" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.7"/>
        <circle r="1.2" fill={accent}/>
      </g>
      <circle cx={cx - 65} cy="16" r="1.2" fill={accent} opacity="0.5"/>
      <circle cx={cx + 65} cy="16" r="1.2" fill={accent} opacity="0.5"/>
    </svg>
  );
}
