import { useState, useEffect } from "react";
import { colors as C, fonts } from "../theme";
import { wedding } from "../config";

export default function Countdown() {
  const [cd, setCd] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date(wedding.dateISO);
    const tick = () => {
      const diff = target - new Date();
      if (diff <= 0) return setCd({ d: 0, h: 0, m: 0, s: 0 });
      setCd({
        d: Math.floor(diff / 864e5),
        h: Math.floor((diff % 864e5) / 36e5),
        m: Math.floor((diff % 36e5) / 6e4),
        s: Math.floor((diff % 6e4) / 1e3),
      });
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  const items = [
    { v: cd.d, l: "Days" },
    { v: cd.h, l: "Hours" },
    { v: cd.m, l: "Min" },
    { v: cd.s, l: "Sec" },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: 12,
      margin: "24px 0",
      flexWrap: "wrap",
    }}>
      {items.map((c, i) => (
        <div key={i} style={{
          minWidth: 74,
          textAlign: "center",
          padding: "16px 10px",
          background: `linear-gradient(135deg, ${C.deepBurgundy}, ${C.burgundy})`,
          border: `1.5px solid ${C.brightGold}`,
          borderRadius: 6,
          boxShadow: `0 4px 16px rgba(0,0,0,0.3), 0 0 20px rgba(245,208,103,0.15)`,
        }}>
          <div style={{
            fontFamily: fonts.serif,
            fontSize: 36,
            fontWeight: 800,
            color: C.brightGold,
            lineHeight: 1,
            letterSpacing: 1,
            textShadow: `0 2px 8px rgba(245,208,103,0.4)`,
          }}>
            {String(c.v).padStart(2, "0")}
          </div>
          <div style={{
            fontSize: 10,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: C.champagne,
            marginTop: 8,
            fontFamily: fonts.cinzel,
            fontWeight: 600,
          }}>{c.l}</div>
        </div>
      ))}
    </div>
  );
}
