import { Footer } from "../components/footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Fragment } from "react";
import ScrollOverlayGIF from "../components/scroll-overlay-gif";
import MeanGirlsHero from "./hero/mean-girls";
import MeanGirlsWelcome from "./welcome/mean-girls";
import MeanGirlsInterlude from "./interlude/mean-girls";
import MeanGirlsPicker from "./character-picker/mean-girls";
import MeanGirlsAbout from "./about/mean-girls";
import MeanGirlsWork from "./work/mean-girls";
import MeanGirlsContact from "./contact/mean-girls";

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

export function meanGirlsSections(
  projectsRef: React.RefObject<HTMLElement | null>,
  contactRef: React.RefObject<HTMLElement | null>
) {
  const sections = [
    {
      id: "hero",
      components: (
        //<Suspense fallback={null}>
        <MeanGirlsHero />
        //</Suspense>
      ),
      container: Fragment,
    },
    {
      id: "welcome",
      components: (
        //<Suspense fallback={null}>
        <MeanGirlsWelcome />
        //</Suspense>
      ),

      container: Container,
    },
    {
      id: "interlude",
      components: <MeanGirlsInterlude />,
      container: Container,
    },
    {
      id: "character-picker",
      components: <MeanGirlsPicker />,
      container: Container,
    },
    {
      id: "about",
      components: <MeanGirlsAbout />,
      container: Container,
    },
    {
      id: "projects",
      components: (
        <>
          <MeanGirlsWork />
          <Box ref={projectsRef} />
        </>
      ),
      container: Fragment,
    },
    {
      id: "interlude-2",
      components: (
        <ScrollOverlayGIF
          gifSrc="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTYyc3JyOTF4ajhnbDBmemIwZ2h2YW5tN2U2bTd0MnJtcnVjNDdhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lPP4Crb4efP8s/giphy.gif"
          startRef={projectsRef}
          endRef={contactRef}
        />
      ),
      container: Fragment,
    },
    {
      id: "contact",
      components: <MeanGirlsContact stopInterludeRef={contactRef} />,
      container: FooterContainer,
    },
  ] as const;

  return sections;
}
