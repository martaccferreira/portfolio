import { Typography, Box } from "@mui/material";
import { CharacterPicker } from "~/components/character-picker";
import { MeanGirlsCharacters } from "~/theme/types";
import Cady from "assets/character-card/cady.png";
import Regina from "assets/character-card/regina.png";
import Janis from "assets/character-card/janis.png";

const cards = [
  {
    id: MeanGirlsCharacters.Cady,
    title: "The Transfer Student",
    description: "Cady Heron",
    media: Cady,
    emojis: ["🦒", "🌳", "📚"],
  },
  {
    id: MeanGirlsCharacters.Regina,
    title: "The Queen Bee",
    description: "Regina George",
    media: Regina,
    emojis: ["👑", "💄", "💋"],
  },
  {
    id: MeanGirlsCharacters.Janis,
    title: "The Outcast",
    description: "Janis Ian",
    media: Janis,
    emojis: ["🖤", "🎸", "😈"],
  },
];

export function MeanGirlsPicker() {
  const title = (
    <Typography variant="h1" align="center" sx={{ fontSize: "2.5rem", p: 2 }}>
      Pick your{" "}
      <Box component="span" sx={{ color: "primary.main" }}>
        <Box component="span" sx={{ fontWeight: 800 }}>
          Mean
        </Box>
        Girl
      </Box>{" "}
      to guide you through:
    </Typography>
  );

  return (
    <>
      <Typography variant="h4" align="center" color="primary.main">
        by which we mean
      </Typography>
      <CharacterPicker title={title} cards={cards} />
    </>
  );
}
