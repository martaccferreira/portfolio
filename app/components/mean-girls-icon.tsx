import { motion } from "framer-motion";
import Icon from "assets/theme-icons/mg-icon.webp";

type Props = {
  isSelected?: boolean;
};

export const MeanGirlsIcon = ({ isSelected }: Props) => {
  const getFilter = () => {
    return isSelected
      ? "none"
      : "invert(48%) sepia(0%) saturate(0%) hue-rotate(344deg) brightness(97%) contrast(89%)";
    // Example for #757575: Add another condition if needed
    // e.g., return "invert(48%) sepia(0%) saturate(0%) hue-rotate(344deg) brightness(97%) contrast(89%)";
  };

  return (
    <motion.div
      whileHover={{
        scale: isSelected ? 1 : 1.1,
        filter: getFilter(),
      }}
      initial={{
        scale: 1,
        filter: getFilter(),
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ flexShrink: 0 }}
    >
      <img
        src={Icon}
        alt="Mean Girls Icon"
        height="40px"
        style={{ display: "block" }}
      />
    </motion.div>
  );
};
