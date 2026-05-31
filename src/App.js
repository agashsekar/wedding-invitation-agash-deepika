import { useState, useEffect } from "react";
import { colors as C } from "./theme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Events from "./pages/Events";
import RSVP from "./pages/RSVP";
import GuestList from "./pages/GuestList";

export default function App() {
  const [page, setPage] = useState("home");
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFadeKey(k => k + 1);
  }, [page]);

  const pages = {
    home: <Home setPage={setPage}/>,
    story: <Story/>,
    events: <Events/>,
    rsvp: <RSVP/>,
    admin: <GuestList/>,
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `
        radial-gradient(ellipse at top, ${C.burgundy} 0%, ${C.deepBurgundy} 40%, ${C.midnight} 100%)
      `,
      color: C.textPrimary,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Sparkle dust background */}
      <div style={{
        position: "fixed", inset: 0, opacity: 0.4, pointerEvents: "none",
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(245,208,103,0.3) 1px, transparent 2px),
          radial-gradient(circle at 75% 30%, rgba(245,208,103,0.25) 1.5px, transparent 2.5px),
          radial-gradient(circle at 40% 70%, rgba(245,208,103,0.3) 1px, transparent 2px),
          radial-gradient(circle at 90% 80%, rgba(245,208,103,0.2) 1px, transparent 2px),
          radial-gradient(circle at 25% 90%, rgba(245,208,103,0.25) 1px, transparent 2px),
          radial-gradient(circle at 60% 15%, rgba(245,208,103,0.3) 0.8px, transparent 1.5px),
          radial-gradient(circle at 10% 50%, rgba(245,208,103,0.2) 0.6px, transparent 1.2px),
          radial-gradient(circle at 95% 55%, rgba(245,208,103,0.3) 1.2px, transparent 2.2px)
        `,
        backgroundSize: "100% 100%",
      }}/>

      {/* Subtle gold dust dots */}
      <div style={{
        position: "fixed", inset: 0, opacity: 0.06, pointerEvents: "none",
        backgroundSize: "60px 60px",
        backgroundImage: `radial-gradient(circle at 30px 30px, ${C.brightGold} 1px, transparent 1.5px)`,
      }}/>

      <Navigation page={page} setPage={setPage}/>

      <div key={fadeKey} style={{
        animation: "fadeInUp 0.6s ease-out both",
        position: "relative",
        zIndex: 1,
      }}>
        {pages[page]}
        <Footer/>
      </div>
    </div>
  );
}
