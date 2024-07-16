import { Typography, Link, Grid, Box, Button, TextField } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;
    let error = null;

    if (id === "name") {
      newValue = value.replace(/[0-9]/g, "");
      if (value !== newValue) {
        error = "Name should not contain numbers";
      }
    } else if (id === "phone") {
      newValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      if (value !== newValue) {
        error = "Phone number should only contain digits";
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));

    if (error) {
      setErrors((prev) => ({ ...prev, [id]: error }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateField = (fieldName, fieldValue) => {
    let tempErrors = { ...errors };
    switch (fieldName) {
      case "name":
        if (!fieldValue) {
          tempErrors.name = "Name is required";
        } else if (/\d/.test(fieldValue)) {
          tempErrors.name = "Name should not contain any numbers";
        } else {
          delete tempErrors.name;
        }
        break;
      case "email":
        if (!fieldValue) {
          tempErrors.email = "Email is required";
        } else if (fieldValue.length < 10) {
          return;
        } else if (!/\S+@\S+\.\S+/.test(fieldValue)) {
          tempErrors.email = "Email is invalid";
        } else {
          delete tempErrors.email;
        }
        break;
      case "phone":
        if (!fieldValue) {
          tempErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(fieldValue)) {
          tempErrors.phone = "Phone number is invalid";
        } else {
          delete tempErrors.phone;
        }
        break;
      default:
        break;
    }
    setErrors(tempErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const validateForm = () => {
    let tempErrors = { ...errors };
    if (!formData.name) {
      tempErrors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
      tempErrors.name = "Name should not contain any numbers";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const [emailError, setEmailError] = useState("");

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
          <form onSubmit={handleSubmitEmail}>
      <Grid
        container
        alignItems="center"
        sx={{
          mt: 4,
        }}
      >
        <Grid item xs md={7.5}>
          <TextField
            name="email"
            variant="outlined"
            placeholder="Your Email Here"
            type="email"
            required
            error={Boolean(emailError)}
            helperText={emailError}
            onChange={(e) => {
              const email = e.target.value;
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                setEmailError('Please enter a valid email address.');
              } else {
                setEmailError('');
              }
            }}
            sx={{
              width: '100%',
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
                "@media(min-width: 1500px)": {
                  height: "48px",
                },
              }}
          />
        </Grid>
        <Grid item xs="auto">
          <Button
            type="submit"
            sx={{
              backgroundColor: '#2A2B2C',
              color: 'white',
              height: '43px',
              marginLeft: '10px',
              fontSize: '14px',
              width: '92px',
              textTransform: 'none',
              fontFamily: 'Helvetica Neue, sans-serif',
              fontWeight: 500,
            }}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
        </Grid>

        <Grid item xs={6} sm={4} md>
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
        <Grid item xs={6} sm={4} md>
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
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 500, lineHeight: "30px" }}
          >
            Contact Us
          </Typography>
          {/* <Box>
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
          </Typography> */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <TextField
              fullWidth
              required
              id="name"
              placeholder="Your Name"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              sx={{
                width: { lg: "80%", sm: "80%", xs: "100%" },
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
                "@media(min-width: 1500px)": {
                  height: "48px",
                },
              }}
            />
            <TextField
              fullWidth
              required
              id="email"
              placeholder="Your Email"
              variant="outlined"
              margin="normal"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                width: { lg: "80%", sm: "80%", xs: "100%" },
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
                "@media(min-width: 1500px)": {
                  height: "48px",
                },
              }}
            />
            <TextField
              fullWidth
              required
              id="phone"
              placeholder="Your Phone Number"
              variant="outlined"
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              sx={{
                width: { lg: "80%", sm: "80%", xs: "100%" },
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
                "@media(min-width: 1500px)": {
                  height: "48px",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#2A2B2C",
                color: "white",
                height: "43px",
                fontSize: "14px",
                width: "92px",
                textTransform: "none",
                fontFamily: "Helvetica Neue, sans-serif",
                fontWeight: 500,
                marginTop: "10px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
