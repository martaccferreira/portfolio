import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DrawIcon from "@mui/icons-material/Draw";
import StarIcon from "@mui/icons-material/Star";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(3),
  textAlign: "center",
}));

export function AboutGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)", // Mobile: 2 columns
          sm: "repeat(4, 1fr)", // Desktop: 5 columns
        },
        gridTemplateRows: {
          xs: "auto",
          sm: "repeat(2, auto)", // Two rows, 200px tall each
        },
        gap: 2,
        px: 4,
      }}
    >
      {/* 1 */}
      <Item sx={{ gridColumn: { sm: "1 / span 1" } }}>
        <Typography>
          I’m a{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
            Frontend Engineer
          </Box>{" "}
          at{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
            OLX GROUP
          </Box>
          , a major online marketplace in Europe.
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", fontSize: "0.8rem" }}
        >
          The name originates from OnLine eXchange!
        </Typography>
      </Item>

      {/* 2 */}
      <Item sx={{ textTransform: "uppercase" }}>
        <StarIcon />
        <Typography>
          Proud{" "}
          <Box component="span" sx={{ textDecoration: "line-through" }}>
            survivor?
          </Box>{" "}
          member of the mytical tech industry for{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
            3 years
          </Box>
          .
        </Typography>
      </Item>

      {/* 4 (vertical) */}
      <Item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          gridColumn: { sm: "4" },
          gridRow: { sm: "1 / 3" },
        }}
      >
        <Typography>
          Lover of{" "}
          <Box
            component="span"
            sx={{ fontSize: "1.2rem", fontFamily: "Bebas Neue" }}
          >
            ✨aesthetic✨ UIs,
          </Box>{" "}
          memorable user experiences, and{" "}
          <Box component="span" color="primary.main" sx={{ fontWeight: 800 }}>
            maintainable, scalable, easy-to-read code!
          </Box>{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", fontSize: "0.8rem" }}
        >
          Feel free to pop into any of my public repos and tell me how I can
          optimize!
        </Typography>
      </Item>

      {/* 3 */}
      <Item>
        <DrawIcon />
        <Typography>
          I drew the characters for the{" "}
          <Box component="span" sx={{ fontStyle: "italic" }}>
            Choose Your Character
          </Box>{" "}
          section myself!
        </Typography>
      </Item>

      {/* 5 */}
      <Item
        sx={{
          backgroundColor: "primary.main",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography color="background.paper" sx={{ fontWeight: 600 }}>
          Check out all the technologies I've dabbled in so far in the carousels
          below!
        </Typography>
      </Item>

      {/* 6 */}
      <Item sx={{ gridColumn: { sm: "2 / span 2" } }}>
        <Box>
          <MenuBookIcon />
          <MovieIcon />
        </Box>
        <Typography>
          Despite what this site might suggest, I’m more of a{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
            bookworm
          </Box>{" "}
          than a{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
            cinephile
          </Box>
          .
        </Typography>
        <Typography
          variant="body2"
          color="primary.main"
          sx={{ fontSize: "0.8rem" }}
        >
          And much to my own chagrin, although there's nothing I love more than
          a good pop culture reference, a lot of them go over my head 💀
        </Typography>
      </Item>
    </Box>
  );
}
