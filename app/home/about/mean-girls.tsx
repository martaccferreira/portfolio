import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChatBubble from "~/components/chat-bubble";
import { AboutGrid } from "~/components/about-grid";
import { SkillCarousels } from "~/components/skill-carousel";

export default function MeanGirlsAbout() {
  return (
    <>
      <ChatBubble
        messages={[
          "All set?",
          "Now we have to get you to speed on who we are talking about here.",
          "It's no fun to read gossip, if you don't know who it's about, right?",
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
        About Marta
        <Box component="span" sx={{ fontWeight: 800 }}>
          Ferreira
        </Box>
      </Typography>
      <Typography
        variant="h6"
        color="primary.main"
        align="center"
        sx={{ fontStyle: "italic" }}
      >
        quoted by herself, or whatever
      </Typography>
      <Box sx={{ padding: 2 }} aria-hidden="true" />
      <AboutGrid />
      <SkillCarousels />
      <Box sx={{ padding: 21 }} aria-hidden="true" />
      <ChatBubble
        messages={[
          "Ugh",
          "It's giving bad yearbook quote incoming.",
          "Moving on.",
        ]}
        align="right"
        animate
      />
    </>
  );
}
