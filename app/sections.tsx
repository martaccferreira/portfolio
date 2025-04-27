import { MeanGirlsWelcome, ScreamWelcome } from "./welcome";
import { MeanGirlsInterlude } from "./interlude";
import { MeanGirlsPicker, ScreamPicker } from "./character-picker";
import { ThemeNames } from "./theme/types";

export const sections = [
  {
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsWelcome />,
      [ThemeNames.Scream]: <ScreamWelcome />,
    },
    includeSpacing: true,
  },
  {
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsInterlude />,
      [ThemeNames.Scream]: <></>,
    },
    includeSpacing: true,
  },
  {
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsPicker />,
      [ThemeNames.Scream]: <ScreamPicker />,
    },
    includeSpacing: false,
  },
] as const;
