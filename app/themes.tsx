import type { ThemeOptions } from "@mui/material";

export enum ThemeNames {
  MeanGirls = "mean-girls",
  Scream = "scream",
}

export const screamThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#000",
      paper: "#121212",
    },
    primary: {
      main: "#D32F2F",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#757575",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FF5252",
    },
    warning: {
      main: "#FF9800",
    },
    info: {
      main: "#64B5F6",
    },
    success: {
      main: "#81C784",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Bebas Neue, sans-serif",
      fontWeight: 400,
      fontSize: "4rem",
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: "Bebas Neue, sans-serif",
      fontWeight: 400,
      fontSize: "3.5rem",
    },
    h3: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
};

export const meanGirlsThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#FF69B4",
      paper: "#fd51af",
    },
    primary: {
      main: "#ffb2dc",
      contrastText: "#fff0f6",
    },
    secondary: {
      main: "#9B59B6",
      contrastText: "#fff",
    },
    error: {
      main: "#E53935",
    },
    warning: {
      main: "#F39C12",
    },
    info: {
      main: "#5DADE2",
    },
    success: {
      main: "#58D68D",
    },
  },
  typography: {
    fontFamily: "League Spartan, sans-serif",
    h1: {
      fontWeight: 400,
      textTransform: "uppercase",
      fontSize: "4rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "3.5rem",
    },
    h3: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
      fontSize: "1rem",
    },
    button: {
      textTransform: "uppercase",
      fontWeight: 500,
    },
  },
};
