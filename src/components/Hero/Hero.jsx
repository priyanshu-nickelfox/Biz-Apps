import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";

const items = [
  {
    imgUrl: "src/assets/hero-1.svg",
    title: "Integrated",
  },
  {
    imgUrl: "src/assets/hero-2.svg",
    title: "Automated",
  },
  {
    imgUrl: "src/assets/hero-3.svg",
    title: "Secured",
  },
  {
    imgUrl: "src/assets/hero-4.svg",
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
                  fontSize: { lg: "64px", xs: "40px" },
                  fontWeight: 700,
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(244, 246, 253, 1), rgba(123, 124, 128, 1))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: { lg: "83.33px", xs: "52px" },
                  textAlign: { lg: "left", xs: "left" },
                  letterSpacing: "-1%",
                }}
              >
                Customize Business Workflows with Unified Software Suite
              </Typography>
              <Grid container spacing={0} sx={{ padding: "20px 0px 0px 0px" }}>
                {items.map((item, index) => (
                  <Grid item key={index} xs={6} sm={4}>
                    <Box
                      sx={{
                        borderRadius: "20px",
                        padding: "16px 16px 16px 0px",
                        height: "100%",
                        width: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "normal",
                      }}
                    >
                      <img src={item.imgUrl} />
                      <Typography
                        sx={{
                          paddingLeft: "20px",
                          color: "rgba(193, 193, 201, 1)",
                          fontSize: "24px",
                          fontWeight: 400,
                          lineHeight: "24px",
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
                  width: "159px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  margin: "48px 0px 40px 0px",
                  borderRadius: "6px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
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
              src="src/assets/animation.mp4"
              autoPlay
              loop
              muted
              style={{
                width: GetWidth(),
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
