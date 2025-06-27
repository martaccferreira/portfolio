import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MovieIcon from "@mui/icons-material/Movie";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PublicIcon from "@mui/icons-material/Public";
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
          member of the mystical tech industry for{" "}
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
          Addicted to building{" "}
          <Box
            component="span"
            sx={{ fontSize: "1.2rem", fontFamily: "Bebas Neue" }}
          >
            ⚡️snappy frontend interfaces⚡️,
          </Box>{" "}
          joyful user journeys, and{" "}
          <Box component="span" color="primary.main" sx={{ fontWeight: 800 }}>
            crisp, organized code!
          </Box>{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", fontSize: "0.8rem" }}
        >
          Swing by my public repos and drop some ideas to make my code shine
          (✨) brighter!
        </Typography>
      </Item>

      {/* 3 */}
      <Item>
        <PublicIcon />
        <Typography>
          I speak English 🇺🇸, Portuguese 🇵🇹, Japanese 🇯🇵 and I'm learning French
          🇨🇦
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
