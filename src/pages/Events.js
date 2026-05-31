import { colors as C, fonts, ease } from "../theme";
import { wedding } from "../config";
import Divider from "../components/decorations/Divider";
import Lamp from "../components/decorations/Lamp";
import { Sparkle } from "../components/decorations/Sparkle";

function EventCard({ data, icon, sublabel }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${C.deepBurgundy} 0%, ${C.burgundy} 100%)`,
      border: `2px solid ${C.warmGold}`,
      borderRadius: 8,
      padding: "32px 28px",
      marginBottom: 18,
      position: "relative",
      overflow: "hidden",
      boxShadow: `0 0 20px rgba(245,208,103,0.2), 0 10px 30px rgba(0,0,0,0.4)`,
    }}>
      <div style={{
        position: "absolute", inset: 8,
        border: `1px solid ${C.brightGold}55`,
        borderRadius: 6, pointerEvents: "none",
      }}/>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
        <span style={{ fontSize: 32 }}>{icon}</span>
        <div>
          <p style={{
            fontFamily: fonts.cinzel,
            fontSize: 10, letterSpacing: 4, textTransform: "uppercase",
            color: C.brightGold, margin: 0, fontWeight: 700,
          }}>
            ✦ {sublabel} ✦
          </p>
          <h3 style={{
            fontFamily: fonts.serif,
            fontSize: 26,
            color: C.warmIvory,
            margin: "4px 0 0",
            fontWeight: 700,
            textShadow: `0 1px 8px rgba(245,208,103,0.2)`,
          }}>
            {data.label}
          </h3>
        </div>
      </div>

      <div style={{
        padding: "16px 18px",
        background: `${C.brightGold}10`,
        border: `1px solid ${C.brightGold}40`,
        borderRadius: 4,
        margin: "0 0 16px",
      }}>
        <p style={{
          fontFamily: fonts.cinzel,
          fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
          color: C.brightGold, margin: 0, fontWeight: 700,
        }}>When</p>
        <p style={{
          fontFamily: fonts.serif,
          fontSize: 19, color: C.warmIvory, margin: "6px 0 0",
          fontWeight: 700,
        }}>
          {wedding.dateDisplay}
        </p>
        <p style={{
          fontFamily: fonts.body, fontSize: 19, color: C.champagne,
          margin: "2px 0 0", fontStyle: "italic", fontWeight: 600,
        }}>
          {data.time}
        </p>
      </div>

      <div style={{
        padding: "16px 18px",
        background: `${C.brightGold}10`,
        border: `1px solid ${C.brightGold}40`,
        borderRadius: 4,
        margin: "0 0 18px",
      }}>
        <p style={{
          fontFamily: fonts.cinzel,
          fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
          color: C.brightGold, margin: 0, fontWeight: 700,
        }}>Where</p>
        <p style={{
          fontFamily: fonts.serif,
          fontSize: 19, color: C.warmIvory, margin: "6px 0 0",
          fontWeight: 700,
        }}>
          {data.venue}
        </p>
        <p style={{
          fontFamily: fonts.body, fontSize: 15, color: C.textMuted,
          margin: "4px 0 0", fontStyle: "italic", fontWeight: 500,
        }}>
          {data.address}
        </p>
      </div>

      <p style={{
        fontFamily: fonts.body,
        fontSize: 17,
        color: C.warmIvory,
        margin: 0,
        lineHeight: 1.6,
        fontStyle: "italic",
        textAlign: "center",
        fontWeight: 500,
      }}>
        {data.description}
      </p>

      {data.dressCode && (
        <p style={{
          fontFamily: fonts.cinzel,
          fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
          color: C.brightGold, margin: "18px 0 0", textAlign: "center",
          fontWeight: 600,
        }}>
          Attire: <span style={{ color: C.warmIvory, fontWeight: 700 }}>{data.dressCode}</span>
        </p>
      )}
    </div>
  );
}

export default function Events() {
  return (
    <div style={{ padding: "44px 20px 60px", maxWidth: 680, margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <Lamp size={32} animated/>
        <h2 className="gold-text" style={{
          fontFamily: fonts.script, fontSize: 64,
          margin: "16px 0 0", fontWeight: 400, lineHeight: 1.1,
          textShadow: `0 4px 16px rgba(245,208,103,0.3)`,
        }}>
          Our Celebrations
        </h2>
        <p style={{
          fontFamily: fonts.cinzel, fontSize: 11, letterSpacing: 6,
          textTransform: "uppercase", color: C.brightGold, margin: "10px 0 0",
          fontWeight: 600,
        }}>✦ Wedding · Reception ✦</p>
        <Divider/>
      </div>

      <div style={{ marginTop: 28 }}>
        <EventCard data={wedding.ceremony} icon="🪔" sublabel="Sacred Vows"/>
        <EventCard data={wedding.reception} icon="✨" sublabel="Evening Celebration"/>
      </div>

      {/* Venue map */}
      <div style={{
        background: `linear-gradient(135deg, ${C.deepBurgundy} 0%, ${C.burgundy} 100%)`,
        border: `2px solid ${C.warmGold}`,
        borderRadius: 8,
        padding: "28px 24px",
        marginTop: 10,
        boxShadow: `0 0 20px rgba(245,208,103,0.2), 0 10px 30px rgba(0,0,0,0.4)`,
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 8,
          border: `1px solid ${C.brightGold}55`,
          borderRadius: 6, pointerEvents: "none",
        }}/>

        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <p style={{
            fontFamily: fonts.cinzel,
            fontSize: 11, letterSpacing: 6, textTransform: "uppercase",
            color: C.brightGold, margin: "0 0 8px", fontWeight: 700,
          }}>
            ✦ How to find us ✦
          </p>
          <h3 style={{
            fontFamily: fonts.serif, fontSize: 26, color: C.warmIvory,
            margin: 0, fontWeight: 700,
          }}>
            {wedding.venue.name}
          </h3>
          <p style={{
            fontFamily: fonts.body, fontSize: 15, color: C.champagne,
            margin: "6px 0 0", fontStyle: "italic", fontWeight: 500,
          }}>
            {wedding.venue.address}
          </p>
        </div>

        <div style={{
          borderRadius: 4,
          overflow: "hidden",
          border: `2px solid ${C.brightGold}`,
          boxShadow: `0 0 16px rgba(245,208,103,0.2)`,
        }}>
          <iframe
            src={wedding.venue.mapsEmbed}
            width="100%" height="280"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location"
          />
        </div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <a
            href={wedding.venue.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: fonts.cinzel,
              fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
              color: C.deepBurgundy, textDecoration: "none",
              background: `linear-gradient(135deg, ${C.brightGold}, ${C.warmGold})`,
              padding: "12px 28px",
              borderRadius: 4,
              transition: `all 0.3s ${ease}`,
              fontWeight: 800,
              boxShadow: `0 4px 16px rgba(245,208,103,0.4)`,
            }}
          >
            ✦ Get Directions →
          </a>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 32 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, alignItems: "center" }}>
          <Sparkle size={12} delay={0}/>
          <Sparkle size={16} delay={0.5}/>
          <Sparkle size={12} delay={1}/>
        </div>
      </div>
    </div>
  );
}
