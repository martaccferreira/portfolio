import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "~/theme/theme-wrapper";

const links = [
  { label: "home", href: "/" },
  { label: "epub-editor", href: "/epub-editor" },
  { label: "crabigateur", href: "/crabigateur" },
  { label: "olx", href: "/olx" },
];

export function Header({ currentPage }: { currentPage: string }) {
  const { themeName } = useContext(ThemeContext);

  return (
    <Box sx={{ py: 6, display: "flex", justifyContent: "space-between" }}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <img
          src={`/assets/${themeName}/logo.svg`}
          alt="Marta Codes"
          height={"40px"}
        />
      </Link>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        {links
          .filter(({ label }) => label !== currentPage)
          .map((link) => (
            <Link
              key={link.label}
              to={link.href}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              <Typography variant="body1">{link.label}</Typography>
            </Link>
          ))}
      </Box>
    </Box>
  );
}
