import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { forwardRef } from "react";
import MediaPlayer from "../components/MediaPlayer";
import CabInfo from "../components/CabInfo";
import { useTheme } from "@mui/material";
import { ICabInfo, CAB_INFO } from "../utils/helper";

const Home = forwardRef<HTMLDivElement, object>((_, ref) => {
  const theme = useTheme(); // Access the theme values

  return (
    <Stack
      ref={ref}
      component="section"
      direction="column" // Default to column on small screens (xs), row on larger screens (sm+)
      justifyContent="start"
      alignItems="stretch"
      spacing={theme.spacing(3)}
      sx={{
        width: "100%", // Ensure the Stack takes full width
        pb: theme.spacing(2),
      }}
    >
      <Box sx={{ width: "100%", position: "relative" }}>
        <MediaPlayer mediaURL="/sk-tours-travels/assets/video/sktourvideo.mp4" />
      </Box>

      <Stack
        ref={ref}
        component="section"
        direction="column" // Default to column on small screens (xs), row on larger screens (sm+)
        justifyContent="start"
        alignItems="stretch"
        spacing={theme.spacing(3)}
        sx={{
          width: "100%", // Ensure the Stack takes full width
          pr: theme.spacing(2),
          pl: theme.spacing(2),
        }}
      >
        <Paper
          sx={{
            flex: 1, // Ensures equal width in row layout (50% each)
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            height: "auto",
            width: "100%",
            padding: theme.spacing(2),
            mb: 0,
          }}
          elevation={3}
        >
          <Typography variant="h3" sx={{ mb: 0 }}>
            Why Choose Us
          </Typography>
          <Divider />
          {CAB_INFO?.map((cab: ICabInfo) => (
            <CabInfo
              key={cab.title}
              image={cab.image}
              heading={cab.title}
              description={cab.description}
            />
          ))}
        </Paper>
      </Stack>
    </Stack>
  );
});

export default Home;
