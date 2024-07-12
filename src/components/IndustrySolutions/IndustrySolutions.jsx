import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import industry1 from "../../assets/industry-1.svg";
import industry2 from "../../assets/industry-2.svg";
import industry3 from "../../assets/industry-3.svg";
import industry4 from "../../assets/industry-4.svg";
import industry5 from "../../assets/industry-5.svg";
import industry6 from "../../assets/industry-6.svg";
import industry7 from "../../assets/industry-7.svg";
import industry8 from "../../assets/industry-8.svg";
import industry9 from "../../assets/industry-9.svg";
import industry10 from "../../assets/industry-10.svg";
import industry11 from "../../assets/industry-11.svg";

const items = [
  {
    imgUrl: industry1,
    title: "Automotive",
  },
  {
    imgUrl: industry2,
    title: "Education",
  },
  {
    imgUrl: industry3,
    title: "Federal Government",
  },
  {
    imgUrl: industry4,
    title: "Financial Services",
  },
  {
    imgUrl: industry5,
    title: "Healthcare",
  },
  {
    imgUrl: industry6,
    title: "Legal",
  },
  {
    imgUrl: industry7,
    title: "Manufacturing",
  },
  {
    imgUrl: industry8,
    title: "Media & Entertainment",
  },
  {
    imgUrl: industry9,
    title: "Retail",
  },
  {
    imgUrl: industry10,
    title: "Service Providers",
  },
  {
    imgUrl: industry11,
    title: "State & Local Government",
  },
];

const IndustrySolutions = () => {
  return (
    <>
      <Box
        sx={{
          color: "rgba(244, 244, 247, 1)",
          padding: { lg: "100px 120px", xs: "20px 20px" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            borderRadius: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "42px", xs: "30px" },
              fontWeight: 700,
              lineHeight: "41.66px",
            }}
          >
            Industry Solutions
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, lg: 6 }}
            sx={{
              padding: { lg: "32px 40px 48px 0px", xs: "32px 0px 0px 0px" },
            }}
          >
            {items.map((item, index) => (
              <Grid item key={index} xs={6} sm={3}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "8px",
                    padding: {
                      lg: "24px 24px 51px 24px",
                      xs: "27px 20px",
                    },
                    height: { lg: "127px", xs: "100%" },
                    width: {
                      lg: "276px",
                      //   xs: "187px"
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `
                  linear-gradient(to bottom right, rgba(15, 16, 17, 1), rgba(255, 255, 255, 0.9)),
                  url("src/assets/grid-background.png")
                `,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                      borderRadius: "8px",
                      opacity: 0.2,
                      zIndex: 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img src={item.imgUrl} alt={item.title} />
                    <Typography
                      sx={{
                        paddingTop: "12px",
                        color: "rgba(244, 244, 247, 1)",
                        fontSize: { lg: "18px", xs: "15px" },
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default IndustrySolutions;
