import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { characterSprites } from "assets/sprites";
import { CharacterContext } from "~/theme/character-wrapper";

interface ChatBubbleProps {
  messages: string[];
  align: "left" | "right";
  size?: "normal" | "large";
  animate?: boolean;
}

export default function ChatBubble({
  messages,
  align,
  size = "large",
  animate = false,
}: ChatBubbleProps) {
  const { characterName } = useContext(CharacterContext);
  const avatarSrc = characterSprites[characterName];

  const isLeft = align === "left";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const initiallyRevealed = animate ? 0 : messages.length;
  const [revealedCount, setRevealedCount] = useState(initiallyRevealed);

  useEffect(() => {
    if (inView && revealedCount < messages.length) {
      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [inView, revealedCount, messages.length]);

  const avatarSize = size === "large" ? 86 : 52;
  const messageVariant = size === "large" ? "h5" : "body1";
  const shrinkFactor = size === "large" ? 1 : 0.75;

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        alignItems: "flex-end",
        gap: 2.5,
        mb: 4,
        maxWidth: "100%",
      }}
    >
      <Avatar
        src={avatarSrc}
        alt={characterName}
        sx={{ width: avatarSize, height: avatarSize }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isLeft ? "flex-start" : "flex-end",
          maxWidth: "100%",

          gap: 1.5 * shrinkFactor,
        }}
      >
        <Typography
          variant="body1"
          color="secondary.main"
          sx={{ fontWeight: 800 }}
        >
          {characterName}
        </Typography>

        {messages.slice(0, revealedCount).map((message, index) => {
          const isLast = index === revealedCount - 1;
          const Container = animate ? motion.div : "div";

          return (
            <Container
              key={index}
              {...(animate && {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: index * 0.1 },
              })}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  px: 3 * shrinkFactor,
                  py: 2 * shrinkFactor,
                  maxWidth: "100%",
                  backgroundColor: "primary.main",
                  borderRadius: 3,
                  borderBottomLeftRadius: isLeft && isLast ? 0 : "12px",
                  borderBottomRightRadius: isLeft || !isLast ? "12px" : 0,
                }}
              >
                <Typography variant={messageVariant}>{message}</Typography>
              </Paper>
            </Container>
          );
        })}
      </Box>
    </Box>
  );
}
