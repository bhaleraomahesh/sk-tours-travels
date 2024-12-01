import { Paper, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material";

const DiscountOffer = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        backgroundColor: "primary.main",
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        pt: theme.spacing(2),
        pl: theme.spacing(2),
        pr: theme.spacing(2),
      }}
      elevation={10}
    >
      <Box>
        <Typography variant="h5" color="white">
          Special Offer: 10% Discount
        </Typography>
        <Typography variant="body1" color="white" mt={1}>
          Get 10% off on your first booking with SK Tours & Travels!
        </Typography>
      </Box>
      {/* <Button
        variant="contained"
        color="secondary"
        sx={{ marginLeft: 2 }}
        href="/book-now" // Link to the booking page
      >
        Book Now
      </Button> */}
    </Paper>
  );
};

export default DiscountOffer;
