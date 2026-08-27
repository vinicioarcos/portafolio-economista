import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vinicio Arcos | Economista, investigador y científico de datos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #083838 0%, #0d5a5a 100%)",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#d4a574" }}>
          Economía · Datos · Investigación · Software
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, color: "#ffffff", marginTop: 28 }}>Vinicio Arcos</div>
        <div style={{ fontSize: 34, color: "#e2e8f0", marginTop: 18 }}>
          Economista · MSc. en Economía del Desarrollo
        </div>
      </div>
    ),
    { ...size }
  );
}
