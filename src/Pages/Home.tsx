import { Box, Stack } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { forwardRef } from "react";
import MediaPlayer from "../components/MediaPlayer";
import CabInfo from "../components/CabInfo";
import { useTheme } from "@mui/material";
import { ICabInfo, CAB_INFO, DEFAULT_WHATSAPP_MSG } from "../utils/helper";
import DiscountOffer from "../components/DiscountOffer";
import WelcomeHeader from "../components/WelcomeHeader";
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
        <WelcomeHeader />
        <DiscountOffer
          phoneNumber="+7620318531"
          message={DEFAULT_WHATSAPP_MSG}
        />
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
