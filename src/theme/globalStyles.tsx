import React from "react";
import { GlobalStyles } from "@mui/material";
import { palette } from './palette';

export const globalStyles = (
  <GlobalStyles
    styles={{
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: palette.customColors.black,
        color: "#fff",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
    }}
  />
);
