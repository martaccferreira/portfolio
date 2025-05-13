import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { ThemeContext } from "~/theme/theme-wrapper";
import { EmojiRain } from "./emoji-rain";
import type { ThemeCharacter } from "~/theme/types";

type Props = {
  title: React.ReactElement;
  cards: {
    id: ThemeCharacter;
    title: string;
    description: string;
    media: string;
    emojis: string[];
  }[];
};

interface EmojiRainItem {
  id: number;
  emoji: string;
  left: number;
  fallDuration: number;
  fallDelay: number;
  startTop: number;
}

export function CharacterPicker({ title, cards }: Props) {
  const { characterName, setCharacterName } = useContext(ThemeContext);
  const [selectedCard, setSelectedCard] = useState(characterName);
  const [emojiRain, setEmojiRain] = useState<EmojiRainItem[]>([]);

  const onCardClick = (character: ThemeCharacter) => {
    setSelectedCard(character);
    setCharacterName(character);

    const clickedCard = cards.find((c) => c.id === character);
    if (!clickedCard) return;

    triggerEmojiRain(clickedCard.emojis);
  };

  const triggerEmojiRain = (emojis: string[]) => {
    const newRain: EmojiRainItem[] = [];

    for (let i = 0; i < 30; i++) {
      newRain.push({
        id: Date.now() + i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        fallDuration: 2 + Math.random() * 2, // 2s - 4s
        fallDelay: Math.random() * 1, // 0s - 1s
        startTop: -15 + Math.random() * 10,
      });
    }

    setEmojiRain(newRain);
  };

  return (
    <>
      {title}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflowX: "auto",
          gap: 2,
          position: "relative",
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            variant="outlined"
            sx={{ width: "246px", flexShrink: 0 }}
          >
            <CardActionArea
              onClick={() => onCardClick(card.id)}
              data-active={selectedCard === card.id ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                loading="lazy"
                height="360"
                image={card.media}
                alt={card.description}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div" align="center">
                  {card.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  color="secondary.contrastText"
                  sx={{ fontStyle: "italic" }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        <EmojiRain items={emojiRain} />
      </Box>
    </>
  );
}
