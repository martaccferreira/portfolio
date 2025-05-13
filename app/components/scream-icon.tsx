import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "assets/theme-icons/s-icon.webp";
import Hover from "assets/theme-icons/s-hover.webp";
import Unselected from "assets/theme-icons/s-unselected.webp";
import Box from "@mui/material/Box";

type Props = {
  isSelected?: boolean;
};

export const ScreamIcon = ({ isSelected }: Props) => {
  const [hover, setHover] = useState(false);

  const getImg = () => {
    if (hover && !isSelected) return Hover;
    return isSelected ? Icon : Unselected;
  };

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        whileHover={{ scale: isSelected ? 1 : 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ flexShrink: 0 }}
      >
        <img src={getImg()} alt="Scream Theme Icon" height={"40px"} />
      </motion.div>
    </Box>
  );
};
