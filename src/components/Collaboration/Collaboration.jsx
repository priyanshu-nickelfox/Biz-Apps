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
import collab1 from "../../assets/collab-1.svg";
import collab2 from "../../assets/collab-2.svg";
import comp3 from "../../assets/offer-3.png";



const items = [
  {
    icon: collab1,
    title: "Content Management",
    desc: [
      {
        descTitle: "Document Management",
        description:
          "Keep your documents organized and accessible, ensuring your team always has what they need at their fingertips.",
      },
      {
        descTitle: "Web Content Management",
        description:
          "Take control of your website content with our user-friendly management system, making updates quick and easy.",
      },
      {
        descTitle: "Digital Asset Management",
        description:
          "Organize and manage your digital assets with ease, ensuring your team has access to the right files at the right time.",
      },
      {
        descTitle: "Record Management",
        description:
          "Manage your records effortlessly, maintaining compliance and enhancing operational efficiency.",
      },
    ],
  },
  {
    icon: collab2,
    title: "Collaboration and Communication",
    desc: [
      {
        descTitle: "Email",
        description:
          "Elevate your business communication with our poerful Email service, ensuring secure, professional, and efficient correspondence",
      },
      {
        descTitle: "Instant Messaging",
        description:
          "Enhance team synergy with our Instant Messaging tool, providing fast, secure, and real-time collaboration.",
      },
      {
        descTitle: "Video Conferencing",
        description:
          "Connect effortlessly with our high-quality Video Conferencing, making virtual meetings smooth and productive from anywhere.",
      },
      {
        descTitle: "Project Collaboration Tools",
        description:
          "Accelerate your projects with our dynamic Project Collaboration Tools, promoting smooth teamwork and efficient project tracking.",
      },
      {
        descTitle: "Team Management Software",
        description:
          "Optimize team performance with our innovative Team Management Software, simplifying coordination and enhancing productivity",
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

  return width < 780 ? 329 : 379;
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

const Collaboration = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        color: "#fff",
        padding: { lg: "100px 120px 0px 120px", xs: "0px 20px " },
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
          Collaboration Apps
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
                    padding: { lg: "80px 134px 0px 0px", xs: "32px 89px" },
                  }}
                >
                  <img
                    style={{
                      mixBlendMode: "lighten",
                      height: "auto",
                      width: GetWidth(),
                    }}
                    src={comp3}
                    alt="description"
                  />
                </Box>
              </Box>
            </Grid>
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
                          //   xs: "12px 20px 16px 20px",
                        },
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{ marginRight: "16px",width:iconWidth() }}
                        
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
                        padding: { lg: "0px 20px 0px 40px", xs: "0px 32px" },
                      }}
                    >
                      <Box sx={{ padding: "0px 0px 20px 20px" }}>
                        <ul>
                          {item.desc.map((i, idx) => (
                            <Box>
                              <li key={idx}>
                                <Typography
                                  sx={{
                                    fontSize: { lg: "18px", xs: "12.02px" },
                                    fontWeight: 700,
                                    lineHeight: { lg: "27px", xs: "18.03px" },
                                    // paddingTop: '16px'
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
                                  padding: "4px 0px 16px 0px ",
                                }}
                              >
                                {i.description}
                              </Typography>
                            </Box>
                          ))}
                        </ul>
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

export default Collaboration;
