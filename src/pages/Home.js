import { colors as C, fonts, ease } from "../theme";
import { wedding } from "../config";
import { COUPLE_IMG, GANESHA_IMG } from "../assets";
import Divider from "../components/decorations/Divider";
import Lamp from "../components/decorations/Lamp";
import { SparkleField, Sparkle, Twinkle } from "../components/decorations/Sparkle";
import GoldFlourish from "../components/decorations/GoldFlourish";
import Countdown from "../components/Countdown";

export default function Home({ setPage }) {
  return (
    <div style={{ paddingBottom: 40, position: "relative" }}>
      <SparkleField/>

      <div style={{ textAlign: "center", padding: "20px 16px 0", maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Ganesha - natural image with its own frame, soft-faded edges */}
        <div style={{
          margin: "0 auto",
          width: 180,
          height: 180,
          filter: "drop-shadow(0 0 24px rgba(245,208,103,0.35))",
        }}>
          <img
            src={GANESHA_IMG}
            alt="Lord Ganesha"
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </div>

        <p style={{
          fontSize: 10,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: C.brightGold,
          margin: "12px 0 8px",
          fontFamily: fonts.cinzel,
          fontWeight: 600,
        }}>
          With the blessings of our families
        </p>

        {/* Names side by side - ornate flourish frame */}
        <div style={{
          margin: "16px auto 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          flexWrap: "nowrap",
          position: "relative",
        }}>
          <div style={{ flexShrink: 0, display: "none" }} className="flourish-show">
            <GoldFlourish side="left" size={70}/>
          </div>
          
          <h1 className="gold-text" style={{
            fontFamily: fonts.display,
            fontSize: "clamp(38px, 8vw, 72px)",
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: 2,
            textShadow: `0 4px 20px rgba(245,208,103,0.3)`,
            whiteSpace: "nowrap",
          }}>
            {wedding.groomName}
            <span style={{
              fontFamily: fonts.script,
              fontSize: "0.85em",
              color: C.brightGold,
              margin: "0 0.2em",
              WebkitTextFillColor: C.brightGold,
              display: "inline-block",
            }}> &amp; </span>
            {wedding.brideName}
          </h1>

          <div style={{ flexShrink: 0, display: "none" }} className="flourish-show">
            <GoldFlourish side="right" size={70}/>
          </div>
        </div>

        {/* Flourishes below for smaller screens */}
        <div style={{ margin: "8px 0 6px", display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
          <GoldFlourish side="left" size={50}/>
          <Sparkle size={14}/>
          <GoldFlourish side="right" size={50}/>
        </div>

        <p style={{
          fontFamily: fonts.body,
          fontSize: 16,
          fontStyle: "italic",
          color: C.textPrimary,
          margin: "4px auto 14px",
          maxWidth: 440,
          fontWeight: 500,
        }}>
          Two hearts, one journey — together forever
        </p>

        {/* Couple illustration - compact */}
        <div style={{
          margin: "0 auto 16px",
          maxWidth: 420,
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: -10, left: -10, zIndex: 2 }}><Sparkle size={18} delay={0}/></div>
          <div style={{ position: "absolute", top: -10, right: -10, zIndex: 2 }}><Sparkle size={18} delay={0.6}/></div>
          <div style={{ position: "absolute", bottom: -10, left: -10, zIndex: 2 }}><Sparkle size={18} delay={1.2}/></div>
          <div style={{ position: "absolute", bottom: -10, right: -10, zIndex: 2 }}><Sparkle size={18} delay={1.8}/></div>

          <div style={{
            padding: 6,
            borderRadius: 10,
            background: `linear-gradient(135deg, ${C.brightGold}, ${C.warmGold}, ${C.antiqueGold}, ${C.warmGold}, ${C.brightGold})`,
            backgroundSize: "200% 200%",
            animation: "shimmerText 6s ease infinite",
            boxShadow: `0 0 30px rgba(245,208,103,0.4), 0 8px 30px rgba(0,0,0,0.4)`,
          }}>
            <div style={{
              padding: 3,
              borderRadius: 6,
              background: C.midnight,
            }}>
              <img
                src={COUPLE_IMG}
                alt="Agash & Deepika"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        </div>

        {/* Date card - compact */}
        <div style={{
          margin: "16px auto 0",
          maxWidth: 480,
          padding: "20px 24px",
          background: `linear-gradient(135deg, ${C.deepBurgundy} 0%, ${C.burgundy} 100%)`,
          border: `2px solid ${C.warmGold}`,
          borderRadius: 8,
          position: "relative",
          boxShadow: `0 0 30px rgba(245,208,103,0.25), 0 10px 40px rgba(0,0,0,0.4)`,
        }}>
          <div style={{
            position: "absolute", inset: 6,
            border: `1px solid ${C.brightGold}55`,
            borderRadius: 6, pointerEvents: "none",
          }}/>

          <div style={{ position: "absolute", top: -10, left: -10 }}><Twinkle size={14} delay={0}/></div>
          <div style={{ position: "absolute", top: -10, right: -10 }}><Twinkle size={14} delay={0.5}/></div>
          <div style={{ position: "absolute", bottom: -10, left: -10 }}><Twinkle size={14} delay={1}/></div>
          <div style={{ position: "absolute", bottom: -10, right: -10 }}><Twinkle size={14} delay={1.5}/></div>

          <p style={{
            fontSize: 10,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: C.brightGold,
            margin: "0 0 4px",
            fontFamily: fonts.cinzel,
            fontWeight: 700,
          }}>
            ✦ Save the Date ✦
          </p>

          <div style={{ margin: "10px 0" }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 20,
            }}>
              <div style={{ textAlign: "right" }}>
                <div style={{
                  fontSize: 10, letterSpacing: 4, textTransform: "uppercase",
                  color: C.brightGold, marginBottom: 2, fontFamily: fonts.cinzel, fontWeight: 600,
                }}>Thursday</div>
                <div style={{
                  fontSize: 48, fontWeight: 900, lineHeight: 1,
                  fontFamily: fonts.serif,
                  color: C.warmIvory,
                  textShadow: `0 2px 16px rgba(245,208,103,0.4)`,
                }}>02</div>
              </div>
              <div style={{ width: 1.5, height: 56, background: `linear-gradient(180deg, transparent, ${C.brightGold}, transparent)` }}/>
              <div style={{ textAlign: "left" }}>
                <div style={{
                  fontSize: 10, letterSpacing: 4, textTransform: "uppercase",
                  color: C.brightGold, marginBottom: 2, fontFamily: fonts.cinzel, fontWeight: 600,
                }}>July</div>
                <div style={{
                  fontSize: 48, fontWeight: 900, lineHeight: 1,
                  fontFamily: fonts.serif,
                  color: C.warmIvory,
                  textShadow: `0 2px 16px rgba(245,208,103,0.4)`,
                }}>2026</div>
              </div>
            </div>
          </div>

          <p style={{
            fontFamily: fonts.body,
            fontSize: 16,
            fontStyle: "italic",
            color: C.textPrimary,
            margin: "10px 0 0",
            fontWeight: 600,
          }}>
            Ceremony 8:30 AM <span style={{ color: C.brightGold }}>✦</span> Reception 6:00 PM
          </p>

          <div style={{
            margin: "12px auto 0",
            paddingTop: 12,
            borderTop: `1px solid ${C.brightGold}55`,
            maxWidth: 300,
          }}>
            <p style={{
              fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
              color: C.brightGold, margin: "0 0 4px",
              fontFamily: fonts.cinzel, fontWeight: 600,
            }}>Venue</p>
            <p style={{
              fontFamily: fonts.serif, fontSize: 17, color: C.warmIvory,
              margin: 0, fontWeight: 700,
            }}>
              {wedding.venue.name}
            </p>
            <p style={{
              fontFamily: fonts.body, fontSize: 13, color: C.textMuted,
              margin: "2px 0 0", fontStyle: "italic", fontWeight: 500,
            }}>
              Cumming, Georgia
            </p>
          </div>
        </div>

        <Countdown/>

        {/* RSVP button */}
        <button
          onClick={() => setPage("rsvp")}
          style={{
            background: `linear-gradient(135deg, ${C.brightGold}, ${C.warmGold}, ${C.brightGold})`,
            backgroundSize: "200% auto",
            border: "none",
            color: C.deepBurgundy,
            padding: "16px 48px",
            fontFamily: fonts.cinzel,
            fontSize: 12,
            letterSpacing: 5,
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 4,
            fontWeight: 800,
            transition: `all 0.4s ${ease}`,
            margin: "12px 0 6px",
            boxShadow: `0 4px 20px rgba(245,208,103,0.5), 0 0 0 1px ${C.brightGold}, inset 0 1px 0 rgba(255,255,255,0.5)`,
            animation: "goldGlow 3s ease-in-out infinite",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundPosition = "right center";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundPosition = "left center";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          ✦ Kindly RSVP ✦
        </button>

        <p style={{
          fontSize: 12, letterSpacing: 2, color: C.textMuted, margin: "8px 0 0",
          fontFamily: fonts.body, fontStyle: "italic", fontWeight: 500,
        }}>
          Your presence is our greatest gift
        </p>
      </div>
    </div>
  );
}
