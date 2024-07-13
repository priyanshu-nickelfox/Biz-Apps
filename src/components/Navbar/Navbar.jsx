import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.svg";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const pages = ["BizStack", "BizOs", "BizGear", "Blog", "Community"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Iphone = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const Notch = styled(Box)(({ theme }) => ({
    width: "673px",
    marginLeft: "3rem",
    backgroundColor: "#161718",
    borderRadius: "0 0 28px 28px",
    transform: "translateX(-0%)",
    boxShadow: "0px 0px 3px 0.001px rgba(196, 198, 204, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      width: "28px",
      height: "12px",
      backgroundSize: "50% 100%",
      backgroundRepeat: "no-repeat",
      zIndex: 100,
      backgroundImage:
        "radial-gradient(circle at 0 100%, transparent 12px, #222 7px)",
    },

    "&::before": {
      left: "-14px",
    },

    "&::after": {
      left: "100%",
      marginRight: "12px",
      backgroundImage:
        "radial-gradient(circle at 100% 100%, transparent 12px, #222 7px)",
    },
  }));

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(15, 16, 17, 1)",
        boxShadow: "none",
        padding: { lg: "0px 120px", md: "0 0", xs: "0 0" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              width={{
                lg: "148px",
                xs: "137px",
              }}
              height={{
                lg: "39px",
                xs: "37px",
              }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Iphone sx={{ display: { xs: "none", md: "flex" } }}>
              <Notch>
                {pages.map((page, index) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 1.5,
                      color: "rgba(255, 255, 255, 1)",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {page}
                    {index === pages.length - 1 && (
                      <KeyboardArrowDownIcon sx={{ marginLeft: "8px" }} />
                    )}
                  </Button>
                ))}
              </Notch>
            </Iphone>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                color: "white",
                display: "block",
                background: "#212224",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "20px",
                width: "110px",
                height: "52px",
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
