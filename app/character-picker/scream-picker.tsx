import { Typography, Box } from "@mui/material";
import { CharacterPicker } from "~/components/character-picker";
import { ScreamCharacters } from "~/theme/types";

const cards = [
  {
    id: ScreamCharacters.Sidney,
    title: "The (Not So) Goody Two Shoes",
    description: "Sydney Prescott",
    media: "/assets/character-card/sidney.png",
    emojis: ["🌂", "👩🏻", "🚨"],
  },
  {
    id: ScreamCharacters.Ghostface,
    title: "The Killer(s)",
    description: "???",
    media: "/assets/character-card/ghostface.png",
    emojis: ["🔪", "👻", "🩸"],
  },
  {
    id: ScreamCharacters.Casey,
    title: "The Blond Airhead(?)",
    description: "Casey Becker",
    media: "/assets/character-card/casey.png",
    emojis: ["📞", "👱🏻‍♀️", "📺"],
  },
];

export function ScreamPicker() {
  const title = (
    <Typography variant="h1" align="center" sx={{ fontSize: "2.5rem", p: 3 }}>
      Pick your{" "}
      <Box component="span" sx={{ color: "primary.main" }}>
        slasher personality
      </Box>{" "}
      to guide you through:
    </Typography>
  );

  return (
    <>
      <Typography variant="h5" align="center" color="secondary.main">
        It's too dangerous to go alone,
      </Typography>
      <CharacterPicker title={title} cards={cards} />
    </>
  );
}
