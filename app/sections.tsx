import { MeanGirlsWelcome, ScreamWelcome } from "./welcome";
import { MeanGirlsInterlude, ScreamInterlude } from "./interlude";
import { MeanGirlsPicker, ScreamPicker } from "./character-picker";
import { ThemeNames } from "./theme/types";
import { MeanGirlsAbout, ScreamAbout } from "./about";

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
      [ThemeNames.Scream]: <ScreamInterlude />,
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
  {
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsAbout />,
      [ThemeNames.Scream]: <ScreamAbout />,
    },
    includeSpacing: true,
  },
] as const;
