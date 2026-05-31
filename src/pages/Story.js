import { colors as C, fonts } from "../theme";
import { wedding } from "../config";
import Divider from "../components/decorations/Divider";
import Lamp from "../components/decorations/Lamp";
import { Sparkle } from "../components/decorations/Sparkle";

export default function Story() {
  return (
    <div style={{ padding: "44px 20px 60px", maxWidth: 680, margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <Lamp size={32} animated/>
        <h2 className="gold-text" style={{
          fontFamily: fonts.script,
          fontSize: 64,
          margin: "16px 0 0",
          fontWeight: 400,
          lineHeight: 1.1,
          textShadow: `0 4px 16px rgba(245,208,103,0.3)`,
        }}>
          Our Story
        </h2>
        <p style={{
          fontFamily: fonts.cinzel, fontSize: 11, letterSpacing: 6,
          textTransform: "uppercase", color: C.brightGold, margin: "10px 0 0",
          fontWeight: 600,
        }}>
          ✦ How we found each other ✦
        </p>
        <Divider/>
      </div>

      <div style={{
        padding: "40px 32px",
        background: `linear-gradient(135deg, ${C.deepBurgundy} 0%, ${C.burgundy} 100%)`,
        border: `2px solid ${C.warmGold}`,
        borderRadius: 8,
        position: "relative",
        marginTop: 20,
        boxShadow: `0 0 30px rgba(245,208,103,0.2), 0 10px 40px rgba(0,0,0,0.4)`,
      }}>
        <div style={{
          position: "absolute", inset: 8,
          border: `1px solid ${C.brightGold}55`,
          borderRadius: 6, pointerEvents: "none",
        }}/>

        <div style={{
          position: "absolute", top: -16, left: "50%",
          transform: "translateX(-50%)",
          background: C.burgundy, padding: "0 16px",
        }}>
          <Sparkle size={24} color={C.brightGold}/>
        </div>

        {wedding.story.paragraphs.map((p, i) => (
          <p key={i} style={{
            fontFamily: fonts.body,
            fontSize: 19,
            lineHeight: 1.9,
            color: C.warmIvory,
            margin: i === 0 ? "12px 0 22px" : "0",
            textAlign: "center",
            fontStyle: i === 0 ? "italic" : "normal",
            fontWeight: i === 0 ? 500 : 500,
          }}>
            {p}
          </p>
        ))}

        <div style={{
          textAlign: "center",
          marginTop: 32,
          fontFamily: fonts.script,
          fontSize: 42,
          color: C.brightGold,
          textShadow: `0 2px 12px rgba(245,208,103,0.4)`,
        }}>
          A &amp; D
        </div>
      </div>

      <div style={{ marginTop: 40, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, alignItems: "center" }}>
          <Sparkle size={12} delay={0}/>
          <Sparkle size={16} delay={0.5}/>
          <Sparkle size={12} delay={1}/>
        </div>
        <p style={{
          fontFamily: fonts.body,
          fontSize: 17, fontStyle: "italic", color: C.textMuted,
          marginTop: 16, fontWeight: 500,
        }}>
          And so the story continues — with you, our beloved guests, by our side.
        </p>
      </div>
    </div>
  );
}
