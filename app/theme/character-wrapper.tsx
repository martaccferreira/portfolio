import { useMemo, createContext, useContext } from "react";
import { type ThemeCharacter } from "./types";
import { useCharacterSettings } from "./use-theme-settings";
import { ThemeContext } from "./theme-wrapper";

interface CharacterContextType {
  characterName: string;
  setCharacterName: (newCharacterName: ThemeCharacter) => void;
}

export const CharacterContext = createContext({} as CharacterContextType);

export function CharacterWrapper({ children }: { children: React.ReactNode }) {
  const { themeName } = useContext(ThemeContext);
  const [characters, updateCharacters] = useCharacterSettings();

  const characterName = characters?.[themeName] ?? "";

  const setCharacterName = (newCharacterName: ThemeCharacter) => {
    updateCharacters((prev: any) => ({
      ...prev,
      [themeName]: newCharacterName,
    }));
  };

  const contextValue = useMemo(
    () => ({
      characterName,
      setCharacterName,
    }),
    [characterName]
  );

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
}
