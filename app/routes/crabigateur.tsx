import { Container } from "@mui/material";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

const pageName = "crabigateur";
export default function Crabigateur() {
  return (
    <Container>
      <Header currentPage={pageName} />
      <Footer />
    </Container>
  );
}
