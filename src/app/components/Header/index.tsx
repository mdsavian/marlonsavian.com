import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Link } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          zIndex: 2000,
          background: "transparent",
          boxShadow: "none",
          paddingLeft: {
            md: "6rem",
            xs: "3rem",
          },
          paddingRight: {
            md: "6rem",
            xs: "3rem",
          },
          height: "8em",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Link href="/" color="secondary" sx={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography variant="h4" color="secondary" fontWeight={600}>
              Marlon Savian
            </Typography>
          </Link>
          <IconButton aria-label="menu">
            <MenuIcon
              fontSize="large"
              sx={{
                width: "1.2em",
                height: "1.2em",
                color: { xs: "secondary.main", md: "primary.main" },
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
