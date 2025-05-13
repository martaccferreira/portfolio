import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip, {
  tooltipClasses,
  type TooltipProps,
} from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeSwitcher } from "./theme-switcher";
import { useLocation } from "react-router";

const githubLinks: Record<string, { label: string; link: string }[]> = {
  crabigateur: [
    {
      label: "API",
      link: "https://github.com/martaccferreira/crabigateur-api",
    },
    {
      label: "UI",
      link: "https://github.com/martaccferreira/crabigateur-web",
    },
  ],
  "epub-editor": [
    {
      label: "",
      link: "https://github.com/martaccferreira/mini-epub-editor",
    },
  ],
};

const defaultGithubLink = [
  {
    label: "",
    link: "https://github.com/martaccferreira/portfolio",
  },
];

export function FloatingButtons({
  includeThemeSwitcher = false,
}: {
  includeThemeSwitcher?: boolean;
}) {
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);

  const slug = location.pathname.split("/").filter(Boolean).pop() ?? "";
  const isProjectPage = slug in githubLinks;
  const githubUrls = isProjectPage ? githubLinks[slug] : defaultGithubLink;

  useEffect(() => {
    if (isProjectPage) {
      setShowTooltip(true);
      const timer = setTimeout(() => setShowTooltip(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [slug]);

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
        mt: 3,
      }}
    >
      {includeThemeSwitcher && <ThemeSwitcher />}
      <StyledTooltip
        title="Check out this project's code here!"
        open={showTooltip}
        disableHoverListener
        arrow
        placement="left"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
          {githubUrls.map((url) => (
            <IconButton
              key={url.label}
              size="large"
              color="primary"
              component="a"
              href={url.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              {url.label && (
                <GitBadge
                  badgeContent={url.label}
                  color="primary"
                  overlap="circular"
                />
              )}
            </IconButton>
          ))}
        </Box>
      </StyledTooltip>
    </Box>
  );
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    fontSize: "1rem",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
  },
}));

const GitBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
