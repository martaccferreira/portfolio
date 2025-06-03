import { useEffect, useState } from "react";
import {
  ThemeNames,
  type CharacterSettings,
  defaultCharacterSettings,
} from "./types";

export function useThemeNameSettings() {
  const [settings, setSettings] = useState<ThemeNames>(ThemeNames.MeanGirls);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme-name");
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch {
        setSettings(ThemeNames.MeanGirls);
      }
    }
    setLoading(false);
  }, []);

  const updateSettings = (theme: ThemeNames) => {
    setSettings((_) => {
      localStorage.setItem("theme-name", JSON.stringify(theme));
      return theme;
    });
  };

  return [settings, updateSettings, loading] as const;
}

export function useCharacterSettings() {
  const [characters, setCharacters] = useState<CharacterSettings>(
    defaultCharacterSettings
  );

  useEffect(() => {
    const stored = localStorage.getItem("character-settings");
    if (stored) {
      try {
        setCharacters(JSON.parse(stored));
      } catch {
        setCharacters(defaultCharacterSettings);
      }
    }
  }, []);

  const updateCharacters = (
    updater: (prev: CharacterSettings) => CharacterSettings
  ) => {
    setCharacters((prev) => {
      const updated = updater(prev);
      localStorage.setItem("character-settings", JSON.stringify(updated));
      return updated;
    });
  };

  return [characters, updateCharacters] as const;
}
