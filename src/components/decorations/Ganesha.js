import { colors as C } from "../../theme";

// Stylized Ganesha (Vinayakar) - god of new beginnings, blessings
export default function Ganesha({ size = 100 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ display: "inline-block", filter: "drop-shadow(0 4px 12px rgba(245,208,103,0.3))" }}
    >
      <defs>
        <radialGradient id="gnGold">
          <stop offset="0%" stopColor={C.shimmerGold}/>
          <stop offset="50%" stopColor={C.brightGold}/>
          <stop offset="100%" stopColor={C.warmGold}/>
        </radialGradient>
        <radialGradient id="gnGlow">
          <stop offset="0%" stopColor={C.brightGold} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={C.brightGold} stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="gnHalo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.shimmerGold}/>
          <stop offset="100%" stopColor={C.darkGold}/>
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <circle cx="60" cy="60" r="58" fill="url(#gnGlow)"/>

      {/* Halo/Aura rays */}
      <g stroke={C.brightGold} strokeWidth="0.8" opacity="0.6">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const x1 = 60 + Math.cos(angle) * 48;
          const y1 = 60 + Math.sin(angle) * 48;
          const x2 = 60 + Math.cos(angle) * 56;
          const y2 = 60 + Math.sin(angle) * 56;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
        })}
      </g>

      {/* Halo circle */}
      <circle cx="60" cy="60" r="46" fill="none" stroke="url(#gnHalo)" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="60" cy="60" r="44" fill="none" stroke={C.brightGold} strokeWidth="0.5" opacity="0.5"/>

      {/* Body - sitting posture (rounded belly) */}
      <ellipse cx="60" cy="78" rx="22" ry="20" fill="url(#gnGold)"/>
      <ellipse cx="60" cy="76" rx="18" ry="16" fill={C.warmGold} opacity="0.6"/>

      {/* Lotus throne base */}
      <g fill={C.darkGold} opacity="0.8">
        <ellipse cx="60" cy="100" rx="28" ry="4"/>
        <path d="M40 100 Q40 96 45 95 Q50 96 50 100 Z" fill="url(#gnGold)"/>
        <path d="M50 100 Q50 95 56 94 Q62 95 62 100 Z" fill="url(#gnGold)"/>
        <path d="M58 100 Q58 94 64 93 Q70 94 70 100 Z" fill="url(#gnGold)"/>
        <path d="M68 100 Q68 95 74 95 Q80 96 80 100 Z" fill="url(#gnGold)"/>
      </g>

      {/* Crown/Mukut */}
      <g>
        <path d="M48 36 L52 24 L56 32 L60 22 L64 32 L68 24 L72 36 Z" fill="url(#gnGold)" stroke={C.darkGold} strokeWidth="0.5"/>
        <circle cx="52" cy="26" r="1.5" fill={C.shimmerGold}/>
        <circle cx="60" cy="24" r="2" fill={C.shimmerGold}/>
        <circle cx="68" cy="26" r="1.5" fill={C.shimmerGold}/>
        {/* Crown band */}
        <rect x="46" y="36" width="28" height="3" rx="1" fill={C.warmGold} stroke={C.darkGold} strokeWidth="0.3"/>
        <circle cx="60" cy="37.5" r="1.5" fill={C.shimmerGold}/>
      </g>

      {/* Head (elephant face) */}
      <ellipse cx="60" cy="50" rx="20" ry="17" fill="url(#gnGold)"/>
      <ellipse cx="60" cy="48" rx="16" ry="13" fill={C.warmGold} opacity="0.7"/>

      {/* Large ears */}
      <g fill="url(#gnGold)" stroke={C.darkGold} strokeWidth="0.5">
        <path d="M40 46 Q30 44 28 52 Q28 60 36 60 Q42 58 42 52 Z"/>
        <path d="M80 46 Q90 44 92 52 Q92 60 84 60 Q78 58 78 52 Z"/>
        {/* Ear inner detail */}
        <path d="M34 50 Q32 53 33 57" fill="none" stroke={C.darkGold} strokeWidth="0.6"/>
        <path d="M86 50 Q88 53 87 57" fill="none" stroke={C.darkGold} strokeWidth="0.6"/>
      </g>

      {/* Trunk (curved to the side) */}
      <path
        d="M60 56 Q60 64 56 68 Q50 72 48 76 Q47 80 50 82 Q53 83 56 80"
        fill="url(#gnGold)"
        stroke={C.darkGold}
        strokeWidth="0.6"
      />
      {/* Trunk rings */}
      <g stroke={C.darkGold} strokeWidth="0.4" fill="none" opacity="0.6">
        <path d="M58 60 Q56 60 55 62"/>
        <path d="M55 65 Q52 66 51 68"/>
        <path d="M51 72 Q49 73 49 76"/>
      </g>

      {/* Eyes */}
      <g>
        <ellipse cx="52" cy="48" rx="2.5" ry="3" fill="#3a1a08"/>
        <ellipse cx="68" cy="48" rx="2.5" ry="3" fill="#3a1a08"/>
        <circle cx="52.5" cy="47" r="0.7" fill="#fff"/>
        <circle cx="68.5" cy="47" r="0.7" fill="#fff"/>
      </g>

      {/* Tilak (forehead mark) */}
      <path d="M58 40 L60 36 L62 40 L60 44 Z" fill={C.coral}/>
      <circle cx="60" cy="40" r="1" fill={C.brightGold}/>

      {/* Tusks */}
      <path d="M50 60 Q48 64 50 66" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M70 60 Q72 64 70 66" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Necklace */}
      <g>
        <ellipse cx="60" cy="68" rx="10" ry="2" fill="none" stroke={C.brightGold} strokeWidth="0.8"/>
        <circle cx="60" cy="69.5" r="1.5" fill={C.brightGold}/>
        <circle cx="54" cy="68.5" r="0.8" fill={C.brightGold}/>
        <circle cx="66" cy="68.5" r="0.8" fill={C.brightGold}/>
      </g>

      {/* Arms holding items */}
      <g fill="url(#gnGold)">
        {/* Left arm */}
        <ellipse cx="42" cy="75" rx="3" ry="8" transform="rotate(-20 42 75)"/>
        {/* Right arm */}
        <ellipse cx="78" cy="75" rx="3" ry="8" transform="rotate(20 78 75)"/>
      </g>

      {/* Sacred items - lotus and modak */}
      <circle cx="36" cy="68" r="3" fill={C.coral} opacity="0.8"/>
      <circle cx="36" cy="68" r="1.5" fill={C.brightGold}/>
      <circle cx="84" cy="68" r="3" fill={C.coral} opacity="0.8"/>
      <circle cx="84" cy="68" r="1.5" fill={C.brightGold}/>

      {/* Belly ornament */}
      <circle cx="60" cy="80" r="2.5" fill="none" stroke={C.darkGold} strokeWidth="0.8"/>
      <circle cx="60" cy="80" r="1" fill={C.shimmerGold}/>

      {/* Twinkles around */}
      <g fill={C.shimmerGold} opacity="0.9">
        <path d="M20 30 L21 33 L24 34 L21 35 L20 38 L19 35 L16 34 L19 33 Z"/>
        <path d="M100 30 L101 33 L104 34 L101 35 L100 38 L99 35 L96 34 L99 33 Z"/>
        <path d="M15 70 L16 72 L18 73 L16 74 L15 76 L14 74 L12 73 L14 72 Z"/>
        <path d="M105 70 L106 72 L108 73 L106 74 L105 76 L104 74 L102 73 L104 72 Z"/>
      </g>
    </svg>
  );
}
