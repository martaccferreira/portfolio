import { motion } from "framer-motion";
import ScreamIcon from "assets/theme-icons/scream.webp";
import MeanGirlsIcon from "assets/theme-icons/mean-girls.webp";
import { ThemeNames } from "~/theme/types";

type Props = {
  isSelected?: boolean;
  theme: ThemeNames;
};

const buttonThemeIcon = {
  [ThemeNames.Scream]: ScreamIcon,
  [ThemeNames.MeanGirls]: MeanGirlsIcon,
};

const buttonFilter = {
  [ThemeNames.Scream]: "brightness(0) saturate(0%) invert(0%)",
  [ThemeNames.MeanGirls]:
    "invert(48%) sepia(0%) saturate(0%) hue-rotate(344deg) brightness(97%) contrast(89%)",
};

export const ThemeIcon = ({ isSelected, theme }: Props) => {
  const getFilter = () => {
    return isSelected ? "none" : buttonFilter[theme]; // #FF1486
  };

  return (
    <motion.img
      src={buttonThemeIcon[theme]}
      alt="Scream Theme Icon"
      height="40px"
      initial={{
        scale: 1,
        filter: getFilter(),
      }}
      whileHover={{
        scale: isSelected ? 1 : 1.1,
        filter: getFilter(),
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        display: "block",
        flexShrink: 0,
        willChange: "transform, filter",
      }}
    />
  );
};
