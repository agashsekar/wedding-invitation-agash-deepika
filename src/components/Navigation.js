import { colors as C, fonts, ease } from "../theme";

const tabs = [
  { key: "home", label: "Home" },
  { key: "story", label: "Our Story" },
  { key: "events", label: "Events" },
  { key: "rsvp", label: "RSVP" },
  { key: "admin", label: "Guests" },
];

export default function Navigation({ page, setPage }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: 4,
      padding: "16px 8px",
      background: `linear-gradient(180deg, ${C.midnight} 0%, ${C.deepBurgundy} 100%)`,
      borderBottom: `2px solid ${C.warmGold}`,
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: `0 4px 20px rgba(0,0,0,0.5), 0 0 30px rgba(245,208,103,0.15)`,
      flexWrap: "wrap",
    }}>
      {tabs.map(t => {
        const active = page === t.key;
        return (
          <button
            key={t.key}
            onClick={() => setPage(t.key)}
            style={{
              background: active ? `linear-gradient(135deg, ${C.warmGold}, ${C.brightGold})` : "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px 18px",
              fontFamily: fonts.cinzel,
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: active ? C.deepBurgundy : C.champagne,
              fontWeight: active ? 700 : 500,
              transition: `all 0.4s ${ease}`,
              borderRadius: 3,
              boxShadow: active ? `0 4px 12px rgba(245,208,103,0.4)` : "none",
            }}
          >
            {t.label}
          </button>
        );
      })}
    </nav>
  );
}
