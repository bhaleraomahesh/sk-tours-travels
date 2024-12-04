// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Define your theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ffffff", // white
    },
    background: {
      default: "#f4f4f4", // Light grey background
      // paper: "#000000",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
      color: "#1976d2",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    h3: {
      fontWeight: 700,
      color: "#1976d2",
      fontSize: "1.5rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.0rem",
    },
  },
  spacing: 8, // Default spacing unit (multiples of 8px)
  shape: {
    borderRadius: 8, // Rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Global button border-radius
        },
      },
    },
  },
});

export default theme;
