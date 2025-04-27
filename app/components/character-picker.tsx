import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import type { ThemeCharacter } from "~/theme/types";
import { ThemeContext } from "~/theme/theme-wrapper";

type Props = {
  title: React.ReactElement;
  cards: {
    id: ThemeCharacter;
    title: string;
    description: string;
    media: string;
  }[];
};

export function CharacterPicker({ title, cards }: Props) {
  const { characterName, setCharacterName } = useContext(ThemeContext);
  const [selectedCard, setSelectedCard] = React.useState(characterName);

  const onCardClick = (character: ThemeCharacter) => {
    setSelectedCard(character);
    setCharacterName(character);
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
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            variant="outlined"
            sx={{ width: "250px", flexShrink: 0 }}
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
                height="194"
                image={card.media}
                alt={card.description}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  color="primary.contrastText"
                >
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
      </Box>
    </>
  );
}
