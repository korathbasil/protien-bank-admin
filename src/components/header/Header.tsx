import { Container, Avatar, Box } from "@material-ui/core";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <h1 className="header__name">Protien Bank</h1>
            <h3>Admin Panel</h3>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <h4>Jacob Andrew</h4>
              <p style={{ fontSize: "12px" }}>Admin</p>
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
