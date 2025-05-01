import { Typography, Box } from "@mui/material";
import { ContactForm } from "~/components/contact-form";

export function ScreamContact() {
  return (
    <>
      <Box sx={{ pb: 20, pt: 20 }}>
        <Typography variant="h2">
          Congratulations on making it to the end…
        </Typography>
        <Typography variant="h1" sx={{ fontSize: "7rem" }}>
          Time for the{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            sequel?
          </Box>
        </Typography>
      </Box>
      <Box sx={{ px: 10 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 300, color: "secondary.main" }}
        >
          Reach out if you want more:
        </Typography>
        <ContactForm />
      </Box>
    </>
  );
}
