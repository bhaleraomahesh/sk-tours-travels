import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme(); // Access the theme values

  return (
    <Box
      sx={{
        backgroundColor: "background.default", // Background color of the footer
        width: "100%",
        padding: 2,
        mt: theme.spacing(1), // Push the footer to the bottom of the page
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} SK Tours & Travels. All Rights
          Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
