import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import hero1 from "../../assets/hero-1.svg";
import hero2 from "../../assets/hero-2.svg";
import hero3 from "../../assets/hero-3.svg";
import hero4 from "../../assets/hero-4.svg";
import animation from "../../assets/animation.mp4";

const items = [
  {
    imgUrl: hero1,
    title: "Integrated",
  },
  {
    imgUrl: hero2,
    title: "Automated",
  },
  {
    imgUrl: hero3,
    title: "Secured",
  },
  {
    imgUrl: hero4,
    title: "Scalable",
  },
];

const GetWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width < 780 ? 372 : 410;
};

function Hero() {
  return (
    <Box
      sx={{
        color: "#fff",
        padding: { lg: "100px 120px 0px 120px", xs: "40px 20px " },
        overflow: "hidden",
      }}
    >
      <Grid
        container
        sx={{ width: "100%", height: { lg: "auto", xs: "auto" } }}
      >
        <Grid item xs={12} sm={12} lg={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: { lg: "space-between" },
              alignItems: { xs: "center", lg: "flex-start" },
              // padding: '0px 80px 0px 0px'
            }}
          >
            <Box sx={{ width: { lg: "710px", xs: "auto" } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { lg: "64px", xs: "39px" },
                  fontWeight: 700,
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(244, 246, 253, 1), rgba(123, 124, 128, 1))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: { lg: "83.33px", xs: "52.08px" },
                  textAlign: { lg: "left", xs: "left" },
                  marginLeft:
                    window.innerWidth >= 1200 && window.innerWidth <= 1430
                      ? "10px"
                      : "0px",
                }}
              >
                Customize Business Workflows with Unified Software Suite
              </Typography>
              <Grid
                container
                spacing={0}
                sx={{
                  padding: "20px 0px 0px 0px",
                  width: { lg: "85%", md: "70%", xs: "100%" },
                }}
              >
                {items.map((item, index) => (
                  <Grid item key={index} xs={6} sm={4}>
                    <Box
                      sx={{
                        padding: "16px 16px 16px 0px",
                        height: "100%",
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "normal",
                        // border: '1px solid red',
                        gap: "6px",
                      }}
                    >
                      <img src={item.imgUrl} />
                      <Typography
                        sx={{
                          paddingLeft: "12px",
                          color: "rgba(193, 193, 201, 1)",
                          fontSize: "24px",
                          fontWeight: 400,
                          lineHeight: "36px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Button
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  height: "56px",
                  width: "169px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  margin: "48px 0px 40px 0px",
                  borderRadius: "6px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                  lineHeight: "24px",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // marginTop: { xs: "24px", lg: "0" },
            }}
          >
            <video
              src={animation}
              autoPlay
              loop
              muted
              style={{
                width: GetWidth(),
                height: "auto",
                marginLeft:
                  window.innerWidth >= 1200 && window.innerWidth <= 1430
                    ? "350px"
                    : "20px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
