import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const WelcomeHeader = () => {
  const theme = useTheme(); // Access the theme values

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        top: "0%",
        left: "0",
        transform: "translateY(-50%)", // Center text vertically
        whiteSpace: "wrap", // Prevent text wrapping
        color: "white",
        zIndex: 999,
        height: "100%",
        pt: theme.spacing(7),
        animation: "slideIn 2s ease-out forwards", // Apply sliding animation
        "@keyframes slideIn": {
          "0%": {
            transform: "translateY(-100%)", // Start off-screen to the left
          },
          "100%": {
            transform: "translateY(0%)", // Slide into the normal position
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
