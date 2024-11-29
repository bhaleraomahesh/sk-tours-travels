import { Stack } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { ThemeProvider } from "@mui/material/styles";
import DrawerAppBar from "./DrawerAppBar";
import theme from "./styles/Theme/Theme";

import ReactWhatsappButton from "react-whatsapp-button";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Contact from "./Pages/Contact";
import { useRef } from "react";
import { MenuType } from "./utils/helper";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const PrivacyRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Step 2: Function to handle smooth scroll to sections
  const scrollToSection = (section: string) => {
    switch (section) {
      case MenuType.Home:
        homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        // window.scrollBy(0, -50);
        break;
      case MenuType.PrivacyPolicy:
        PrivacyRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // window.scrollBy(0, -50);
        break;
      case MenuType.Contact:
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // window.scrollBy(0, -50);
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar handleMenuClick={scrollToSection} />
      <Stack
        direction="column" // Default to column on small screens (xs), row on larger screens (sm+)
        justifyContent="start"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%", // Ensure the Stack takes full width
          mt: theme.spacing(8),
        }}
      >
        <Home ref={homeRef} />
        <Contact ref={contactRef} />
        <PrivacyPolicy ref={PrivacyRef} />

        <ReactWhatsappButton
          countryCode="91"
          phoneNumber="9921142910"
          animated
          message={`Name: \nDate: \nTime:`}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default App;