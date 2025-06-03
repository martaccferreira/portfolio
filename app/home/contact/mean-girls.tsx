import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ContactForm } from "~/components/contact-form";

export default function MeanGirlsContact({
  stopInterludeRef,
}: {
  stopInterludeRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <>
      <Box sx={{ pb: 20, pt: 56 }}>
        <Box ref={stopInterludeRef} aria-hidden />
        <Typography variant="h3">
          I've heard she has{" "}
          <Box component="span" sx={{ fontStyle: "italic" }}>
            cemented
          </Box>{" "}
          herself with the{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            computer nerds
          </Box>{" "}
          at lunch. So there's no way she's ever joining The Plastics.
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "7rem" }}>
          But, I don’t know, maybe you're{" "}
          <Box
            component="span"
            sx={{ color: "secondary.main", fontWeight: 600 }}
          >
            into that?
          </Box>
        </Typography>
      </Box>
      <Box sx={{ px: 10 }}>
        <Typography variant="h4" color="primary.main">
          Reach out to sit at the same table:
        </Typography>
        <ContactForm />
      </Box>
    </>
  );
}
