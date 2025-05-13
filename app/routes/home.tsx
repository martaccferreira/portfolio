import Box from "@mui/material/Box";
import { useSections } from "../home/use-sections";
import { useContext } from "react";
import { ThemeContext } from "~/theme/theme-wrapper";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { FloatingButtons } from "~/components/floating-buttons";

export default function Home() {
  const { sections } = useSections();
  const { isThemeLoading } = useContext(ThemeContext);

  if (!sections || isThemeLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          bgcolor: "background.default",
        }}
      >
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading Theme...</Typography>
      </Box>
    );
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
