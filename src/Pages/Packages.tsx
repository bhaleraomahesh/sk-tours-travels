import { Box, Paper, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { forwardRef } from "react";
import { useTheme } from "@mui/material";
import {
  ITourPackage,
  COMMERCIAL_TOUR_PACKAGES,
  HOLIDAY_TOUR_PACKAGES,
  DEVOTIONAL_TOUR_PACKAGES,
} from "../utils/helper";
import PackageCard from "../components/PackageCard";

interface IPackage {
  phoneNumber: string;
}
const Packages = forwardRef<HTMLDivElement, IPackage>((props, ref) => {
  const theme = useTheme(); // Access the theme values
  const { phoneNumber } = props;
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
            Our Packages
          </Typography>

          <Box sx={{ mb: theme.spacing(7) }}>
            <Typography variant="h4" sx={{ mb: theme.spacing(1) }}>
              Airport Transfer
            </Typography>
            {/* Horizontal Scroll Container */}
            <Box
              sx={{
                display: "flex",
                overflowX: "auto", // Enable horizontal scrolling
                gap: theme.spacing(4), // Space between cards
                pt: theme.spacing(2), // Optional for better visual space at the bottom
                pb: theme.spacing(2), // Optional for better visual space at the bottom
              }}
            >
              {COMMERCIAL_TOUR_PACKAGES.map(
                (packageItem: ITourPackage, index) => (
                  <PackageCard
                    package={packageItem}
                    key={index}
                    phoneNumber={phoneNumber}
                  />
                )
              )}
            </Box>
          </Box>

          <Box sx={{ mb: theme.spacing(7) }}>
            <Typography variant="h4" sx={{ mb: theme.spacing(1) }}>
              Holiday Packages
            </Typography>
            {/* Horizontal Scroll Container */}
            <Box
              sx={{
                display: "flex",
                overflowX: "auto", // Enable horizontal scrolling
                gap: theme.spacing(4), // Space between cards
                pt: theme.spacing(2), // Optional for better visual space at the bottom
                pb: theme.spacing(2), // Optional for better visual space at the bottom
              }}
            >
              {HOLIDAY_TOUR_PACKAGES.map((packageItem: ITourPackage, index) => (
                <PackageCard
                  package={packageItem}
                  key={index}
                  phoneNumber={phoneNumber}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: theme.spacing(7) }}>
            <Typography variant="h4" sx={{ mb: theme.spacing(1) }}>
              Devotional Packages
            </Typography>
            {/* Horizontal Scroll Container */}
            <Box
              sx={{
                display: "flex",
                overflowX: "auto", // Enable horizontal scrolling
                gap: theme.spacing(4), // Space between cards
                pt: theme.spacing(2), // Optional for better visual space at the bottom
                pb: theme.spacing(2), // Optional for better visual space at the bottom
              }}
            >
              {DEVOTIONAL_TOUR_PACKAGES.map(
                (packageItem: ITourPackage, index) => (
                  <PackageCard
                    package={packageItem}
                    key={index}
                    phoneNumber={phoneNumber}
                  />
                )
              )}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
});

export default Packages;
