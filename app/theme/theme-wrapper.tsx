// ThemeWrapper.tsx
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, createContext } from "react";
import { meanGirlsThemeOptions, screamThemeOptions } from "./themes";
import { defaultThemeSettings, ThemeNames, type ThemeCharacter } from "./types";
import { usePersistentThemeSettings } from "./use-theme-settings";

interface ThemeContextType {
  themeName: ThemeNames;
  setThemeName: (newThemeName: ThemeNames) => void;
  characterName: string;
  setCharacterName: (newCharacterName: ThemeCharacter) => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = usePersistentThemeSettings();

  if (!settings) {
    setSettings(defaultThemeSettings);
  }

  const { themeName, characters } = settings;

  const theme = useMemo(() => {
    return createTheme(
      themeName === ThemeNames.MeanGirls
        ? meanGirlsThemeOptions
        : screamThemeOptions
    );
  }, [themeName]);

  const characterName = characters[themeName];

  const setThemeName = (newThemeName: ThemeNames) => {
    setSettings((prev: any) => ({
      ...prev,
      themeName: newThemeName,
    }));
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

  const contextValue = useMemo(
    () => ({
      themeName,
      setThemeName,
      characterName,
      setCharacterName,
    }),
    [themeName, characterName]
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
