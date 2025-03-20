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
      "#___gatsby": {
        height: "100%"
      },
      "#gatsby-focus-wrapper": {
        height: "100%"
      },
      body: {
        backgroundColor: palette.customColors.black,
        color: "#fff",
        height: "100vh",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
    }}
  />
);
