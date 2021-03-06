import { Routes, Route, Navigate } from "react-router-dom";

import { Box, Container } from "@material-ui/core";

import styles from "./home.module.scss";
import { Header, Sidebar, ProtiensList } from "../../components";

export const Home = () => {
  return (
    <section className="page">
      <Header />
      <Container>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/profile" element={<h2>Profile</h2>} />
            <Route index element={<ProtiensList />} />
            <Route path="*" element={<Navigate to="/error" />} />
          </Routes>
        </Box>
      </Container>
    </section>
  );
};
