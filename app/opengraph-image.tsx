import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0b0d0f",
          color: "#f3f1ec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#e3a542",
          }}
        >
          {profile.location} · SQA Engineer
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{ display: "flex", fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#b3b8bf" }}>
            Testing software end-to-end — manual, API, performance, and
            automation with Playwright &amp; Python.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 20,
            color: "#9a9fa6",
          }}
        >
          <span>900+ Bugs Reported</span>
          <span>20% Regression Effort Cut</span>
          <span>3 Product Domains</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
