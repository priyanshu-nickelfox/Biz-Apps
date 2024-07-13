import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import enterprise1 from "../../assets/enterprise-1.svg";
import enterprise2 from "../../assets/enterprise-2.svg";
import enterprise3 from "../../assets/enterprise-3.svg";
import enterprise4 from "../../assets/enterprise-4.svg";
import comp4 from "../../assets/offer-4.png";

const items = [
  {
    icon: enterprise1,
    title: "Network Management",
    desc: "VPN, Firewalls, Network, Firewall",
  },
  {
    icon: enterprise2,
    title: "Asset Management",
    desc: "",
  },
  {
    icon: enterprise3,
    title: "Facility Management",
    desc: "",
  },
  {
    icon: enterprise4,
    title: "Security Management",
    desc: [
      {
        descTitle: "Identity and Access Management",
        description:
          "Lock down your business security with our Identity and Access Management, granting safe access only to those who need it.",
      },
      {
        descTitle: "Domain Management, SSL, Identity Management",
        description:
          "Shield your digital assets with our all-in-one Domain Management, SSL, and Identity Management, providing top-tier security",
      },
      {
        descTitle: "Threat Detection and Response",
        description:
          "Stay ahead of cyber threats with our proactive Threat Detection and Response, delivering real-time monitoring and rapid threat mitigation",
      },
      {
        descTitle: "Compliance Management",
        description:
          "Navigate regulations with ease using our Compliance Management, ensuring your business meets all necessary standards without the hassle",
      },
      {
        descTitle: "Data Protection",
        description:
          "Safeguard your sensitive information with our comprehensive Data Protection solutions, ensuring your data remains secure and complaint at all times",
      },
    ],
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

  return width < 780 ? 248 : 379;
};

const iconWidth = () => {
  const [iconWidth, setIconWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIconWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return iconWidth < 780 ? 20 : 32;
};

const Enterprise = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        color: "#fff",
        padding: { lg: "0px 120px 0px 120px", xs: "0px 20px " },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          padding: {
            lg: "48px 0px 0px 0px",
            xs: "40px 0px 40px 0px",
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontSize: { lg: "32px", xs: "20px" },
            fontWeight: 700,
            lineHeight: { lg: "41.66px", xs: "26.04px" },
          }}
        >
          Enterprise Assets and Security Management
        </Typography>
        <Box
          sx={{
            background: "rgba(15, 16, 17, 1)",
          }}
        >
          <Grid
            container
            justifyContent="center"
            sx={{
              backgroundColor: "#0F1011",
              padding: { lg: "40px 0px 0px 0px", xs: "0px" },
            }}
          >
            <Grid
              item
              md={6}
              sx={{
                borderRadius: "20px",
              }}
            >
              <Box sx={{ width: "100%" }}>
                {items.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expandedPanel === `panel-${index}`}
                    onChange={handleAccordionChange(`panel-${index}`)}
                    sx={{
                      backgroundColor: "rgba(33, 34, 36, 1)",
                      borderRadius: "20px",
                      "&:first-child": {
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      },
                      "&:last-child": {
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expandedPanel === `panel-${index}` ? (
                          <RemoveIcon sx={{ color: "white" }} />
                        ) : (
                          <AddIcon sx={{ color: "white" }} />
                        )
                      }
                      aria-controls={`panel-${index}-content`}
                      id={`panel-${index}-header`}
                      sx={{
                        backgroundColor:
                          expandedPanel === `panel-${index}`
                            ? "rgba(33, 34, 36, 1)"
                            : "#0F1011",
                        color: "rgba(193, 193, 201, 1)",
                        padding: {
                          lg: "20px 20px 16px 20px",
                          xs: "12px 20px 0px 20px",
                        },
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{ marginRight: "16px", width: iconWidth() }}
                      />
                      <Typography
                        sx={{
                          fontSize: { lg: "20px", xs: "16px" },
                          fontWeight: 700,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "rgba(33, 34, 36, 1)",
                        color: "rgba(193, 193, 201, 1)",
                        borderRadius: "16px",
                        padding: "0px 20px 20px 40px",
                      }}
                    >
                      <Box
                        sx={{
                          padding: {
                            lg: "0px 0px 20px 20px",
                            xs: "0px 0px 0px 24px",
                          },
                        }}
                      >
                        {typeof item.desc === "string" &&
                        item.desc.trim() !== "" ? (
                          <Typography
                            sx={{
                              fontSize: { lg: "16px", xs: "14px" },
                              fontWeight: 400,
                              lineHeight: "24px",
                            }}
                          >
                            {item.desc}
                          </Typography>
                        ) : Array.isArray(item.desc) && item.desc.length > 0 ? (
                          <ul>
                            {item.desc.map((i, idx) => (
                              <Box
                                sx={{ padding: "0px 0px 0px 0px" }}
                                key={idx}
                              >
                                <li>
                                  <Typography
                                    sx={{
                                      fontSize: { lg: "18px", xs: "14px" },
                                      fontWeight: 700,
                                      lineHeight: "21px",
                                      padding: "6px 0px 4px 0px",
                                    }}
                                  >
                                    {i.descTitle}
                                  </Typography>
                                </li>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "21px",
                                  }}
                                >
                                  {i.description}
                                </Typography>
                              </Box>
                            ))}
                          </ul>
                        ) : null}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
            <Grid item md={6} sx={{ order: { xs: -1, md: 0 } }}>
              <Box
                sx={{
                  padding: { lg: "40px 0px 0px 0px", xs: "0px" },
                }}
              >
                <Box
                  sx={{
                    padding: { lg: "0px 0px 290px 134px", xs: "32px 71px" },
                  }}
                >
                  <img
                    style={{
                      mixBlendMode: "lighten",
                      height: "auto",
                      width: GetWidth(),
                    }}
                    src={comp4}
                    alt="description"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Enterprise;
