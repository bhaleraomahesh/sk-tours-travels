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
      color: "#1976d2",
      fontSize: "1.5rem",
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
