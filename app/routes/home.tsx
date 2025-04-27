import type { Route } from "./+types/home";
import { MeanGirlsHero, ScreamHero } from "../hero";
import { sections } from "../sections";
import { ThemeNames } from "../theme/types";
import { Fragment, useContext } from "react";
import { ThemeContext } from "~/theme/theme-wrapper";
import { Box, Container } from "@mui/material";
import ChatBubble from "~/components/chat-bubble";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marta Ferreira" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

const Hero = {
  [ThemeNames.MeanGirls]: <MeanGirlsHero />,
  [ThemeNames.Scream]: <ScreamHero />,
};

export default function Home() {
  const { themeName } = useContext(ThemeContext);

  return (
    <>
      {Hero[themeName]}
      <Container>
        {sections.map(({ components, includeSpacing }, index) => {
          const element = components[themeName];
          if (!element) return null;

          return (
            <Fragment key={index}>
              {includeSpacing && (
                <Box sx={{ padding: 16 }} aria-hidden="true" />
              )}
              {element}
            </Fragment>
          );
        })}
      </Container>
    </>
  );
}
