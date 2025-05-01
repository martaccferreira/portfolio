import type { Route } from "./+types/home";
import { useSections } from "../sections";
import { useContext } from "react";
import { ThemeContext } from "~/theme/theme-wrapper";
import { Box } from "@mui/material";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marta Ferreira" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  const { themeName } = useContext(ThemeContext);
  const sections = useSections();

  return sections.map((section: any) => {
    const Container = section.container;
    return (
      <Container key={section.id}>
        {section.components[themeName]}
        <Box sx={{ padding: 14 }} aria-hidden="true" />
      </Container>
    );
  });
}
