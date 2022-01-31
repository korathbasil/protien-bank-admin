import { Container, Avatar, Box } from "@material-ui/core";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <h1>ChemWi</h1>
            <h3>Admin Panel</h3>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <h3>Jacob Andrew</h3>
              <p>Admin</p>
            </Box>
            <Box sx={{ marginLeft: "10px" }}>
              <Avatar />
            </Box>
          </Box>
        </Box>
      </Container>
    </header>
  );
};
