import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Your primary color
    },
    secondary: {
      main: "#ffffff", // Your secondary color
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Your preferred font family
  },
  // Add more theme properties as needed
});

export default theme;
