import { useState } from "react";
import { colors as C, fonts, ease } from "../theme";
import { wedding } from "../config";
import { loadRsvps } from "../lib/api";
import Divider from "../components/decorations/Divider";

export default function GuestList() {
  const [pass, setPass] = useState("");
  const [authed, setAuthed] = useState(false);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const refresh = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await loadRsvps();
      setList(data);
    } catch (err) {
      setError("Could not load RSVPs");
    }
    setLoading(false);
  };

  const handleLogin = () => {
    if (pass === wedding.adminPassword) {
      setAuthed(true);
      refresh();
    } else {
      setError("Incorrect password");
    }
  };

  const stats = {
    total: list.length,
    guests: list.reduce((s, r) => s + parseInt(r.guests || 1), 0),
    ceremony: list.filter(r => r.attendingCeremony).reduce((s, r) => s + parseInt(r.guests || 1), 0),
    reception: list.filter(r => r.attendingReception).reduce((s, r) => s + parseInt(r.guests || 1), 0),
  };

  return (
    <div style={{ padding: "44px 20px 60px", maxWidth: 760, margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2 className="gold-text" style={{
          fontFamily: fonts.script, fontSize: 56,
          margin: 0, fontWeight: 400, lineHeight: 1.1,
          textShadow: `0 4px 16px rgba(245,208,103,0.3)`,
        }}>
          Guest List
        </h2>
        <p style={{
          fontFamily: fonts.cinzel, fontSize: 11, letterSpacing: 6,
          textTransform: "uppercase", color: C.brightGold, margin: "10px 0 0",
          fontWeight: 600,
        }}>✦ Private · Admin Only ✦</p>
        <Divider/>
      </div>

      {!authed ? (
        <div style={{
          marginTop: 28, maxWidth: 380, margin: "28px auto 0",
          background: `linear-gradient(135deg, ${C.deepBurgundy}, ${C.burgundy})`,
          border: `2px solid ${C.warmGold}`,
          borderRadius: 8, padding: "36px 28px", textAlign: "center",
          boxShadow: `0 0 20px rgba(245,208,103,0.2)`,
          position: "relative",
        }}>
          <div style={{
            position: "absolute", inset: 8,
            border: `1px solid ${C.brightGold}55`,
            borderRadius: 6, pointerEvents: "none",
          }}/>
          <p style={{
            fontFamily: fonts.body, fontSize: 16, color: C.warmIvory,
            marginBottom: 18, fontStyle: "italic", fontWeight: 500,
          }}>
            Enter password to view RSVPs
          </p>
          <input
            type="password" value={pass}
            onChange={e => setPass(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            placeholder="Password"
            style={{
              width: "100%", padding: "13px 16px", boxSizing: "border-box",
              border: `1.5px solid ${C.brightGold}66`, borderRadius: 4,
              fontFamily: fonts.body, fontSize: 17, color: C.warmIvory,
              textAlign: "center", marginBottom: 16, background: `${C.midnight}cc`,
              fontWeight: 500, outline: "none",
            }}
          />
          {error && (
            <p style={{ color: C.coral, fontSize: 13, margin: "0 0 12px", fontWeight: 600 }}>{error}</p>
          )}
          <button
            onClick={handleLogin}
            style={{
              background: `linear-gradient(135deg, ${C.brightGold}, ${C.warmGold})`,
              color: C.deepBurgundy, border: "none",
              padding: "13px 40px", fontFamily: fonts.cinzel, fontSize: 11,
              letterSpacing: 4, textTransform: "uppercase", cursor: "pointer",
              borderRadius: 4, fontWeight: 800,
              boxShadow: `0 4px 16px rgba(245,208,103,0.4)`,
            }}
          >
            ✦ View ✦
          </button>
        </div>
      ) : (
        <div style={{ marginTop: 28 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 22,
          }}>
            {[
              { v: stats.total, l: "RSVPs" },
              { v: stats.guests, l: "Guests" },
              { v: stats.ceremony, l: "Ceremony" },
              { v: stats.reception, l: "Reception" },
            ].map((s, i) => (
              <div key={i} style={{
                background: `linear-gradient(135deg, ${C.deepBurgundy}, ${C.burgundy})`,
                border: `1.5px solid ${C.brightGold}`,
                borderRadius: 6, padding: "16px 8px", textAlign: "center",
                boxShadow: `0 0 12px rgba(245,208,103,0.15)`,
              }}>
                <div style={{
                  fontFamily: fonts.serif, fontSize: 32, fontWeight: 800,
                  color: C.brightGold,
                  textShadow: `0 2px 8px rgba(245,208,103,0.3)`,
                }}>{s.v}</div>
                <div style={{
                  fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                  color: C.champagne, fontFamily: fonts.cinzel, marginTop: 6,
                  fontWeight: 600,
                }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "right", marginBottom: 14 }}>
            <button
              onClick={refresh}
              disabled={loading}
              style={{
                background: "transparent", border: `1.5px solid ${C.brightGold}`,
                color: C.brightGold, padding: "8px 18px",
                fontFamily: fonts.cinzel, fontSize: 10, letterSpacing: 2,
                textTransform: "uppercase", cursor: "pointer", borderRadius: 4,
                fontWeight: 700,
              }}
            >
              {loading ? "Loading…" : "↻ Refresh"}
            </button>
          </div>

          {list.length === 0 ? (
            <p style={{
              textAlign: "center", fontFamily: fonts.body, fontSize: 17,
              color: C.textMuted, fontStyle: "italic", padding: 40,
              fontWeight: 500,
            }}>
              No RSVPs yet
            </p>
          ) : (
            list.map(r => (
              <div key={r.id} style={{
                background: `linear-gradient(135deg, ${C.deepBurgundy}cc, ${C.burgundy}cc)`,
                border: `1px solid ${C.brightGold}55`,
                borderRadius: 6, padding: "16px 20px", marginBottom: 10,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h4 style={{
                    fontFamily: fonts.serif, fontSize: 20, fontWeight: 700,
                    color: C.warmIvory, margin: 0,
                  }}>{r.name}</h4>
                  <span style={{ fontSize: 12, color: C.champagne, fontFamily: fonts.body, fontStyle: "italic", fontWeight: 500 }}>
                    {r.guests} {r.guests === "1" ? "guest" : "guests"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                  {r.attendingCeremony && (
                    <span style={{
                      fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase",
                      background: `${C.brightGold}22`, color: C.brightGold,
                      padding: "4px 10px", borderRadius: 3, fontFamily: fonts.cinzel,
                      fontWeight: 700,
                      border: `1px solid ${C.brightGold}55`,
                    }}>🪔 Ceremony</span>
                  )}
                  {r.attendingReception && (
                    <span style={{
                      fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase",
                      background: `${C.dustyRose}22`, color: C.dustyRose,
                      padding: "4px 10px", borderRadius: 3, fontFamily: fonts.cinzel,
                      fontWeight: 700,
                      border: `1px solid ${C.dustyRose}55`,
                    }}>✨ Reception</span>
                  )}
                </div>
                {(r.email || r.phone) && (
                  <p style={{ fontSize: 13, color: C.textMuted, margin: "8px 0 0", fontFamily: fonts.body, fontWeight: 500 }}>
                    {[r.email, r.phone].filter(Boolean).join(" · ")}
                  </p>
                )}
                {r.message && (
                  <p style={{
                    fontFamily: fonts.body, fontSize: 15, fontStyle: "italic",
                    color: C.warmIvory, margin: "8px 0 0", lineHeight: 1.5,
                    fontWeight: 500,
                  }}>
                    "{r.message}"
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
