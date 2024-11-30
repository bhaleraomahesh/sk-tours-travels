import { Box, Stack } from "@mui/material";
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
      spacing={2}
      sx={{
        width: "100%", // Ensure the Stack takes full width
        pb: theme.spacing(1),
      }}
    >
      <Box sx={{ width: "100%", position: "relative" }}>
        <MediaPlayer mediaURL="/sk-tours-travels/assets/video/sktourvideo.MP4" />
      </Box>
      <Stack
        ref={ref}
        component="section"
        direction="column" // Default to column on small screens (xs), row on larger screens (sm+)
        justifyContent="start"
        alignItems="stretch"
        spacing={2}
        sx={{
          width: "100%", // Ensure the Stack takes full width
        }}
      >
        {CAB_INFO?.map((cab: ICabInfo) => (
          <CabInfo
            key={cab.title}
            image={cab.image}
            heading={cab.title}
            description={cab.description}
          />
        ))}
      </Stack>
    </Stack>
  );
});

export default Home;
