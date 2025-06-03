import { useMemo, createContext, useState } from "react";
import { meanGirlsThemeOptions, screamThemeOptions } from "./themes";
import { ThemeNames } from "./types";
import { useThemeNameSettings } from "./use-theme-settings";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
  themeName: ThemeNames;
  setThemeName: (newThemeName: ThemeNames) => void;
  notifySectionsLoaded: () => void;
  isThemeLoading: boolean;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [themeName, updateThemeName, settingsLoading] = useThemeNameSettings();
  const [isThemeLoading, setIsThemeLoading] = useState(false);
  const [pendingThemeName, setPendingThemeName] = useState<ThemeNames | null>(
    null
  );

  const theme = useMemo(() => {
    if (settingsLoading || isThemeLoading || pendingThemeName) {
      return createTheme(); // Minimal fallback theme during loading
    }
    switch (themeName) {
      case ThemeNames.MeanGirls:
        return createTheme(meanGirlsThemeOptions);
      case ThemeNames.Scream:
        return createTheme(screamThemeOptions);
      default:
        return createTheme();
    }
  }, [themeName, settingsLoading, isThemeLoading, pendingThemeName]);

  const setThemeName = (newThemeName: ThemeNames) => {
    if (newThemeName !== themeName) {
      setIsThemeLoading(true);
      setPendingThemeName(newThemeName);
      updateThemeName(newThemeName);
    }
  };

  const notifySectionsLoaded = () => {
    setIsThemeLoading(false);
    setPendingThemeName(null);
  };

  const contextValue = useMemo(
    () => ({
      themeName,
      setThemeName,
      notifySectionsLoaded,
      isThemeLoading: isThemeLoading || settingsLoading,
    }),
    [themeName, isThemeLoading, settingsLoading]
  );

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
