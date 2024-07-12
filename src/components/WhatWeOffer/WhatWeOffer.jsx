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
import offer1 from "../../assets/OfferComp-1/offer-personal-1.svg";
import offer2 from "../../assets/OfferComp-1/offer-personal-2.svg";
import offer3 from "../../assets/OfferComp-1/offer-personal-3.svg";
import offer4 from "../../assets/OfferComp-1/offer-personal-4.svg";
import offer5 from "../../assets/OfferComp-1/offer-personal-5.svg";
import offer6 from "../../assets/OfferComp-1/offer-personal-6.svg";
import offer7 from "../../assets/OfferComp-1/offer-personal-7.svg";
import comp1 from "../../assets/offer-1.png";

const items = [
  {
    icon: offer1,
    title: "Task Management/ Project Management",
    desc: "Enterprise Data Warehousing: Scalable storage solutions. Data Management: Lifecycle management for data integrity. Data Center Consolidation: Efficient and secure hosting. Secure Data Transmission: Advanced protocols for safety. Real-Time Data Processing: Rapid capture and processing. Video Analytics: Advanced engineering for security. Workflow Software: Integration for streamlined workflows.",
  },
  {
    icon: offer2,
    title: "Calendar and Scheduling",
    desc: "Never miss an important date or deadline again with our smart calendar tool, keeping you on top of your commitments.",
  },
  {
    icon: offer3,
    title: "eDocument Management and eSignature",
    desc: "Custom Servers: Specialized for data and networking. Managed Hybrid Cloud: Flexible management solutions. Unified Software Stack: Custom stack for operations. Backend Operations: Efficient HR, finance, legal, and accounting management.",
  },
  {
    icon: offer4,
    title: "Communication and Collaboration",
    desc: "Machine Learning Models: Frameworks like TensorFlow. Task Automation: Automated processes for efficiency. Cognitive Decision Making: AI-driven insights for decisions.",
  },
  {
    icon: offer5,
    title: "Automation",
    desc: "Machine Learning Models: Frameworks like TensorFlow. Task Automation: Automated processes for efficiency. Cognitive Decision Making: AI-driven insights for decisions.",
  },
  {
    icon: offer6,
    title: "Note making and Knowledge Management",
    desc: "Machine Learning Models: Frameworks like TensorFlow. Task Automation: Automated processes for efficiency. Cognitive Decision Making: AI-driven insights for decisions.",
  },
  {
    icon: offer7,
    title: "Password Management",
    desc: "Machine Learning Models: Frameworks like TensorFlow. Task Automation: Automated processes for efficiency. Cognitive Decision Making: AI-driven insights for decisions.",
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

  return width < 780 ? 212 : 379;
};

const WhatWeOffer = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        color: "#fff",
        padding: { lg: "100px 120px 0px 120px", xs: "48px 20px 0px 20px " },
        overflow: "hidden",
      }}
    >
      <Box sx={{ textAlign: { lg: "center" } }}>
        <Typography
          sx={{
            fontSize: { lg: "42px", xs: "32px" },
            fontWeight: 700,
            lineHeight: { lg: "54.68px", xs: "41.66px" },
          }}
        >
          What we offer
        </Typography>
      </Box>
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
            width: "100%",
          }}
        >
          Personal Productivity and Management Tools
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
            <Grid item md={6}>
              <Box
                sx={{
                  padding: { lg: "40px 0px 0px 0px", xs: "0px" },
                }}
              >
                <Box
                  sx={{
                    padding: { lg: "80px 134px 228px 0px", xs: "32px 84px" },
                  }}
                >
                  <img
                    style={{
                      mixBlendMode: "lighten",
                      height: "auto",
                      width: GetWidth(),
                    }}
                    src={comp1}
                    alt="description"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                // backgroundColor: "#0F1011",
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
                        padding: "20px 20px 8px 20px",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{ marginRight: "16px" }}
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
                        padding: "0px 0px 0px 48px",
                      }}
                    >
                      <Box
                        sx={{
                          padding: {
                            lg: "0px 20px 20px 20px",
                            xs: "0px 12px 12px 12px",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { lg: "16px", xs: "14px" },
                            fontWeight: 400,
                            lineHeight: { lg: "24px", xs: "21px" },
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeOffer;
