import { ImageResponse } from "next/og";

export const alt = "Hynet Soluções em Telecom: internet de fibra óptica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cartão de compartilhamento só com texto e as cores da direção A.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0c2b33",
          color: "#f4f7f6",
        }}
      >
        <div style={{ fontSize: 140, fontWeight: 800, letterSpacing: -4 }}>Hynet</div>
        <div style={{ height: 8, width: 360, background: "#f2a516", margin: "24px 0" }} />
        <div style={{ fontSize: 56, maxWidth: 900, lineHeight: 1.15 }}>
          Internet de fibra de verdade na sua casa
        </div>
      </div>
    ),
    size,
  );
}
