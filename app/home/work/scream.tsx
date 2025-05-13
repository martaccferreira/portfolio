import { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ProjectCarousel } from "~/components/project-carousel";
import { projects } from "~/components/projects";

export default function ScreamWork() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [4, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);

  const [showStaticTitle, setShowStaticTitle] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowStaticTitle(v >= 0.6);
  });

  const knives = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    rotation: Math.random() * 360,
  }));

  return (
    <Box ref={ref} sx={{ position: "relative" }}>
      <Box
        ref={containerRef}
        sx={{ position: "relative", height: "200vh", overflow: "hidden" }}
      >
        {inView && !showStaticTitle && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              scale,
              opacity,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "8vh",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Stabs at development
            </Typography>
          </motion.div>
        )}

        {/* Knives overlay */}
        {inView && !showStaticTitle && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: 999,
            }}
          >
            {knives.map((knife) => (
              <Typography
                key={knife.id}
                sx={{
                  position: "absolute",
                  top: `${knife.top}%`,
                  left: `${knife.left}%`,
                  transform: `rotate(-45deg)`,
                  fontSize: "2rem",
                }}
              >
                🔪
              </Typography>
            ))}
          </Box>
        )}

        {/* Static title shown after scroll */}
        <Box
          sx={{
            height: "163vh",
            backgroundColor: "transparent",
          }}
        />
        <Box
          sx={{
            pt: 2,
            visibility: showStaticTitle ? "visible" : "hidden",
            opacity: showStaticTitle ? 1 : 0,
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{ fontSize: "8vh", fontWeight: "bold" }}
          >
            Stabs at development
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h2"
        align="center"
        color="secondary.main"
        sx={{ mt: 2, fontSize: "1.5rem" }}
      >
        So she's a lost cause at running. How about stabbing?
      </Typography>
      <ProjectCarousel projects={projects} />
    </Box>
  );
}
