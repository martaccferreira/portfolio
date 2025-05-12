import { Box, Typography } from "@mui/material";

export function MeanGirlsWelcome() {
  return (
    <Box sx={{ padding: "40px" }}>
      <Typography variant="h3">
        Don't worry, we don't actually trash anyone here.
      </Typography>
      <Box sx={{ pt: 2 }} />
      <Typography variant="h1">
        Well… maybe we <i>do</i> roast a little of{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          Marta
          <Box component="span" sx={{ fontWeight: 800 }}>
            Ferreira
          </Box>
          's
        </Box>{" "}
        code and her work as a{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          <Box component="span" sx={{ fontWeight: 800 }}>
            Frontend
          </Box>
          Engineer
        </Box>{" "}
        so far.
      </Typography>
      <Box sx={{ pt: 2 }} />
      <Typography variant="h3">But who cares, right?</Typography>
      <></>
    </Box>
  );
}
