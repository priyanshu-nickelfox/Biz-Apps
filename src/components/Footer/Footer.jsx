import { Typography, Link, Grid, Box, Button, TextField } from "@mui/material";
import logo from "../../assets/logo.svg";

const FooterInformation = [
  { title: "Support Service", link: "" },
  { title: "Linkedin", link: "" },
  { title: "Contact Us", link: "" },
  { title: "Privacy Policy", link: "" },
  { title: "Terms & Conditions", link: "" },
];

const FooterDiscord = [
  { title: "TecheOS", link: "" },
  { title: "DeskServ", link: "" },
  { title: "NetServ", link: "" },
  { title: "StorServ", link: "" },
];

const FooterComponent = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#0F1011",
        color: "#ffffff",
        backgroundImage: "linear-gradient(to top, #0F1011, #272829)",
        height: { lg: "500px", xs: "auto" },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{ padding: { lg: "1rem 7rem", xs: "2rem 2rem" }, marginTop: "0px" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{
            paddingRight: {
              lg: "0rem",
              xs: "0rem",
              height: { lg: "auto", xs: "100%" },
            },
          }}
        >
          <img src={logo} alt="hero-section" width={143} height={40} />
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", lg: "16px" },
              paddingRight: { lg: "4rem", xs: "0rem", md: "2rem" },
              fontWeight: 400,
              color: "#A7A7A8",
              marginTop: "1rem",
              lineHeight: { lg: "24px", xs: "21px" },
              fontFamily: "Helvetica Neue,sans-serif",
            }}
          >
            Welcome to OpenTECHE.io, where affordable open-source technologies
            empower businesses and individuals. Explore our innovative products
            revolutionizing industries and enhancing personal experiences.
          </Typography>
          <Grid
            container
            alignItems="center"
            sx={{
              mt: 4,
            }}
          >
            <Grid item xs md={7.5}>
              <TextField
                variant="outlined"
                placeholder="Your Email Here"
                sx={{
                  width: "100%",
                  height: "43px",
                  backgroundColor: "#2A2B2C",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "gray",
                    },

                    "& input::placeholder": {
                      color: "#FFFFFF",

                      fontWeight: 500,
                      fontFamily: "Helvetica Neue, sans-serif",
                    },

                    "& input": {
                      color: "#fff",

                      fontWeight: 300,
                    },
                  },

                  "@media(max-width: 475px)": {
                    height: "43px",
                    "& input::placeholder": {
                      fontSize: "12px",
                    },
                  },
                }}
              />{" "}
            </Grid>{" "}
            <Grid item xs="auto">
              {" "}
              <Button
                sx={{
                  backgroundColor: "#2A2B2C",
                  color: "white",
                  height: "43px",
                  marginLeft: "10px",
                  fontSize: "14px",
                  width: "92px",
                  textTransform: "none",
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontWeight: 500,
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} sm={6} md>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 500, lineHeight: "30px" }}
          >
            Information
          </Typography>
          {FooterInformation.map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginTop: { lg: "1.5rem", xs: "1rem" },
                fontFamily: "Helvetica Neue,sans-serif",
                fontSize: "16px",
                color: "#BEBEBE",
              }}
            >
              {item.title}
            </Link>
          ))}
        </Grid>
        <Grid item xs={6} sm={6} md>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 500, lineHeight: "30px" }}
          >
            Discord
          </Typography>
          {FooterDiscord.map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginTop: { lg: "1.5rem", xs: "1rem" },
                fontFamily: "Helvetica Neue,sans-serif",
                fontSize: "16px",
                color: "#BEBEBE",
              }}
            >
              {item.title}
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 500, lineHeight: "30px" }}
          >
            Contact Us
          </Typography>
          <Box>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue,sans-serif",
                marginTop: "1rem",
                fontSize: "16px",
                color: "#BEBEBE",
                fontWeight: 400,
              }}
            >
              If you have any query, please contact us
            </Typography>
            <Link
              href="mailto:sales@openteche.io"
              color="inherit"
              underline="none"
              style={{
                display: "block",
                fontFamily: "Helvetica Neue,sans-serif",
                fontSize: "1rem",
                color: "#fff",
                textDecoration: "underline",
              }}
            >
              sales@openteche.io
            </Link>
          </Box>
          <Typography
            sx={{
              display: "block",
              marginTop: { lg: "1.5rem", xs: "1rem" },
              fontSize: "16px",
              color: "#BEBEBE",
            }}
          >
            Locations:{" "}
            <span
              style={{ color: "#fff", fontWeight: 600, marginLeft: "0.5rem" }}
            >
              US &amp; Canada
            </span>
          </Typography>
          <Typography
            sx={{
              display: "block",
              marginTop: { lg: "1.5rem", xs: "1rem" },
              fontSize: "1rem",
              color: "#BEBEBE",
            }}
          >
            Call:{" "}
            <span
              style={{ color: "#fff", fontWeight: 600, marginLeft: "0.5rem" }}
            >
              +1833 338 3243
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
