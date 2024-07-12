import { Grid, Typography } from "@mui/material";

function FooterEnd() {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        backgroundColor: "#272829",
        padding: { lg: "16px 120px", xs: "16px 20px" },
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        style={{
          color: "#757678",
          fontSize: { lg: "0.9rem", xs: "0.75rem" },
          fontWeight: 400,
        }}
      >
        Copyright © 2024 Teche.ai
      </Typography>
      <Typography
        variant="body2"
        style={{
          color: "#757678",
          fontSize: { lg: "0.9rem", xs: "0.75rem" },
          fontWeight: 400,
        }}
      >
        Powered by Nickelfox
      </Typography>
    </Grid>
  );
}

export default FooterEnd;
