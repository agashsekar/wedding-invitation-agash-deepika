import { colors as C } from "../../theme";

export default function Toran() {
  return (
    <svg width="100%" height="110" viewBox="0 0 400 110" preserveAspectRatio="none" style={{ display: "block" }}>
      <defs>
        <radialGradient id="marigold">
          <stop offset="0%" stopColor="#f5c265"/>
          <stop offset="50%" stopColor="#d99a32"/>
          <stop offset="100%" stopColor="#8a6020"/>
        </radialGradient>
        <radialGradient id="rose">
          <stop offset="0%" stopColor="#e8a8b3"/>
          <stop offset="50%" stopColor="#c2697a"/>
          <stop offset="100%" stopColor="#8a3848"/>
        </radialGradient>
        <radialGradient id="redFlower">
          <stop offset="0%" stopColor="#e89090"/>
          <stop offset="50%" stopColor="#b54848"/>
          <stop offset="100%" stopColor="#722c3f"/>
        </radialGradient>
        <linearGradient id="leaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d6b3d"/>
          <stop offset="100%" stopColor="#1f3d24"/>
        </linearGradient>
        <linearGradient id="goldThread" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.antiqueGold} stopOpacity="0"/>
          <stop offset="50%" stopColor={C.antiqueGold} stopOpacity="0.8"/>
          <stop offset="100%" stopColor={C.antiqueGold} stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Main thread (curved) */}
      <path d="M-5 14 Q100 50 200 32 Q300 14 405 14" fill="none" stroke="url(#goldThread)" strokeWidth="2.5"/>
      <path d="M-5 16 Q100 52 200 34 Q300 16 405 16" fill="none" stroke={C.warmGold} strokeWidth="0.5" opacity="0.4"/>

      {/* Leaves along the thread */}
      {Array.from({ length: 26 }).map((_, i) => {
        const x = (i / 25) * 400;
        const y = 14 + Math.sin((x / 400) * Math.PI) * 20;
        const rot = 88 + (i % 2 ? 16 : -16);
        return (
          <g key={`lv${i}`} transform={`translate(${x},${y}) rotate(${rot})`}>
            <path d="M0 0 Q3 -8 0 -16 Q-3 -8 0 0Z" fill="url(#leaf)"/>
            <line x1="0" y1="0" x2="0" y2="-14" stroke="#1a3018" strokeWidth="0.3" opacity="0.6"/>
          </g>
        );
      })}

      {/* Hanging flower garlands */}
      {[30, 65, 100, 135, 170, 200, 230, 265, 300, 335, 370].map((x, i) => {
        const baseY = 14 + Math.sin((x / 400) * Math.PI) * 20;
        const len = 38 + (i % 3) * 12 + Math.sin(i * 2.1) * 6;
        const type = i % 3;
        const grad = type === 0 ? "url(#marigold)" : type === 1 ? "url(#rose)" : "url(#redFlower)";
        const inner = type === 0 ? "#fde29a" : type === 1 ? "#f0c5cc" : "#e8a0a0";
        return (
          <g key={`gar${i}`}>
            <line x1={x} y1={baseY} x2={x} y2={baseY + len - 8} stroke={C.warmGold} strokeWidth="0.8" opacity="0.4"/>
            {/* Multiple stacked flowers */}
            {Array.from({ length: 4 + (i % 2) }).map((_, fi) => {
              const fy = baseY + len - fi * 7;
              const r = 6 - fi * 0.5;
              return (
                <g key={fi}>
                  <circle cx={x} cy={fy} r={r + 0.8} fill={grad} opacity="0.4"/>
                  <circle cx={x} cy={fy} r={r} fill={grad}/>
                  <circle cx={x} cy={fy} r={r * 0.5} fill={inner} opacity="0.7"/>
                </g>
              );
            })}
            {/* Tiny center dot */}
            <circle cx={x} cy={baseY + len + 4} r="2" fill={C.warmGold} opacity="0.5"/>
          </g>
        );
      })}
    </svg>
  );
}
