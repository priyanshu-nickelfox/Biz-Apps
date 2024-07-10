import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: "#0F1011", padding: "100px 120px" }}>
      <Grid container lg={12} spacing={5}>
        <Grid item lg={6} >
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(244, 246, 253, 1), rgba(123, 124, 128, 1))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "64px",
                fontFamily: "DMSans",
                fontWeight: 700,
              }}
            >
              Customize Business Workflows with Unified Software Suite
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={6} >
          <Grid
            item
            lg={6}
            sx={{
              // width: "410px",
              // height: "344.56px",
              mixBlendMode: "lighten",
            }}
          >
            <img src="src/assets/biz-app-hero.png" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
