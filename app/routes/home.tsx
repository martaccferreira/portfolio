import type { Route } from "./+types/home";
import { MeanGirlsHero } from "../welcome/mean-girls-hero";
import { ThemeNames } from "../themes";
import { useContext } from "react";
import { ThemeNameContext } from "~/theme-wrapper";
import { ScreamHero } from "~/welcome/scream-hero";

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
  const { themeName } = useContext(ThemeNameContext);

  return (
    <>
      {Hero[themeName]}
      <p>Next Component</p>
    </>
  );
}
