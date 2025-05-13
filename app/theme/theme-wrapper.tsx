import { useMemo, createContext, useState } from "react";
import { meanGirlsThemeOptions, screamThemeOptions } from "./themes";
import { ThemeNames, type ThemeCharacter } from "./types";
import { usePersistentThemeSettings } from "./use-theme-settings";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
  themeName: ThemeNames;
  setThemeName: (newThemeName: ThemeNames) => void;
  characterName: string;
  setCharacterName: (newCharacterName: ThemeCharacter) => void;
  notifySectionsLoaded: () => void;
  isThemeLoading: boolean;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [settings, setSettings, settingsLoading] = usePersistentThemeSettings();
  const [isThemeLoading, setIsThemeLoading] = useState(false);
  const [pendingThemeName, setPendingThemeName] = useState<ThemeNames | null>(
    null
  );

  const { themeName, characters } = settings;

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

  const characterName = characters?.[themeName] ?? "";

  const setThemeName = (newThemeName: ThemeNames) => {
    if (newThemeName !== themeName) {
      setIsThemeLoading(true);
      setPendingThemeName(newThemeName);
      setSettings((prev: any) => ({
        ...prev,
        themeName: newThemeName,
      }));
    }
  };

  const setCharacterName = (newCharacterName: ThemeCharacter) => {
    setSettings((prev: any) => ({
      ...prev,
      characters: {
        ...prev.characters,
        [themeName]: newCharacterName,
      },
    }));
  };

  const notifySectionsLoaded = () => {
    setIsThemeLoading(false);
    setPendingThemeName(null);
  };

  const contextValue = useMemo(
    () => ({
      themeName,
      setThemeName,
      characterName,
      setCharacterName,
      notifySectionsLoaded,
      isThemeLoading,
    }),
    [themeName, characterName, isThemeLoading]
  );

  if (settingsLoading) {
    return (
      <ThemeProvider theme={createTheme()}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            bgcolor: "background.default",
          }}
        >
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading Settings...</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
