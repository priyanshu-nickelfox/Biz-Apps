import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import benefit1 from "../../assets/benefits-1.svg";
import benefit2 from "../../assets/benefits-2.svg";
import benefit3 from "../../assets/benefits-3.svg";
import benefit4 from "../../assets/benefits-4.svg";
import benefit5 from "../../assets/benefits-5.svg";

const items = [
  {
    imgUrl: benefit1,
    title: "Free Upgrades and Updates",
    desc: "Free upgrades and updates to keep your system current.",
  },
  {
    imgUrl: benefit2,
    title: "Scalable and Flexible Software Suite",
    desc: "Implement seamless point-of-sale systems.",
  },
  {
    imgUrl: benefit3,
    title: "No Vendor / Data Lock-in",
    desc: "Scalable and flexible software suite for dynamic business needs",
  },
  {
    imgUrl: benefit4,
    title: "24*7 Support",
    desc: "24/7 support for secured, risk-free, and compliant solutions ensuring safety.",
  },
  {
    imgUrl: benefit5,
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
          padding: { lg: "0px 120px 0px 120px", xs: "20px 20px " },
          backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(15, 16, 17, 1),
            rgba(15, 16, 17, 0.5),
            rgba(15, 16, 17, 0.9),
            rgba(15, 16, 17, 1)
          ),
          url('src/assets/benefit-bg.png')
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: { xs: "#1F2122", sm: "transparent" },
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "42px", xs: "32px" },
              fontWeight: 700,
              padding: "20px 20px 0px 20px",
            }}
          >
            Benefits
          </Typography>
          <Grid
            container
            columns={15}
            spacing={2}
            sx={{
              padding: "16px 0px 0px 0px",
            }}
          >
            {items.map((item, index) => (
              <Grid
                item
                key={index}
                xs={index === items.length - 1 ? 15 : 7.5}
                sm={3}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(15, 16, 17, 1)",
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
