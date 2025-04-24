import type { Route } from "./+types/home";
import { MeanGirlsHero, ScreamHero } from "../hero";
import { MeanGirlsWelcome, ScreamWelcome } from "../welcome";
import { MeanGirlsInterlude } from "~/interlude";
import { ThemeNames } from "../themes";
import { useContext } from "react";
import { ThemeNameContext } from "~/theme-wrapper";
import { Box, Container } from "@mui/material";

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

const Welcome = {
  [ThemeNames.MeanGirls]: <MeanGirlsWelcome />,
  [ThemeNames.Scream]: <ScreamWelcome />,
};

const Interlude1 = {
  [ThemeNames.MeanGirls]: <MeanGirlsInterlude />,
  [ThemeNames.Scream]: <></>,
};

export default function Home() {
  const { themeName } = useContext(ThemeNameContext);

  return (
    <>
      {Hero[themeName]}
      <Container>
        <Box sx={{ padding: 16 }} aria-hidden="true" />
        {Welcome[themeName]}
        <Box sx={{ padding: 16 }} aria-hidden="true" />
        {Interlude1[themeName]}
      </Container>
    </>
  );
}
