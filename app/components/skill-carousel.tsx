import { Box, Chip } from "@mui/material";
import { keyframes } from "@mui/system";

// Keyframe animations
const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const tech = {
  languages: [
    "TypeScript",
    "JavaScript",
    "Go",
    "HTML/CSS",
    "Postgres",
    "MySQL",
    "Terraform",
    "GraphQL",
  ],
  frameworks: [
    "React",
    "Next.js",
    "Remix",
    "Tailwind",
    "Jest",
    "React Testing Library",
    "Cypress",
    "Storybook",
    "Styled Components",
    "Emotion",
    "Material UI",
    "Ant Design",
  ],
  others: [
    "Git",
    "Scrum",
    "Docker",
    "AWS",
    "Netlify",
    "Jira",
    "Confluence",
    "LaunchDarkly",
    "Webpack",
    "Vite",
    "Sentry",
  ],
};

function InfiniteCarousel({
  items,
  duration = 60,
  reverse = false,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
}) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "40px",
        display: "flex",
        alignItems: "center",
        "&:hover .carousel-content": {
          animationPlayState: "paused",
        },
      }}
    >
      {/* Moving Chips */}
      <Box
        className="carousel-content"
        sx={{
          display: "inline-flex",
          animation: `${
            reverse ? slideRight : slideLeft
          } ${duration}s linear infinite`,
          zIndex: 2,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <Chip
            key={idx}
            label={item}
            color="primary"
            variant="outlined"
            sx={{
              m: 2,
              fontWeight: 500,
              fontSize: "1rem",
            }}
          />
        ))}
      </Box>

      {/* Gradient Fade Masks */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "80px",
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.background.default} 0%, transparent 100%)`,
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "80px",
          background: (theme) =>
            `linear-gradient(to left, ${theme.palette.background.default} 0%, transparent 100%)`,
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}

export function SkillCarousels() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 6 }}>
      <InfiniteCarousel items={tech.languages} duration={50} reverse={false} />
      <InfiniteCarousel items={tech.frameworks} duration={60} reverse={true} />
      <InfiniteCarousel items={tech.others} duration={70} reverse={false} />
    </Box>
  );
}
