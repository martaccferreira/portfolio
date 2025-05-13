import IconButton from "@mui/material/IconButton";
import Tooltip, {
  type TooltipProps,
  tooltipClasses,
} from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import { ThemeNames } from "~/theme/types";
import { MeanGirlsIcon } from "./mean-girls-icon";
import { ScreamIcon } from "./scream-icon";
import { ThemeContext } from "~/theme/theme-wrapper";
import { useContext } from "react";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export function ThemeSwitcher() {
  const { themeName, setThemeName } = useContext(ThemeContext);
  return (
    <>
      <LightTooltip title="Mean Girls" placement="left">
        <IconButton
          onClick={() => setThemeName(ThemeNames.MeanGirls)}
          sx={{ borderRadius: 2, padding: 0 }}
        >
          <MeanGirlsIcon isSelected={themeName === ThemeNames.MeanGirls} />
        </IconButton>
      </LightTooltip>

      <LightTooltip title="Scream (1996)" placement="left">
        <IconButton
          onClick={() => setThemeName(ThemeNames.Scream)}
          sx={{ borderRadius: 2, padding: 0 }}
        >
          <ScreamIcon isSelected={themeName === ThemeNames.Scream} />
        </IconButton>
      </LightTooltip>
    </>
  );
}
