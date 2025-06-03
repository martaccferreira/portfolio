import Box from "@mui/material/Box";
import { useSections } from "../home/use-sections";
import { useContext } from "react";
import { ThemeContext } from "~/theme/theme-wrapper";
import { FloatingButtons } from "~/components/floating-buttons";
import { LoadingScreen } from "~/components/loading-screen";

export default function Home() {
  const { sections } = useSections();
  const { isThemeLoading } = useContext(ThemeContext);

  if (!sections || isThemeLoading) {
    return <LoadingScreen />;
  }

  return sections.map((section: any) => {
    const Container = section.container;
    return (
      <>
        <FloatingButtons includeThemeSwitcher />
        <Container key={section.id}>
          {section.components}
          <Box sx={{ padding: 14 }} aria-hidden="true" />
        </Container>
      </>
    );
  });
}
