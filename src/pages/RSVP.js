import { useState } from "react";
import { colors as C, fonts, ease } from "../theme";
import { saveRsvp } from "../lib/api";
import Divider from "../components/decorations/Divider";
import Lamp from "../components/decorations/Lamp";
import { Sparkle } from "../components/decorations/Sparkle";

const inputBase = {
  width: "100%",
  padding: "14px 16px",
  boxSizing: "border-box",
  border: `1.5px solid ${C.brightGold}66`,
  borderRadius: 4,
  fontFamily: fonts.body,
  fontSize: 17,
  color: C.warmIvory,
  background: `${C.midnight}cc`,
  outline: "none",
  transition: `all 0.3s ${ease}`,
  fontWeight: 500,
};

const labelStyle = {
  display: "block",
  fontSize: 11,
  letterSpacing: 4,
  textTransform: "uppercase",
  color: C.brightGold,
  marginBottom: 10,
  fontWeight: 700,
  fontFamily: fonts.cinzel,
};

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      style={{ ...inputBase, ...(props.style || {}) }}
      onFocus={e => {
        e.target.style.borderColor = C.brightGold;
        e.target.style.boxShadow = `0 0 0 3px ${C.brightGold}30`;
      }}
      onBlur={e => {
        e.target.style.borderColor = `${C.brightGold}66`;
        e.target.style.boxShadow = "none";
      }}
    />
  );
}

function CheckCard({ checked, onClick, label, time }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "16px 20px",
        border: `2px solid ${checked ? C.brightGold : C.brightGold + "44"}`,
        borderRadius: 6,
        background: checked ? `${C.brightGold}15` : `${C.midnight}aa`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 16,
        transition: `all 0.3s ${ease}`,
        marginBottom: 12,
        boxShadow: checked ? `0 0 16px rgba(245,208,103,0.25)` : "none",
      }}
    >
      <div style={{
        width: 24, height: 24, borderRadius: 4,
        border: `2px solid ${checked ? C.brightGold : C.brightGold + "55"}`,
        background: checked ? C.brightGold : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transition: `all 0.3s ${ease}`,
      }}>
        {checked && (
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M3 7L6 10L11 4" stroke={C.deepBurgundy} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: fonts.serif, fontSize: 18, color: C.warmIvory, fontWeight: 700 }}>{label}</div>
        {time && <div style={{ fontFamily: fonts.body, fontSize: 14, color: C.champagne, fontStyle: "italic", marginTop: 4, fontWeight: 500 }}>{time}</div>}
      </div>
    </div>
  );
}

