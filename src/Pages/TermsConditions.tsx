import { Box, Paper, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { forwardRef } from "react";
import { useTheme } from "@mui/material";

const TermsConditions = forwardRef<HTMLDivElement, object>((_, ref) => {
  const theme = useTheme(); // Access the theme values

  return (
    <Box
      component="section"
      sx={{
        width: "100%", // Ensure the Stack takes full width
        pr: theme.spacing(2),
        pl: theme.spacing(2),
        pb: theme.spacing(2),
      }}
    >
      <Paper
        ref={ref}
        sx={{
          flex: 1, // Ensures equal width in row layout (50% each)
          p: theme.spacing(2),

          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          height: "auto",
          width: "100%",
        }}
        elevation={3}
      >
        <Box component="section" sx={{ width: "100%", height: "auto" }}>
          <Typography variant="h3" sx={{ mb: theme.spacing(2) }}>
            Terms And Conditions
          </Typography>
          <Typography>
            <ul>
              <li>
                <Typography variant="body1" component="span">
                  Cancellation Policy: If you cancel your trip at least 24 hours
                  before the scheduled departure, a cancellation fee of 25% will
                  apply.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  Pricing: The quoted price includes one pickup and one
                  drop-off.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  Important Reminder: Please ensure that you take your luggage
                  and valuable items with you before being dropped off.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  No Smoking or Drinking: Smoking and drinking are not allowed.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  No Pets Allowed: Pets are not permitted.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  Payment: The remaining balance must be paid directly to SK
                  Travels upon completion of the trip.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  All content provided on this website is for informational
                  purposes only.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  We reserve the right to update or modify these Terms and
                  Conditions at any time.
                </Typography>
              </li>
            </ul>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
});

export default TermsConditions;
