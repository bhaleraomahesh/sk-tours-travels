import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const WelcomeHeader = () => {
  const theme = useTheme(); // Access the theme values

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        backgroundColor: "background.paper",
        textAlign: "center",
        padding: theme.spacing(2),
        width: "100%",
      }}
      elevation={0}
    >
      <Typography
        variant="h3"
        sx={{
          //   fontWeight: "bold",
          color: "primary.main",
          //   marginBottom: 2,
        }}
      >
        Welcome to SK Tours & Travels
      </Typography>
      <Typography
        sx={{
          //   color: "text.secondary",
          marginBottom: 3,
          maxWidth: 700,
        }}
      >
        Quick, Safe, Reliable, and Affordable Airport Transfers – Your Trusted
        Partner, SK Tours & Travels.
      </Typography>
    </Paper>
  );
};

export default WelcomeHeader;
