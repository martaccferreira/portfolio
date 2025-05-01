import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router";
import { styled } from "@mui/system";

const items = [
  {
    name: "GitHub",
    href: "https://github.com/martaccferreira",
    icon: <GithubIcon />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/marta-cc-ferreira/",
    icon: <LinkedInIcon />,
  },
];

export function Footer() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            style={{
              textDecoration: "none",
              color: theme.palette.primary.contrastText,
            }}
          >
            {item.icon}
          </Link>
        ))}
      </Box>
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "primary.contrastText", p: 1 }}
      >
        "Mean Girls" and "Scream" (1996) elements are used with homage; all
        associated rights belong to their respective owners. All else &copy;
        2025 martaccferreira
        <Typography
          variant="caption"
          align="center"
          sx={{ display: "block", color: "primary.contrastText", mb: 5 }}
        >
          Shout out to{" "}
          <Link
            to="remix.run"
            target="_blank"
            style={{ color: theme.palette.primary.contrastText }}
          >
            remix.run
          </Link>{" "}
          which heavily inspired the UX/UI for this one!
        </Typography>
      </Typography>
    </>
  );
}
