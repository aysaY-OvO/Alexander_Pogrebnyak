
declare module "@mui/material/styles" {
  interface Palette {
    customColors?: {
      white: string;
      green: string;
      black: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      white: string;
      green: string;
      black: string;
    };
  }
}

export const palette = {
  customColors: {
    white: "#ffffff",
    green: "#44f308",
    black: "#000000"
  }
}
