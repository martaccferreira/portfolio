import { Typography, Box } from "@mui/material";
import ChatBubble from "~/components/chat-bubble";
import { ProjectCarousel } from "~/components/project-carousel";

export function MeanGirlsWork() {
  return (
    <>
      <Typography variant="h2" align="center">
        Contributions to the{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          Dev
          <Box component="span" sx={{ fontWeight: 800 }}>
            Book
          </Box>
        </Box>{" "}
      </Typography>
      <Box sx={{ width: "fit-content", m: "auto" }}>
        <ChatBubble
          messages={["she's done some stuff, i guess"]}
          align="left"
          size="normal"
        />
      </Box>
      <ProjectCarousel />
    </>
  );
}
