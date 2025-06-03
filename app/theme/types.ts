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

export type CharacterSettings = {
  [ThemeNames.MeanGirls]: MeanGirlsCharacters;
  [ThemeNames.Scream]: ScreamCharacters;
};

export const defaultCharacterSettings = {
  [ThemeNames.MeanGirls]: MeanGirlsCharacters.Regina,
  [ThemeNames.Scream]: ScreamCharacters.Ghostface,
};
