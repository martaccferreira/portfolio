import { Typography, Box } from "@mui/material";
import { CharacterPicker } from "~/components/character-picker";
import { MeanGirlsCharacters } from "~/theme/types";

const cards = [
  {
    id: MeanGirlsCharacters.Cady,
    title: "The Transfer Student",
    description: "Cady Heron",
    media: "cady.jpg",
  },
  {
    id: MeanGirlsCharacters.Regina,
    title: "The Queen Bee",
    description: "Regina George",
    media: "regina.jpg",
  },
  {
    id: MeanGirlsCharacters.Janis,
    title: "The Outcast",
    description: "Janis Ian",
    media: "janis.jpg",
  },
];

export function MeanGirlsPicker() {
  const title = (
    <Typography
      variant="h1"
      align="center"
      sx={{ fontSize: "2.5rem", p: 2 }}
      color="primary.contrastText"
    >
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
