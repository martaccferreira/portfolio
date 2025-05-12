import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import DevBook from "assets/mean-girls/mean-girls-hero.png";
import DevBookTop from "assets/mean-girls/hero-detail-top.png";
import DevBookBottom from "assets/mean-girls/hero-detail-bottom.png";
import DevBookRight from "assets/mean-girls/hero-detail-right.png";

export function MeanGirlsHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box position="relative" width="100%" minHeight="100vh" overflow="hidden">
      {/* Dev Book title image */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: isSmallScreen
            ? "translate(-60%, -50%)"
            : "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <img
          alt="Main DevBook"
          src={DevBook}
          style={{ width: isSmallScreen ? "130%" : "100%" }}
        />
      </Box>

      {/* Background, i.e., black scribbles */}
      <Grid
        container
        direction="row"
        alignItems="stretch"
        justifyContent="space-between"
        sx={{ height: "100vh", flexWrap: "nowrap", overflow: "hidden" }}
      >
        {/* Left column with top and bottom scribbles */}
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100%", flex: "0 0 auto" }}
        >
          <Box sx={{ height: "45vh" }}>
            <img alt="DevBookTop" src={DevBookTop} style={{ height: "100%" }} />
          </Box>
          <Box sx={{ height: "45vh" }}>
            <img
              alt="DevBookBottom"
              src={DevBookBottom}
              style={{ height: "100%" }}
            />
          </Box>
        </Grid>

        {/* right side scribbles */}
        {!isSmallScreen && (
          <Grid
            sx={{
              flex: "0 0 auto",
              height: "100%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              alt="DevBookRight"
              src={DevBookRight}
              style={{
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
