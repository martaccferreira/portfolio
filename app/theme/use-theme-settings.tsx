import { useState, useEffect } from "react";
import { defaultThemeSettings, ThemeNames } from "./types";

interface ThemeSettings {
  themeName: ThemeNames;
  characters: Record<ThemeNames, string>;
}

export function usePersistentThemeSettings() {
  const [settings, setSettings] = useState<ThemeSettings | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("themeSettings");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ThemeSettings;
        setSettings(parsed);
      } catch (err) {
        console.error("Failed to parse theme settings from localStorage:", err);
        setSettings(defaultThemeSettings);
      }
    } else {
      setSettings(defaultThemeSettings);
    }
  }, []);

  useEffect(() => {
    if (settings) {
      localStorage.setItem("themeSettings", JSON.stringify(settings));
    }
  }, [settings]);

  return [settings, setSettings] as const;
}
