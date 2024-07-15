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
import workflow1 from "../../assets/workflow-1.svg";
import workflow2 from "../../assets/workflow-2.svg";
import workflow3 from "../../assets/workflow-3.svg";
import workflow4 from "../../assets/workflow-4.svg";
import workflow5 from "../../assets/workflow-5.svg";
import comp2 from "../../assets/offer-2.png";

const items = [
  {
    icon: workflow1,
    title: "Financial Management",
    desc: [
      {
        descTitle: "Accounting",
        description:
          "Simplifying your finances with our innovative Accounting service-effortless book keeping that lets you focus on what you do best.",
      },
      {
        descTitle: "Budgeting and Forecasting",
        description:
          "Make informed decisions and plan for the future with our intuitive Budgeting and Forecasting tools, designed to enhance your financial strategy",
      },
      {
        descTitle: "Financial Reporting",
        description:
          "Gain clear, actionable insights with our Financial Reporting service, delivering precise data to drive your business growth",
      },
      {
        descTitle: "Expense Management",
        description:
          "Keep your costs under control with our streamlined Expense Management solutions-track, manage, and save, all in one place.",
      },
      {
        descTitle: "Tax Management",
        description:
          "Simplify your taxes with our expert Tax Management service-ensure accuracy, optimize your returns, and keep your business on track",
      },
    ],
  },
  {
    icon: workflow2,
    title: "Human Resource Management",
    desc: [
      {
        descTitle: "Employee Records Management",
        description:
          "Simplify your HR tasks with our Employee Records Management-keeping your employee info tidy and accessible.",
      },
      {
        descTitle: "Payroll Management",
        description:
          "Make payroll simple and stress-free with our accurate, timely, and hassle-free payroll processing for your growing business.",
      },
      {
        descTitle: "Recruitment and Onboarding",
        description:
          "Supercharge your hiring process with our Recruitment and Onboarding service-bring top talent on board with ease and speed",
      },
      {
        descTitle: "Time and Attendance Tracking",
        description:
          "Track work hours with ease using our Time and Attendance Tracking-boost productivity and ensure everyone is on the clock, worry-free.",
      },
      {
        descTitle: "Performance Tracking",
        description:
          "Elevate your team's performance with our Performance Tracking-clear objectives, ongoing feedback, and a pathway to success",
      },
    ],
  },
  {
    icon: workflow3,
    title: "Supply Chain Management",
    desc: [
      {
        descTitle: "Supply Chain Planning",
        description:
          "Optimize your supply chain with advanced planning tools to boost efficiency and cut costs",
      },
      {
        descTitle: "Demand Forecasting",
        description:
          "Stay ahead of the curve with our futuristic demand forecasting, ensuring you're always ahead of demand",
      },
      {
        descTitle: "Inventory Management",
        description:
          "Streamline your inventory processes to minimize stockouts and overstock, maximizing profitability.",
      },
      {
        descTitle: "Supplier Relationship Management",
        description:
          "Build strong supplier relationship to ensure reliable and cost-effective sourcing.",
      },
      {
        descTitle: "Transportation Management",
        description:
          "Simplifying logistics with our transportation management system, reducing delivery times and operational costs.",
      },
      {
        descTitle: "Warehouse Management",
        description:
          "Streamline your storage space with our innovative management tools, maling every inch of your warehouse work smarter.",
      },
    ],
  },
  {
    icon: workflow4,
    title: "Business Intelligence (BI) and Analytics",
    desc: [
      {
        descTitle: "Data Warehousing",
        description:
          "Keep your data organized and accessible with our state-of-the-art warehousing solutions, driving smarter business decisions",
      },
      {
        descTitle: "Data Visualization",
        description:
          "Make data-driven decisions easier with our engaging visual tools, transforming numbers into clear visuals",
      },
      {
        descTitle: "Predictive Analytics",
        description:
          "Anticipate market shifts and customer needs with our powerful predictive analytics, keeping you one step ahead.",
      },
      {
        descTitle: "Reporting Tools",
        description:
          "Get precise, customizable reports with our state-of-the-art tools, simplifying data analysis and decision-making.",
      },
    ],
  },
  {
    icon: workflow5,
    title: "Customer Relationship Management (CRM)",
    desc: [
      {
        descTitle: "Sales Force Automation",
        description:
          "Empower your sales team with our automation tools, turning prospects into customers faster than ever.",
      },
      {
        descTitle: "Customer Acquisition",
        description:
          "Get more customers on board with our effective acquisition solutions, turning prospects into loyal clients.",
      },
      {
        descTitle: "Customer Service and Ticketing Support",
        description:
          "Enhance your support service with our comprehensive ticketing tools, ensuring every issue is addressed promptly.",
      },
      {
        descTitle: "Marketing Automation",
        description:
          "Automate your marketing efforts with our smart solutions, reaching the right audience at the right time.",
      },
      {
        descTitle: "Campaign Management",
        description:
          "Manage and optimize your marketing campaigns with ease, ensuring maximum impact and ROI.",
      },
      {
        descTitle: "Email Marketing",
        description:
          "Engage your audience with targeted email campaigns, driving conversions and building loyalty.",
      },
      {
        descTitle: "Social Media Marketing",
        description:
          "Amplify your brand's presence with our social media marketing tools, reaching and engaging your audience.",
      },
      {
        descTitle: "Lead Management",
        description:
          "Optimize your lead management process, ensuring no opportunity slipd through the cracks.",
      },
      {
        descTitle: "Contact Management",
        description:
          "Keep all your customer information organized and accessible, improving communication and relationships",
      },
      {
        descTitle: "Customer Analytics",
        description:
          "Dive deep into customer data with our powerful analytics, uncovering insights that drive smarter decisions.",
      },
      {
        descTitle: "Social CRM",
        description:
          "Optimize your social interactions with our Social CRM solutions, creatung meaningful customer connections.",
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

const Workflow = () => {
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
          Workflow Solutions
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
                          lg: "20px 20px 0px 20px",
                          xs: "12px 20px 16px 20px",
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
                          lineHeight: "26.04px",
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
                        padding: "0px 20px 0px 40px",
                      }}
                    >
                      <Box
                        sx={{
                          padding: {
                            lg: "0px 0px 20px 20px",
                            xs: "0px 0px 20px 24px",
                          },
                        }}
                      >
                        <ul>
                          {item.desc.map((i, idx) => (
                            <Box
                              className="workflowAccordion"
                              sx={{ padding: { lg: "16px 0px 0px 0px" } }}
                            >
                              <li key={idx}>
                                <Typography
                                  sx={{
                                    fontSize: { lg: "18px", xs: "14px" },
                                    fontWeight: 700,
                                    lineHeight: "21px",
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
                                  paddingTop: "4px",
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
            <Grid item md={6} sx={{ order: { xs: -1, md: 0 } }}>
              <Box
                sx={{
                  padding: { lg: "40px 0px 0px 0px", xs: "0px" },
                }}
              >
                <Box
                  sx={{
                    padding: { lg: "160px 0px 0px 134px", xs: "32px 71px" },
                  }}
                >
                  <img
                    style={{
                      mixBlendMode: "lighten",
                      height: "auto",
                      width: GetWidth(),
                    }}
                    src={comp2}
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

export default Workflow;
