import { Stack } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { Helmet } from "react-helmet";

import { ThemeProvider } from "@mui/material/styles";
import DrawerAppBar from "./DrawerAppBar";
import theme from "./styles/Theme/Theme";
import Home from "./Pages/Home";
import TermsConditions from "./Pages/TermsConditions";
import About from "./Pages/About";
import SKAdvantages from "./Pages/SKAdvantages";
import { useRef } from "react";
import { DEFAULT_WHATSAPP_MSG, MenuType } from "./utils/helper";
import Packages from "./Pages/Packages";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const TermsConditionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const SKAdvantagesRef = useRef<HTMLDivElement>(null);

  // Step 2: Function to handle smooth scroll to sections
  const scrollToSection = (section: string) => {
    switch (section) {
      case MenuType.Home:
        homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

        break;
      case MenuType.About:
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case MenuType.Packages:
        packagesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case MenuType.TermsConditions:
        TermsConditionsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case MenuType.OurBenefits:
        SKAdvantagesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;
      default:
        break;
    }
    setTimeout(() => {
      window.scrollBy(0, -64);
    }, 1000);
  };

  const showPackages = () => {
    packagesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      window.scrollBy(0, -64);
    }, 1000);
  };
  return (
    <>
      <Helmet>
        <title>SK Tours & Travels</title>
        <meta
          name="description"
          content={`Looking for reliable and affordable cab services in Maharashtra? Our professional taxi service offers safe, convenient, and comfortable transportation across the entire state, from bustling Mumbai to scenic Pune, vibrant Nagpur, and beyond. Whether you need a one-way ride, a round trip, or an airport transfer, our fleet of well-maintained cars and experienced drivers are ready to serve you 24/7.

Our cab services cater to a variety of needs, including:

Airport Transfers: Hassle-free pick-up and drop-off at major airports like Chhatrapati Shivaji Maharaj International Airport (Mumbai) and Pune International Airport.
Outstation Cabs: Comfortable, long-distance taxi rides to popular destinations like Lonavala, Alibaug, Shirdi, and Goa.
Corporate & Business Travel: Punctual, professional rides for meetings, conferences, and business events.
Local Sightseeing: Explore Maharashtra’s top tourist attractions, including the Gateway of India, Elephanta Caves, Ajanta and Ellora Caves, and more.
Wedding and Event Transport: Premium cabs for weddings, parties, and other special occasions.
Why Choose Our Cab Service in Maharashtra?

Affordable Pricing: Competitive rates with no hidden charges.
24/7 Availability: Booking a ride is easy anytime, anywhere.
Safe and Reliable: Fully insured vehicles with trained and experienced drivers.
Clean and Comfortable Cars: Well-maintained and sanitized cabs for a pleasant journey.
Book your ride now and experience the best cab service in Maharashtra with easy online booking, real-time tracking, and excellent customer support. No matter your travel needs, we ensure a smooth and enjoyable ride across Maharashtra.`}
        />
        <meta
          name="keywords"
          content="Cab service in Maharashtra, Taxi service in Maharashtra, Reliable cab service, Airport transfer in Maharashtra, Outstation cabs Maharashtra, Corporate taxi service, Wedding transport service, Safe and reliable cabs, Pune Cab service, Nashik cabs service, shirdi cab service, cab services, transport service, affordable cab services, discount on cab service"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* <meta property="og:url" content="pets.abc" /> */}
        <meta property="og:site_name" content="SK Tours & Travels" />
        <meta property="og:locale" content="en_US" />
        {/* <meta property="og:url" content="https://www.mywebsite.com" /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>
      <ThemeProvider theme={theme}>
        <DrawerAppBar handleMenuClick={scrollToSection} />
        <Stack
          direction="column" // Default to column on small screens (xs), row on larger screens (sm+)
          justifyContent="start"
          alignItems="center"
          spacing={2}
          sx={{
            width: "100%", // Ensure the Stack takes full width
            mt: theme.spacing(7),
            mb: theme.spacing(10),
          }}
        >
          <ScrollToTopButton />

          <Home ref={homeRef} showPackages={showPackages} />
          <About ref={contactRef} />
          <Packages ref={packagesRef} phoneNumber="+917620318531" />
          <SKAdvantages ref={SKAdvantagesRef} />
          <TermsConditions ref={TermsConditionsRef} />
          <Footer />

          <FloatingWhatsAppButton
            phoneNumber="+917620318531"
            message={DEFAULT_WHATSAPP_MSG}
          />
          <FloatingCallButton phoneNumber="+917620318531" />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
