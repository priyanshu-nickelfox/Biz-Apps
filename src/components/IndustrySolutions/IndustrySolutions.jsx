import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const items = [
  {
    imgUrl: "src/assets/industry-1.svg",
    title: "Automotive",
  },
  {
    imgUrl: "src/assets/industry-2.svg",
    title: "Education",
  },
  {
    imgUrl: "src/assets/industry-3.svg",
    title: "Federal Government",
  },
  {
    imgUrl: "src/assets/industry-4.svg",
    title: "Financial Services",
  },
  {
    imgUrl: "src/assets/industry-5.svg",
    title: "Healthcare",
  },
  {
    imgUrl: "src/assets/industry-6.svg",
    title: "Legal",
  },
  {
    imgUrl: "src/assets/industry-7.svg",
    title: "Manufacturing",
  },
  {
    imgUrl: "src/assets/industry-8.svg",
    title: "Media & Entertainment",
  },
  {
    imgUrl: "src/assets/industry-9.svg",
    title: "Retail",
  },
  {
    imgUrl: "src/assets/industry-10.svg",
    title: "Service Providers",
  },
  {
    imgUrl: "src/assets/industry-11.svg",
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
