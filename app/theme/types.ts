export enum ThemeNames {
  MeanGirls = "mean-girls",
  Scream = "scream",
}

export enum ScreamCharacters {
  Ghostface = "ghostface",
  Casey = "casey",
  Sidney = "sidney",
}

export enum MeanGirlsCharacters {
  Cady = "cady",
  Regina = "regina",
  Janis = "janis",
}

export type ThemeCharacter = ScreamCharacters | MeanGirlsCharacters;

export type Characters = {
  [ThemeNames.MeanGirls]: MeanGirlsCharacters;
  [ThemeNames.Scream]: ScreamCharacters;
};

export type ThemeSettings = {
  themeName: ThemeNames;
  characters: Characters;
};

export const defaultThemeSettings: ThemeSettings = {
  themeName: ThemeNames.MeanGirls,
  characters: {
    [ThemeNames.MeanGirls]: MeanGirlsCharacters.Regina,
    [ThemeNames.Scream]: ScreamCharacters.Ghostface,
  },
};
