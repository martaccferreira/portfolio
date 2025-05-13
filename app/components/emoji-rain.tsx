import Box from "@mui/material/Box";
import { keyframes } from "@mui/material/styles";

type EmojiRainItem = {
  id: number;
  emoji: string;
  left: number;
  fallDuration: number;
  fallDelay: number;
  startTop: number;
};

type EmojiRainProps = {
  items: EmojiRainItem[];
};

const fall = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(120vh) rotate(360deg);
    opacity: 0;
  }
`;

export function EmojiRain({ items }: EmojiRainProps) {
  return (
    <>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            position: "fixed",
            top: `${item.startTop}%`,
            left: `${item.left}%`,
            fontSize: "2rem",
            animation: `${fall} ${item.fallDuration}s linear ${item.fallDelay}s forwards`,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {item.emoji}
        </Box>
      ))}
    </>
  );
}
