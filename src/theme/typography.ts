import { palette } from "./palette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  h1 : {
    fontFamily: '"Akony", "Arial", sans-serif',
    fontSize: 32,
    color: palette.customColors.green,
  },

  h2 : {
    fontFamily: '"Akony", "Arial", sans-serif',
    fontSize: 16,
    color: palette.customColors.green
  },

  body1: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    fontSize: 20,
    color: palette.customColors.white
  },

  body2 : {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    fontSize: 24,
    color: palette.customColors.green
  },
};
