import { useEffect, useRef, useState } from "react";
import type { PropsWithChildren } from "react";
import { Box, LinearProgress, IconButton, Typography } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";

type Props = {
  vidPath: string;
};

export default function ScrollSyncedVideo({
  vidPath,
  children,
}: PropsWithChildren<Props>) {
  const videoRef = useRef(null);
  const triggerRef = useRef(null);
  const [startScrollY, setStartScrollY] = useState(null);
  const [playableHeight, setPlayableHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = triggerRef.current;
      const video = videoRef.current;

      if (!trigger || !video) return;

      const triggerRect = trigger.getBoundingClientRect();

      const isTriggerOutOfView = triggerRect.bottom <= 0;

      if (isTriggerOutOfView && startScrollY === null) {
        setStartScrollY(window.scrollY);
        setPlayableHeight(window.innerHeight * 2);
      }

      if (startScrollY !== null) {
        const delta = window.scrollY - startScrollY;
        const progress = Math.min(Math.max(delta / playableHeight, 0), 1);
        const duration = video.duration || 1;
        video.currentTime = progress * duration;
        setProgress(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startScrollY, playableHeight]);

  return (
    <Box
      sx={{
        minHeight: "275vh",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Trigger point for scroll-based video start */}
      <Box ref={triggerRef} sx={{ height: "auto", py: 1 }} />
      {children}

      {/* Sticky boundary wrapper */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        {/* Relative video container */}
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
