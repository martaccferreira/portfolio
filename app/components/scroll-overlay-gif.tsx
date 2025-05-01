import { useEffect, useState } from "react";
import { Box } from "@mui/material";

type ScrollOverlayGIFProps = {
  gifSrc: string;
  startRef: React.RefObject<HTMLElement | null> | null;
  endRef: React.RefObject<HTMLElement | null> | null;
};

export default function ScrollOverlayGIF({
  gifSrc,
  startRef,
  endRef,
}: ScrollOverlayGIFProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!startRef || !endRef) return;

      const start = startRef.current;
      const end = endRef.current;

      if (!start || !end) return;

      const startY = start.getBoundingClientRect().top + window.scrollY;
      const endY = end.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY + window.innerHeight / 2;

      setVisible(scrollY >= startY && scrollY < endY);
    };

    handleScroll(); // check on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startRef, endRef]);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        backgroundImage: `url(${gifSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1300, // above all UI
        pointerEvents: "none",
      }}
    />
  );
}
