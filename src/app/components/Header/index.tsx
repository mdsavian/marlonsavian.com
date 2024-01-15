import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Link } from "@mui/material";

const Header = () => {
  return (
    <Box flexGrow={1}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 2000,
          background: "transparent",
          boxShadow: "none",
          paddingLeft: "6rem",
          paddingRight: "6rem",
          height: "11.12em",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Link href="/" color="secondary" sx={{ flexGrow: 1, textDecoration: "none" }}>
            <Typography variant="h4" color="secondary" fontWeight={600}>
              Marlon Savian
            </Typography>
          </Link>
          <IconButton aria-label="menu">
            <MenuIcon fontSize="large" color="primary" sx={{ width: "1.2em", height: "1.2em" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
