import { MeanGirlsHero, ScreamHero } from "./hero";
import { MeanGirlsWelcome, ScreamWelcome } from "./welcome";
import { MeanGirlsInterlude, ScreamInterlude } from "./interlude";
import { MeanGirlsPicker, ScreamPicker } from "./character-picker";
import { MeanGirlsAbout, ScreamAbout } from "./about";
import { MeanGirlsWork, ScreamWork } from "./work";
import { MeanGirlsContact, ScreamContact } from "./contact";
import { Footer } from "./components/footer";
import { ThemeNames } from "./theme/types";
import { Container, Box } from "@mui/material";
import { Fragment } from "react";

const FooterContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Box sx={{ bgcolor: "background.paper" }}>
    <Container>
      {children}
      <Footer />
    </Container>
  </Box>
);

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
  {
    id: "contact",
    components: {
      [ThemeNames.MeanGirls]: <MeanGirlsContact />,
      [ThemeNames.Scream]: <ScreamContact />,
    },
    container: FooterContainer,
  },
] as const;
