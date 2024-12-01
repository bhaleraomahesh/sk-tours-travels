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
        variant="h1"
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
        Your journey begins here. Enjoy the comfort, convenience, and
        reliability of SK Tours & Travels. Whether it's for business or leisure,
        our premium cabs and experienced drivers are ready to take you wherever
        you need to go.
      </Typography>
      {/* <Button
        variant="contained"
        color="secondary"
        size="large"
        href="/book-now"
        sx={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Book Your Ride Now
      </Button> */}
    </Paper>
  );
};

export default WelcomeHeader;
