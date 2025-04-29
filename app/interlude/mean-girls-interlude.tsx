import ScrollSyncedVideo from "~/components/scroll-synced-video";
import MGVideo from "../../assets/mean-girls/mean-girls-vid.mp4";
import { Box, Typography } from "@mui/material";

export function MeanGirlsInterlude() {
  return (
    <ScrollSyncedVideo vidPath={MGVideo}>
      <Typography variant="h1" align="center">
        <Box component="span" sx={{ color: "secondary.main" }}>
          However,{" "}
        </Box>
        before that
      </Typography>
      <Box sx={{ height: "50vh", backgroundColor: "transparent" }} />
      <Typography variant="h3" align="center" sx={{ fontWeight: 600 }}>
        *honk honk*
      </Typography>
      <Box sx={{ height: "130vh", backgroundColor: "transparent" }} />
    </ScrollSyncedVideo>
  );
}
