import { Footer } from "../components/footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Fragment } from "react";
import ScrollOverlayGIF from "../components/scroll-overlay-gif";
import ScreamHero from "./hero/scream";
import ScreamWelcome from "./welcome/scream";
import ScreamInterlude from "./interlude/scream";
import ScreamPicker from "./character-picker/scream";
import ScreamAbout from "./about/scream";
import ScreamWork from "./work/scream";
import ScreamContact from "./contact/scream";

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

export function screamSections(
  projectsRef: React.RefObject<HTMLElement | null>,
  contactRef: React.RefObject<HTMLElement | null>
) {
  const sections = [
    {
      id: "hero",
      components: <ScreamHero />,
      container: Fragment,
    },
    {
      id: "welcome",
      components: <ScreamWelcome />,

      container: Container,
    },
    {
      id: "interlude",
      components: <ScreamInterlude />,
      container: Container,
    },
    {
      id: "character-picker",
      components: <ScreamPicker />,
      container: Container,
    },
    {
      id: "about",
      components: <ScreamAbout />,
      container: Container,
    },
    {
      id: "projects",
      components: (
        <>
          <ScreamWork />
          <Box ref={projectsRef} />
        </>
      ),
      container: Fragment,
    },
    {
      id: "interlude-2",
      components: (
        <ScrollOverlayGIF
          gifSrc="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2Y4eXFxMTB6am9ycjBpeGozczlhNDV3bjRqcWg4eWVtdmZ1ZjNkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/45aI8f1nI1b071X96C/giphy.gif"
          startRef={projectsRef}
          endRef={contactRef}
        />
      ),
      container: Fragment,
    },
    {
      id: "contact",
      components: <ScreamContact stopInterludeRef={contactRef} />,
      container: FooterContainer,
    },
  ] as const;

  return sections;
}
