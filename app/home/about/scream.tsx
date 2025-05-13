import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChatBubble from "~/components/chat-bubble";
import { AboutGrid } from "~/components/about-grid";
import { SkillCarousels } from "~/components/skill-carousel";

export default function ScreamAbout() {
  return (
    <>
      <ChatBubble
        messages={[
          "Did you know?",
          "There are rules to succesfully surviving a horror movie. For example, you may not survive if you drink or do drugs.",
          "If you're allowed to live...it depends on who you are, you see? So we should get to know our target first.",
        ]}
        align="left"
        animate
      />
      <Box sx={{ padding: 21 }} aria-hidden="true" />
      <Typography
        variant="h1"
        color="primary.main"
        align="center"
        sx={{ fontSize: "2.5rem" }}
      >
        About Marta Ferreira
      </Typography>
      <Typography
        variant="h6"
        color="primary.main"
        align="center"
        sx={{ fontStyle: "italic" }}
      >
        a collection of things she has said
      </Typography>
      <Box sx={{ padding: 2 }} aria-hidden="true" />
      <AboutGrid />
      <SkillCarousels />
      <Box sx={{ padding: 21 }} aria-hidden="true" />
      <ChatBubble
        messages={[
          "Hm.",
          "There's potential.",
          "If only she could actually run maybe she’d have a decent chance of surviving.",
        ]}
        align="right"
        animate
      />
    </>
  );
}
