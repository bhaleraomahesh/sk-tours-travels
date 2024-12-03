import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const WelcomeHeader = () => {
  const theme = useTheme(); // Access the theme values

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center text both vertically and horizontally
        fontSize: "24px",
        fontWeight: "bold",
        color: "white",
        whiteSpace: "nowrap", // Prevent text wrapping
        zIndex: 999,
        height: "100%",
        pt: theme.spacing(8),
        animation: "enlargeText 3s ease-out forwards",
        opacity: 0, // Start with opacity 0 to create fade-in effect
        "@keyframes enlargeText": {
          "0%": {
            transform: "translate(-50%, -50%) scale(0.5)", // Start at half the size
            opacity: 0, // Start hidden
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(1.1)", // Slightly enlarge it
            opacity: 1, // Fade in the text
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1)", // Final size
            opacity: 1, // Fully visible
          },
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          color: "secondary.main",
          mb: theme.spacing(2),
          textAlign: "center",
          opacity: 1,
        }}
      >
        Welcome to SK Tours & Travels
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "secondary.main",
          textAlign: "center",
          // fontWeight: "bold",
        }}
      >
        Quick, Safe, Reliable, and Affordable Airport Transfers – Your Trusted
        Partner, SK Tours & Travels.
      </Typography>
    </Box>
  );
};

export default WelcomeHeader;
