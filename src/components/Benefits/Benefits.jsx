import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const items = [
  {
    imgUrl: "src/assets/benefits-1.svg",
    title: "Free Upgrades and Updates",
    desc: "Free upgrades and updates to keep your system current.",
  },
  {
    imgUrl: "src/assets/benefits-2.svg",
    title: "Scalable and Flexible Software Suite",
    desc: "Implement seamless point-of-sale systems.",
  },
  {
    imgUrl: "src/assets/benefits-3.svg",
    title: "No Vendor / Data Lock-in",
    desc: "Scalable and flexible software suite for dynamic business needs",
  },
  {
    imgUrl: "src/assets/benefits-4.svg",
    title: "24*7 Support",
    desc: "24/7 support for secured, risk-free, and compliant solutions ensuring safety.",
  },
  {
    imgUrl: "src/assets/benefits-5.svg",
    title: "Secured, Risk-free and Compliant",
    desc: "Solutions ensuring safety and regulatory adherence.",
  },
];

const Benefits = () => {
  return (
    <>
      <Box
        sx={{
          color: "#fff",
          padding: { lg: "100px 120px", xs: "20px 20px " },
        }}
      >
        <Box
          sx={{
            backgroundColor: { xs: "#1F2122", sm: "transparent" },
            borderRadius: "20px",
            // padding: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: { lg: "42px", xs: "32px" }, fontWeight: 700 }}
          >
            Benefits
          </Typography>
          <Grid container spacing={2} sx={{ padding: "20px 0px 0px 0px" }}>
            {items.map((item, index) => (
              <Grid
                item
                key={index}
                xs={index === items.length - 1 ? 12 : 6}
                sm={3}
              >
                <Box
                  sx={{
                    backgroundColor: "#000",
                    borderRadius: "20px",
                    padding: {
                      lg: "24px 24px 51px 24px",
                      xs: "16px",
                    },
                    height: "100%",
                    width: {
                      xs: "auto",
                      lg: "auto",
                    },
                  }}
                >
                  <img src={item.imgUrl} />
                  <Typography
                    sx={{
                      paddingTop: "12px",
                      color: "rgba(244, 244, 247, 1)",
                      fontSize: { lg: "18px", xs: "16px" },
                      fontWeight: 700,
                      lineHeight: "24px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "12px",
                      color: "rgba(131, 131, 143, 1)",
                      fontSize: { lg: "16px", xs: "14px" },
                      lineHeight: "21px",
                      fontWeight: 400,
                    }}
                  >
                    {item.desc}
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

export default Benefits;
