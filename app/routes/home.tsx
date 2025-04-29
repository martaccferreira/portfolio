import type { Route } from "./+types/home";
import { sections } from "../sections";
import { ThemeNames } from "../theme/types";
import { Fragment, useContext } from "react";
import { ThemeContext } from "~/theme/theme-wrapper";
import { Box, Container } from "@mui/material";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marta Ferreira" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  const { themeName } = useContext(ThemeContext);

  return sections.map(({ id, components, container: Container }) => {
    return (
      <Container key={id}>
        {components[themeName]}
        <Box sx={{ padding: 16 }} aria-hidden="true" />
      </Container>
    );
  });
}
