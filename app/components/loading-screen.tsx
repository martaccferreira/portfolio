import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/material/styles";
import LoadingIcon from "assets/loader.webp";

const breathingKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  19.51% {
    opacity: 1;
  }
  34.146% {
    opacity: 0.6;
  }
  39% {
    opacity: 0.6;
  }
  53.658% {
    opacity: 0.4;
  }
  58.536% {
    opacity: 0.4;
  }
  65.85% {
    opacity: 0.6;
  }
  70.73% {
    opacity: 0.6;
  }
  85.365% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedBox = styled(Box)({
  animation: `${breathingKeyframes} 2050ms infinite linear`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%", // Optional: makes sure it fills the LoadingScreen container
  flexDirection: "column",
  gap: 4,
});

export function LoadingScreen() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1300, // above all UI
        pointerEvents: "none",
      }}
    >
      <AnimatedBox>
        <img
          alt="Loading Icon"
          src={LoadingIcon}
          style={{ transform: "translateX(-10px)" }}
        />
        {/* <Typography
          sx={{
            fontFamily: "League Spartan",
            color: "#FF69B4",
            fontSize: "1.5rem",
          }}
        >
          loading...
        </Typography> */}
      </AnimatedBox>
    </Box>
  );
}