export default function RSVP() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", guests: "1",
    attendingCeremony: true, attendingReception: true,
    dietaryNeeds: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.name.trim()) return;
    setLoading(true);
    setError("");
    try {
      await saveRsvp(form);
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "44px 20px 60px", maxWidth: 620, margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <Lamp size={32} animated/>
        <h2 className="gold-text" style={{
          fontFamily: fonts.script, fontSize: 64,
          margin: "16px 0 0", fontWeight: 400, lineHeight: 1.1,
          textShadow: `0 4px 16px rgba(245,208,103,0.3)`,
        }}>
          Kindly Respond
        </h2>
        <p style={{
          fontFamily: fonts.cinzel, fontSize: 11, letterSpacing: 6,
          textTransform: "uppercase", color: C.brightGold, margin: "10px 0 0",
          fontWeight: 600,
        }}>✦ Please reply by June 15, 2026 ✦</p>
        <Divider/>
      </div>

      {submitted ? (
        <div style={{
          marginTop: 28,
          background: `linear-gradient(135deg, ${C.deepBurgundy}, ${C.burgundy})`,
          border: `2px solid ${C.brightGold}`,
          borderRadius: 8,
          padding: "56px 32px",
          textAlign: "center",
          position: "relative",
          boxShadow: `0 0 40px rgba(245,208,103,0.3), 0 10px 40px rgba(0,0,0,0.5)`,
        }}>
          <div style={{
            position: "absolute", inset: 8,
            border: `1px solid ${C.brightGold}55`,
            borderRadius: 6, pointerEvents: "none",
          }}/>
          <Lamp size={48} animated/>
          <h3 className="gold-text" style={{
            fontFamily: fonts.script, fontSize: 52,
            margin: "16px 0 12px", fontWeight: 400,
            textShadow: `0 4px 16px rgba(245,208,103,0.3)`,
          }}>
            Thank you!
          </h3>
          <p style={{
            fontFamily: fonts.body, fontSize: 18, color: C.warmIvory,
            fontWeight: 500, fontStyle: "italic", lineHeight: 1.6, margin: 0,
            maxWidth: 400, marginLeft: "auto", marginRight: "auto",
          }}>
            Your response has been received. We can't wait to celebrate this special day with you.
          </p>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 12 }}>
            <Sparkle size={14} delay={0}/>
            <Sparkle size={18} delay={0.5}/>
            <Sparkle size={14} delay={1}/>
          </div>
          <p style={{
            fontFamily: fonts.script, fontSize: 32, color: C.brightGold,
            margin: "20px 0 0",
            textShadow: `0 2px 12px rgba(245,208,103,0.4)`,
          }}>
            With love, A &amp; D
          </p>
        </div>
      ) : (
        <div style={{
          marginTop: 28,
          background: `linear-gradient(135deg, ${C.deepBurgundy}, ${C.burgundy})`,
          border: `2px solid ${C.warmGold}`,
          borderRadius: 8,
          padding: "36px 28px",
          boxShadow: `0 0 20px rgba(245,208,103,0.2), 0 10px 30px rgba(0,0,0,0.4)`,
          position: "relative",
        }}>
          <div style={{
            position: "absolute", inset: 8,
            border: `1px solid ${C.brightGold}55`,
            borderRadius: 6, pointerEvents: "none",
          }}/>

          <Field label="Your Name *">
            <Input
              type="text" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Full name"
            />
          </Field>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Email">
              <Input
                type="email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
              />
            </Field>
            <Field label="Phone">
              <Input
                type="tel" value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone number"
              />
            </Field>
          </div>

          <Field label="Number of Guests">
            <select
              value={form.guests}
              onChange={e => setForm({ ...form, guests: e.target.value })}
              style={inputBase}
            >
              {[1,2,3,4,5,6].map(n => <option key={n} value={n} style={{ background: C.deepBurgundy }}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
            </select>
          </Field>

          <Field label="I Will Be Attending">
            <CheckCard
              checked={form.attendingCeremony}
              onClick={() => setForm({ ...form, attendingCeremony: !form.attendingCeremony })}
              label="🪔 Wedding Ceremony"
              time="July 2, 2026 · 8:30 AM"
            />
            <CheckCard
              checked={form.attendingReception}
              onClick={() => setForm({ ...form, attendingReception: !form.attendingReception })}
              label="✨ Reception"
              time="July 2, 2026 · 6:00 PM"
            />
          </Field>

          <Field label="A Message for the Couple">
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Wishes and blessings..."
              rows={3}
              style={{ ...inputBase, resize: "vertical", fontFamily: fonts.body }}
              onFocus={e => {
                e.target.style.borderColor = C.brightGold;
                e.target.style.boxShadow = `0 0 0 3px ${C.brightGold}30`;
              }}
              onBlur={e => {
                e.target.style.borderColor = `${C.brightGold}66`;
                e.target.style.boxShadow = "none";
              }}
            />
          </Field>

          {error && (
            <p style={{
              color: C.coral, fontSize: 14, fontFamily: fonts.body,
              fontStyle: "italic", marginBottom: 12, textAlign: "center",
              fontWeight: 600,
            }}>
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading || !form.name.trim()}
            style={{
              width: "100%",
              background: form.name.trim()
                ? `linear-gradient(135deg, ${C.brightGold}, ${C.warmGold}, ${C.brightGold})`
                : "#5a4a3a",
              backgroundSize: "200% auto",
              color: form.name.trim() ? C.deepBurgundy : "#aaa",
              border: "none",
              padding: "18px 0",
              fontFamily: fonts.cinzel,
              fontSize: 12,
              letterSpacing: 5,
              textTransform: "uppercase",
              cursor: form.name.trim() ? "pointer" : "default",
              borderRadius: 4,
              fontWeight: 800,
              boxShadow: form.name.trim() ? `0 4px 20px rgba(245,208,103,0.5)` : "none",
              transition: `all 0.3s ${ease}`,
              marginTop: 12,
              animation: form.name.trim() ? "goldGlow 3s ease-in-out infinite" : "none",
            }}
          >
            {loading ? "✦ Sending... ✦" : "✦ Send RSVP ✦"}
          </button>
        </div>
      )}
    </div>
  );
}
