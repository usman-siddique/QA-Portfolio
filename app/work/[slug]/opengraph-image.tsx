import { ImageResponse } from "next/og";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = experience.find((e) => e.slug === slug);

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
          Case Study · {profile.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{ display: "flex", fontSize: 60, fontWeight: 600, lineHeight: 1.15 }}
          >
            {item ? `${item.title} · ${item.company}` : "Case Study"}
          </div>
          {item ? (
            <div style={{ display: "flex", fontSize: 26, color: "#b3b8bf" }}>
              {item.domain.slice(0, 3).join("  ·  ")}
            </div>
          ) : null}
        </div>

        {item && item.metrics.length > 0 ? (
          <div style={{ display: "flex", gap: 40, fontSize: 20, color: "#9a9fa6" }}>
            {item.metrics.slice(0, 3).map((m) => (
              <span key={m.label}>
                {m.value} {m.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    ),
    { ...size },
  );
}
