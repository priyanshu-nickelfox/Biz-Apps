import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import application1 from "../../assets/application-1.svg";
import application2 from "../../assets/application-2.svg";
import application3 from "../../assets/application-3.svg";
import application4 from "../../assets/application-4.svg";

const items = [
  {
    imgUrl: application1,
    title: "AI / ML",
  },
  {
    imgUrl: application2,
    title: "Big Data & Analytics",
  },
  {
    imgUrl: application3,
    title: "SAP",
  },
  {
    imgUrl: application4,
    title: "Splunk",
  },
];

const Application = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          color: "#fff",
          padding: { lg: "100px 120px", xs: "20px 20px" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
        linear-gradient(
          to bottom,
          rgba(15, 16, 17, 1),
          rgba(15, 16, 17, 0),
          rgba(15, 16, 17, 0),
          rgba(15, 16, 17, 1)
        ),
        url('src/assets/background.jpeg')
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(6px)",
            transform: "rotate(0deg)",
            zIndex: -1,
          }}
        />

        <Box
          sx={{
            backgroundColor: "rgba(31, 33, 34, 0.9)",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid rgba(33, 34, 36, 0.6)",
            position: "relative",
          }}
        >
          <Typography
            sx={{ fontSize: { lg: "42px", xs: "32px" }, fontWeight: 700 }}
          >
            Application
          </Typography>
          <Grid container spacing={1} sx={{ padding: "20px 0px 0px 0px" }}>
            {items.map((item, index) => (
              <Grid item key={index} xs={6} sm={3}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: {
                      lg: "24px 24px 51px 24px",
                      xs: "12px 16px 24px 16px",
                    },
                    height: "115px",
                    width: {
                      lg: "250px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { lg: "center", xs: "flex-start" },
                    justifyContent: "space-between",
                  }}
                >
                  <img src={item.imgUrl} alt={item.title} />
                  <Typography
                    sx={{
                      paddingTop: "12px",
                      color: "rgba(244, 244, 247, 1)",
                      fontSize: { lg: "18px", xs: "16px" },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Application;
