import { useEffect, useState } from "react";
import { defaultThemeSettings, type ThemeSettings } from "./types";

export function usePersistentThemeSettings() {
  const [settings, setSettings] = useState<ThemeSettings>(defaultThemeSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme-settings");
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch {
        setSettings(defaultThemeSettings);
      }
    }
    setLoading(false);
  }, []);

  const updateSettings = (updater: (prev: ThemeSettings) => ThemeSettings) => {
    setSettings((prev) => {
      const updated = updater(prev);
      localStorage.setItem("theme-settings", JSON.stringify(updated));
      return updated;
    });
  };

  return [settings, updateSettings, loading] as const;
}
