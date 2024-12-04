import { Box, Paper, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { forwardRef } from "react";
import { useTheme } from "@mui/material";

const SKAdvantages = forwardRef<HTMLDivElement, object>((_, ref) => {
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
            Our Unique Benefits
          </Typography>
          <Typography>
            <ul>
              <li>
                <Typography variant="body1" component="span">
                  Trusted and experienced drivers ensuring safety.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  Convenient door-to-door service.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  Real-time GPS tracking for added security.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  24/7 availability and customer support.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  Toll and parking fees included.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  No waiting charges, as per prior communication.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  No extra charges for additional kilometers within a specified
                  limit..
                </Typography>
              </li>
            </ul>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
});

export default SKAdvantages;
