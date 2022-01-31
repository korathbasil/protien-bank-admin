import { Box, Container } from "@material-ui/core";

import styles from "./home.module.scss";
import { Header, Sidebar } from "../../components";

export const Home = () => {
  return (
    <section className="page">
      <Header />
      <Container>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
        </Box>
      </Container>
    </section>
  );
};
