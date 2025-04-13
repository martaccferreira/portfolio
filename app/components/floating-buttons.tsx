import { IconButton, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeSwitcher } from "./theme-switcher";

export function FloatingButtons() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 32,
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        zIndex: 2000,
        alignItems: "center",
      }}
    >
      <ThemeSwitcher />
      <IconButton size="large" color="primary">
        <GitHubIcon />
      </IconButton>
    </Box>
  );
}
