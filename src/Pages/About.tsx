import { Box, Paper, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { forwardRef } from "react";
import { useTheme } from "@mui/material";

const About = forwardRef<HTMLDivElement, object>((_, ref) => {
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
            About Us
          </Typography>
          <Typography>
            SK Tours & Travels - Your Trusted Travel Partner With over 10 years
            of experience in the transport industry, SK Tours & Travels has been
            delivering reliable and safe cab services to customers across the
            region. Having completed number of trips, we pride ourselves on
            punctuality, safety, and customer satisfaction. Our customers trust
            us for our consistent, high-quality service, whether it's for
            business or leisure travel. We have built strong relationships not
            only with individual travelers but also with travel agencies and
            corporate clients. Our transport services extend to IT companies,
            hotel trips, and other professional travel needs. At SK Tours &
            Travels, your journey is in safe hands, and we ensure every trip is
            hassle-free and comfortable. Choose SK Tours & Travels for all your
            transportation needs – where reliability meets customer
            satisfaction!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
});

export default About;
