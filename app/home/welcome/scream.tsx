import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ScreamWelcome() {
  return (
    <Box sx={{ padding: "40px" }} color="primary.contrastText">
      <Typography variant="h3">
        Don't worry, we don’t want to know what anyone’s{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          insides
        </Box>{" "}
        look like here.
      </Typography>
      <Box sx={{ pt: 2 }} />
      <Typography variant="h1" color="primary.contrastText">
        Although... we <i>do</i> look into the insides of{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          Marta Ferreira's
        </Box>{" "}
        projects and her work as a{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          Frontend Engineer
        </Box>{" "}
        so far.
      </Typography>
      <Box sx={{ pt: 2 }} />
      <Typography variant="h3" color="secondary.main">
        Do you think you can make it to the end?
      </Typography>
      <></>
    </Box>
  );
}
