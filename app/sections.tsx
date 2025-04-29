import { MeanGirlsHero, ScreamHero } from "./hero";
import { MeanGirlsWelcome, ScreamWelcome } from "./welcome";
import { MeanGirlsInterlude, ScreamInterlude } from "./interlude";
import { MeanGirlsPicker, ScreamPicker } from "./character-picker";
import { MeanGirlsAbout, ScreamAbout } from "./about";
import { MeanGirlsWork, ScreamWork } from "./work";
import { ThemeNames } from "./theme/types";
import { Container } from "@mui/material";
import { Fragment } from "react";

export const sections = [
  {
    id: "hero",
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsHero />,
      [ThemeNames.Scream]: <ScreamHero />,
    },
    container: Fragment,
  },
  {
    id: "welcome",
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsWelcome />,
      [ThemeNames.Scream]: <ScreamWelcome />,
    },
    container: Container,
  },
  {
    id: "interlude",
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsInterlude />,
      [ThemeNames.Scream]: <ScreamInterlude />,
    },
    container: Container,
  },
  {
    id: "character-picker",
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsPicker />,
      [ThemeNames.Scream]: <ScreamPicker />,
    },
    container: Container,
  },
  {
    id: "about",
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsAbout />,
      [ThemeNames.Scream]: <ScreamAbout />,
    },
    container: Container,
  },
  {
    id: "projects",
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsWork />,
      [ThemeNames.Scream]: <ScreamWork />,
    },
    container: Fragment,
  },
] as const;
