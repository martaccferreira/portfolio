import Container from "@mui/material/Container";
import { FloatingButtons } from "./floating-buttons";
import { Header } from "./header";
import { Footer } from "~/components/footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { projects } from "./projects";
import { ProjectCarousel } from "./project-carousel";

export function ProjectPageLayout({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) {
  return (
    <>
      <FloatingButtons />
      <Container>
        <Header currentPage={pageName} />
        {children}
        <Box sx={{ padding: 16 }} aria-hidden="true" />
        <Typography variant="h2" sx={{ fontSize: "2.5rem" }}>
          Check out other Projects
        </Typography>
        <ProjectCarousel
          projects={projects.filter((project) => project.id !== pageName)}
        />

        <Footer />
      </Container>
    </>
  );
}
