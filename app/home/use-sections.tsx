import { useContext, useEffect, useRef, useState } from "react";
import { ThemeNames } from "../theme/types";
import { ThemeContext } from "~/theme/theme-wrapper";
import { usePersistentThemeSettings } from "~/theme/use-theme-settings";

export function useSections() {
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const [sections, setSections] = useState<null | ReturnType<any>>(null);
  const { themeName, notifySectionsLoaded } = useContext(ThemeContext);
  const [, , settingsLoading] = usePersistentThemeSettings();

  useEffect(() => {
    if (settingsLoading) {
      return; // Don't load sections until settings are loaded
    }

    async function loadSections() {
      if (themeName === ThemeNames.MeanGirls) {
        const mod = await import("./mean-girls-sections");
        setSections(mod.meanGirlsSections(projectsRef, contactRef));
      } else {
        const mod = await import("./scream-sections");
        setSections(mod.screamSections(projectsRef, contactRef));
      }
      notifySectionsLoaded();
    }

    setSections(null);
    loadSections();
  }, [themeName, settingsLoading, notifySectionsLoaded]);

  return { sections };
}
