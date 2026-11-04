import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141416",
          borderRadius: "8px",
          border: "1px solid #3E3E48",
          color: "#FAF6EE",
          fontFamily: "Georgia, serif",
          fontSize: 22,
          fontWeight: 700,
          fontStyle: "italic",
          position: "relative",
        }}
      >
        <span>D</span>
        <div
          style={{
            position: "absolute",
            top: 4,
            right: 4,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#C96570",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
