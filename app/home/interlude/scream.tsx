import ScrollSyncedVideo from "~/components/scroll-synced-video";
import SVideo from "assets/scream/scream-vid.mp4";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { OverlapTitle } from "~/components/overlap-title";

export default function ScreamInterlude() {
  const Movies = (
    <OverlapTitle
      fadedTitle="movies"
      mainTitle="websites"
      isSmallScreen={false}
    />
  );

  const Psychos = (
    <OverlapTitle
      fadedTitle="psychos"
      mainTitle="developers"
      isSmallScreen={false}
    />
  );

  return (
    <ScrollSyncedVideo vidPath={SVideo}>
      <Box sx={{ height: "10vh", backgroundColor: "transparent" }} />
      <Typography variant="h2" align="center">
        Now, don't you blame the {Movies}
      </Typography>
      <Box sx={{ height: "50vh", backgroundColor: "transparent" }} />
      <Typography variant="h2" align="center">
        "{Movies} don't create {Psychos}."
      </Typography>
      <Box sx={{ height: "50vh", backgroundColor: "transparent" }} />
      <Typography variant="h2" align="center">
        "{Movies} make {Psychos} more creative."
      </Typography>
      <Box sx={{ height: "50vh", backgroundColor: "transparent" }} />
    </ScrollSyncedVideo>
  );
}
