"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxSlide {
  src: string;
  title?: string;
  description?: string;
}

interface LightboxModalProps {
  open: boolean;
  close: () => void;
  slides: LightboxSlide[];
  index?: number;
}

export default function LightboxModal({
  open,
  close,
  slides,
  index = 0,
}: LightboxModalProps) {
  if (!open) return null;

  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      styles={{
        container: { backgroundColor: "rgba(18, 18, 20, 0.94)" },
      }}
    />
  );
}
