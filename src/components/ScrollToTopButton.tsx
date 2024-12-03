import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/system";

const ScrollToTopButton = () => {
  // State to track if the button should be visible
  const [showButton, setShowButton] = useState(false);

  // Monitor the scroll position to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show button after scrolling 300px down
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Only render the button if showButton is true
    showButton && (
      <StyledFab
        color="primary"
        onClick={scrollToTop}
        aria-label="scroll to top"
      >
        <ArrowUpwardIcon />
      </StyledFab>
    )
  );
};

// Styling the Fab button to make it float at the bottom-right corner
const StyledFab = styled(Fab)({
  position: "fixed",
  bottom: "50%",
  right: "20px",
  zIndex: 1002, // Ensures the button is always on top
});

export default ScrollToTopButton;
