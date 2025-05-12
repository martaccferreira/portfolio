import Cady from "./cady.jpg";
import Regina from "./regina.jpg";
import Janis from "./janis.jpg";
import Casey from "./casey.jpg";
import Sidney from "./sidney.jpg";
import Ghostface from "./ghostface.jpg";
import { MeanGirlsCharacters, ScreamCharacters } from "~/theme/types";

export const characterSprites: Record<string, string> = {
  [MeanGirlsCharacters.Cady]: Cady,
  [MeanGirlsCharacters.Regina]: Regina,
  [MeanGirlsCharacters.Janis]: Janis,
  [ScreamCharacters.Casey]: Casey,
  [ScreamCharacters.Sidney]: Sidney,
  [ScreamCharacters.Ghostface]: Ghostface,
};
