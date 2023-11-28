import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import MenuLink from "./MenuLink";

const pages = [
  {
    id: 0,
    page: "Home",
    to: "/",
  },
  {
    id: 1,
    page: "About",
    to: "/about",
  },
  {
    id: 2,
    page: "Pages",
    to: "/pages",
    pages: [
      {
        id: 0,
        to: "/services",
        page: "Services",
      },
      {
        id: 1,
        to: "/service-single",
        page: "Service Single",
      },
      {
        id: 2,
        to: "/project-single",
        page: "Project Single",
      },
      {
        id: 3,
        to: "/blog",
        page: "Blog",
      },
      {
        id: 4,
        to: "/blogs/:id",
        page: "Blog Single",
      },
      {
        id: 5,
        to: "/team",
        page: "Team",
      },
      {
        id: 6,
        to: "/pricing",
        page: "Pricing",
      },
      {
        id: 7,
        to: "/change-log",
        page: "Change Log",
      },
      {
        id: 8,
        to: "/licenses",
        page: "Licences",
      },
      {
        id: 9,
        to: "/password-protection",
        page: "Protection",
      },
    ],
  },
  {
    id: 3,
    page: "Project",
    to: "/project",
  },
  {
    id: 4,
    page: "Contact",
    to: "/contact",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: "rgba(9, 18, 66, 0.4)",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ height: "70px" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ id, page, to, pages }) => (
                <MenuLink
                  key={id}
                  handleCloseNavMenu={handleCloseNavMenu}
                  page={page}
                  pages={pages}
                  to={to}
                />
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              height: 70,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 4,
              "& a": {
                color: "white",
                display: "block",
                pt: "24px",
                borderBottom: "2px solid transparent",
                "&:hover": {
                  borderBottomColor: "inherit",
                },
              },
            }}
          >
            {pages.map(({ id, to, page, pages: _pages }) => (
              <NavLink
                key={id}
                id={id}
                pages={_pages}
                to={to}
                page={page}
                handleCloseNavMenu={handleCloseNavMenu}
                pagesLength={pages.length}
              />
            ))}
          </Box>

          <Stack
            flexDirection="row"
            alignItems="center"
            gap={2}
            sx={{
              height: "100%",
              "& *": { color: "white" },
              "&>a": { fontSize: 0 },
            }}
          >
            <Link to="https://google.com">
              <Instagram />
            </Link>
            <Link to="https://google.com">
              <FacebookRounded />
            </Link>
            <Link to="https://google.com">
              <Twitter />
            </Link>
            <Link to="https://google.com">
              <LinkedIn />
            </Link>
            <Button
              sx={{
                backgroundColor: "white !important",
                color: "black",
                alignSelf: "stretch",
                borderRadius: "0",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": {
                  opacity: 0.7,
                  backgroundColor: "white !important",
                },
              }}
            >
              Request Quote
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
