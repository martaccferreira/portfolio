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
import ScrollOverlayGIF from "./components/scroll-overlay-gif";
import { useRef } from "react";

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

export function useSections() {
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections = [
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
        [ThemeNames.MeanGirls]: (
          <>
            <MeanGirlsWork />
            <Box ref={projectsRef} />
          </>
        ),
        [ThemeNames.Scream]: (
          <>
            <ScreamWork />
            <Box ref={projectsRef} />
          </>
        ),
      },
      container: Fragment,
    },
    {
      id: "interlude-2",
      components: {
        [ThemeNames.MeanGirls]: (
          <ScrollOverlayGIF
            gifSrc="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTYyc3JyOTF4ajhnbDBmemIwZ2h2YW5tN2U2bTd0MnJtcnVjNDdhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lPP4Crb4efP8s/giphy.gif"
            startRef={projectsRef}
            endRef={contactRef}
          />
        ),
        [ThemeNames.Scream]: (
          <ScrollOverlayGIF
            gifSrc="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2Y4eXFxMTB6am9ycjBpeGozczlhNDV3bjRqcWg4eWVtdmZ1ZjNkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/45aI8f1nI1b071X96C/giphy.gif"
            startRef={projectsRef}
            endRef={contactRef}
          />
        ),
      },
      container: Fragment,
    },
    {
      id: "contact",
      components: {
        [ThemeNames.MeanGirls]: (
          <MeanGirlsContact stopInterludeRef={contactRef} />
        ),
        [ThemeNames.Scream]: <ScreamContact stopInterludeRef={contactRef} />,
      },
      container: FooterContainer,
    },
  ] as const;

  return sections;
}
