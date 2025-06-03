import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ContactForm } from "~/components/contact-form";

export default function ScreamContact({
  stopInterludeRef,
}: {
  stopInterludeRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <>
      <Box sx={{ pb: 20, pt: 56 }}>
        <Box ref={stopInterludeRef} aria-hidden />
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
          Reach out to do some stabbing together:
        </Typography>
        <ContactForm />
      </Box>
    </>
  );
}
