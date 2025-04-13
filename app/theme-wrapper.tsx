import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {
  useState,
  useMemo,
  createContext,
  type SetStateAction,
  type Dispatch,
  useEffect,
} from "react";
import {
  meanGirlsThemeOptions,
  screamThemeOptions,
  ThemeNames,
} from "./themes";

interface ThemeNameContextType {
  themeName: ThemeNames;
  setThemeName: Dispatch<SetStateAction<ThemeNames>>;
}

export const ThemeNameContext = createContext({} as ThemeNameContextType);

// TODO: save in session cookies

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState(ThemeNames.MeanGirls);

  const theme = useMemo(() => {
    return createTheme(
      themeName === ThemeNames.MeanGirls
        ? meanGirlsThemeOptions
        : screamThemeOptions
    );
  }, [themeName]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeNameContext.Provider value={{ themeName, setThemeName }}>
        <CssBaseline />
        {children}
      </ThemeNameContext.Provider>
    </ThemeProvider>
  );
}
