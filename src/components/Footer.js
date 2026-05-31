import { colors as C, fonts } from "../theme";
import Divider from "./decorations/Divider";
import { Sparkle } from "./decorations/Sparkle";

export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "36px 20px 44px",
      borderTop: `1px solid ${C.brightGold}33`,
      marginTop: 24,
      background: `linear-gradient(180deg, transparent, ${C.midnight}88)`,
    }}>
      <Divider/>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center", marginTop: 14 }}>
        <Sparkle size={10} delay={0}/>
        <p className="gold-text" style={{
          fontFamily: fonts.script,
          fontSize: 40,
          margin: 0,
          lineHeight: 1,
          textShadow: `0 2px 12px rgba(245,208,103,0.3)`,
        }}>
          A &amp; D
        </p>
        <Sparkle size={10} delay={0.7}/>
      </div>
      <p style={{
        fontFamily: fonts.cinzel,
        fontSize: 10,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: C.champagne,
        margin: "8px 0 0",
        fontWeight: 600,
      }}>
        ✦ July · 2 · 2026 ✦
      </p>
    </footer>
  );
}
