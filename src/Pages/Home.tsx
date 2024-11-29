import { Box, Stack } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import React, { forwardRef } from "react";
import MediaPlayer from "../components/MediaPlayer";
import CabInfo from "../components/CabInfo";

const Home: React.FC = forwardRef<HTMLDivElement, object>((props, ref) => {
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
      }}
    >
      <Box sx={{ width: "100%", position: "relative" }}>
        <MediaPlayer mediaURL="/sk-tours-travels/assets/video/sample1.mp4" />
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
        {" "}
        <CabInfo
          imageURL="/sk-tours-travels/assets/images/cab1.jpg"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum."
        />
        <CabInfo
          imageURL="/sk-tours-travels/assets/images/cab2.jpg"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum."
        />
        <CabInfo
          imageURL="/sk-tours-travels/assets/images/cab3.jpg"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum."
        />
      </Stack>
    </Stack>
  );
});

export default Home;
