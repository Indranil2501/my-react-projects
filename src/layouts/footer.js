import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        My react project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = (props) => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: "10px",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Thank you for visiting my site.</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
