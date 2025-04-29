import { Box } from "@mui/material";

type Props = {
  mainTitle: string;
  fadedTitle: string;
  isSmallScreen: boolean;
};

export function OverlapTitle({ mainTitle, fadedTitle, isSmallScreen }: Props) {
  return (
    <Box
      position="relative"
      display="inline-block"
      sx={{
        mx: isSmallScreen ? 1 : 2,
        whiteSpace: "nowrap",
      }}
    >
      <Box component="span" sx={{ opacity: 1, position: "relative" }}>
        {mainTitle}
      </Box>
      <Box
        component="span"
        sx={{
          position: "absolute",
          left: isSmallScreen ? -10 : -15,
          top: isSmallScreen ? -20 : -35,
          opacity: 0.5,
          fontSize: isSmallScreen ? "3.5rem" : "5rem",
        }}
      >
        {fadedTitle}
      </Box>
    </Box>
  );
}
