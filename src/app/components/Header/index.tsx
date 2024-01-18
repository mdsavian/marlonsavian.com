import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Link } from "@mui/material";

const Header = () => {
  return (
    <>
      <nav className="bg-transparent px-12 md:px-24 h-32 z-50 flex items-center flex-wrap">
        <div className="flex items-center justify-center min-h-16">
          <div className="flex text-4xl font-bold ">
            <a href="/" className="block text-lime">
              Marlon Savian
            </a>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10 md:text-eletricBlue text-lime"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
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
          }}
        >
          <Toolbar>
            <Link
              href="/"
              color="secondary"
              sx={{ textDecoration: "none", flexGrow: 1 }}
            >
              <Typography variant="h4" color="primary" fontWeight={600}>
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
    </>
  );
};

export default Header;
