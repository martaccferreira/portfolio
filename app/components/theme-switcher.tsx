import {
  Tooltip,
  IconButton,
  styled,
  type TooltipProps,
  tooltipClasses,
} from "@mui/material";
import { ThemeNames } from "~/themes";
import { MeanGirlsIcon } from "./mean-girls-icon";
import { ScreamIcon } from "./scream-icon";
import { ThemeNameContext } from "~/theme-wrapper";
import { useContext } from "react";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export function ThemeSwitcher() {
  const { themeName, setThemeName } = useContext(ThemeNameContext);
  return (
    <>
      <LightTooltip title="Mean Girls" placement="left">
        <IconButton
          onClick={() => setThemeName(ThemeNames.MeanGirls)}
          sx={{
            boxShadow:
              themeName === ThemeNames.MeanGirls ? "0px 0px 8px #fff" : "none",
            borderRadius: 2,
            padding: 0,
          }}
        >
          <MeanGirlsIcon isSelected={themeName === ThemeNames.MeanGirls} />
        </IconButton>
      </LightTooltip>

      <LightTooltip title="Scream (1996)" placement="left">
        <IconButton
          onClick={() => setThemeName(ThemeNames.Scream)}
          sx={{
            boxShadow:
              themeName === ThemeNames.MeanGirls ? "0px 0px 8px #fff" : "none",
            borderRadius: 2,
            padding: 0,
          }}
        >
          <ScreamIcon isSelected={themeName === ThemeNames.Scream} />
        </IconButton>
      </LightTooltip>
    </>
  );
}
