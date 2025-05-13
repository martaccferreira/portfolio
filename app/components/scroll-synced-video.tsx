import { useRef, useState, useLayoutEffect } from "react";
import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PauseIcon from "@mui/icons-material/Pause";
import { useScroll, useMotionValueEvent } from "framer-motion";

type Props = {
  vidPath: string;
};

export default function ScrollSyncedVideo({
  vidPath,
  children,
}: PropsWithChildren<Props>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const [triggerOffsetY, setTriggerOffsetY] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const { scrollY } = useScroll();

  useLayoutEffect(() => {
    const trigger = triggerRef.current;
    if (trigger) {
      const top = trigger.getBoundingClientRect().top + window.scrollY;
      setTriggerOffsetY(top);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const video = videoRef.current;
    if (!video || triggerOffsetY === null) return;

    const playableHeight = window.innerHeight * 2;
    const delta = latest - triggerOffsetY;
    const clamped = Math.min(Math.max(delta / playableHeight, 0), 1);
    const duration = video.duration || 1;

    video.currentTime = clamped * duration;
    setProgress(clamped * 100);
  });

  return (
    <Box sx={{ minHeight: "275vh", position: "relative", width: "100%" }}>
      <Box ref={triggerRef} sx={{ height: "auto", py: 1 }} />
      {children}

      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            position: "relative",
            mx: 2,
            maxHeight: "75vh",
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "#333",
            boxShadow: 3,
            md: {
              mx: 4,
              borderRadius: 3,
            },
            lg: {
              mx: "auto",
              maxWidth: "64rem",
            },
          }}
        >
          <Box
            sx={{
              top: 0,
              width: "100%",
              backgroundColor: "#222",
              py: 1,
              px: 2,
              display: "flex",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <IconButton disabled sx={{ color: "white", p: 0 }}>
              <PauseIcon sx={{ color: "primary.contrastText" }} />
            </IconButton>
            <Typography sx={{ mx: 2, color: "primary.contrastText" }}>
              Keep Scrolling to Play
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 6,
                  borderRadius: 5,
                }}
              />
            </Box>
          </Box>
          <video
            ref={videoRef}
            src={vidPath}
            style={{
              width: "105%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-1%)",
            }}
            muted
            playsInline
            preload="auto"
          />
        </Box>
      </Box>
    </Box>
  );
}
