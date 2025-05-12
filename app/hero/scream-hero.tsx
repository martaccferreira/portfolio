import { Box, Typography, useMediaQuery } from "@mui/material";
import ScreamHeroImage from "assets/scream/scream-hero.jpg";
import { OverlapTitle } from "~/components/overlap-title";

export function ScreamHero() {
  const isSmallScreen = useMediaQuery("(max-width:865px)");
  const isMobile = useMediaQuery("(max-width:650px)");

  return (
    <div>
      <Box position="relative" width="100%" minHeight="100vh" overflow="hidden">
        {/* Centered Text on top of image */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              whiteSpace: isMobile ? "normal" : "nowrap",
              display: "inline-flex",
              flexWrap: isMobile ? "wrap" : "nowrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              fontSize: isSmallScreen ? "2rem" : "3rem",
              lineHeight: 1.2,
            }}
          >
            "Do you like{" "}
            <OverlapTitle
              mainTitle="portfolio websites"
              fadedTitle="scary movies"
              isSmallScreen={isSmallScreen}
            />
            ?"
          </Typography>
        </Box>

        {/* Image */}
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={ScreamHeroImage}
            alt="Scream Hero"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: isSmallScreen ? "675px" : "100vw",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </div>
  );
}
