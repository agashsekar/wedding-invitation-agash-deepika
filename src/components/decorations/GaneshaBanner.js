import { useRef, useEffect } from "react";
import { GANESHA_IMG } from "../../assets";

// Draws the decorative frame (sunburst + gold rings + stars) on canvas
// and overlays the Ganesha image in the center
export default function GaneshaBanner({ size = 300 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // High-DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const W = size, H = size;
    const cx = W / 2, cy = H / 2;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Scale factors based on size (script tuned for ~300)
      const R = size * 0.46;        // outer ring radius
      const innerRing = R - size * 0.025;
      const rayInner = R + size * 0.02;
      const rayOuter = R + size * 0.06;

      // 1. Sunburst rays
      ctx.strokeStyle = "rgba(245, 208, 103, 0.55)";
      ctx.lineWidth = 1.5;
      const totalRays = 24;
      for (let i = 0; i < totalRays; i++) {
        const angle = (i * 2 * Math.PI) / totalRays;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * rayInner, cy + Math.sin(angle) * rayInner);
        ctx.lineTo(cx + Math.cos(angle) * rayOuter, cy + Math.sin(angle) * rayOuter);
        ctx.stroke();
      }

      // 2. Outer thick gold ring
      ctx.strokeStyle = "#f5d067";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 2 * Math.PI);
      ctx.stroke();

      // 3. Inner thin ring
      ctx.strokeStyle = "#d4af37";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, innerRing, 0, 2 * Math.PI);
      ctx.stroke();

      // 4. Diamond star accents at cardinal points
      const starAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
      ctx.fillStyle = "#f5d067";
      const sg = size * 0.025;
      starAngles.forEach(angle => {
        const sx = cx + Math.cos(angle) * R;
        const sy = cy + Math.sin(angle) * R;
        ctx.beginPath();
        ctx.moveTo(sx, sy - sg);
        ctx.lineTo(sx + sg * 0.5, sy);
        ctx.lineTo(sx, sy + sg);
        ctx.lineTo(sx - sg * 0.5, sy);
        ctx.closePath();
        ctx.fill();
      });
    }

    draw();

    // 5. Overlay Ganesha image
    const ganesha = new Image();
    ganesha.onload = () => {
      const imgSize = size * 0.72;
      const x = cx - imgSize / 2;
      const y = cy - imgSize / 2 + size * 0.02;
      ctx.drawImage(ganesha, x, y, imgSize, imgSize);
    };
    ganesha.src = GANESHA_IMG;
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: size,
        height: size,
        display: "block",
        margin: "0 auto",
        filter: "drop-shadow(0 0 24px rgba(245,208,103,0.4))",
      }}
    />
  );
}
