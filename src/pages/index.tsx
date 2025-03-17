import React from "react";
import MainPage from "./main/main";
import { HeadFC } from "gatsby";
import { theme } from '../theme/index';
import { globalStyles } from "../theme/globalStyles";
import { CssBaseline, ThemeProvider } from "@mui/material";

const IndexPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <MainPage />
    </ThemeProvider>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
