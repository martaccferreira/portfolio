import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CharacterPicker } from "~/components/character-picker";
import { ScreamCharacters } from "~/theme/types";
import Sidney from "assets/character-card/sidney.jpg";
import Ghostface from "assets/character-card/ghostface.jpg";
import Casey from "assets/character-card/casey.jpg";

const cards = [
  {
    id: ScreamCharacters.Sidney,
    title: "The (Not So) Goody Two Shoes",
    description: "Sydney Prescott",
    media: Sidney,
    emojis: ["🌂", "👩🏻", "🚨"],
  },
  {
    id: ScreamCharacters.Ghostface,
    title: "The Killer(s)",
    description: "???",
    media: Ghostface,
    emojis: ["🔪", "👻", "🩸"],
  },
  {
    id: ScreamCharacters.Casey,
    title: "The Blond Airhead(?)",
    description: "Casey Becker",
    media: Casey,
    emojis: ["📞", "👱🏻‍♀️", "📺"],
  },
];

export default function ScreamPicker() {
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
