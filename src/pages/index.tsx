import React from "react";
import { styled } from "@mui/material";
import MainPage from "./main";
import { HeadFC } from "gatsby";
import { theme } from '../theme/index';
import { globalStyles } from "../theme/globalStyles";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <CssBaseline />
        {globalStyles}
        <MainPage />
      </Wrapper>
    </ThemeProvider>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Alexandeer Pogrebnyak</title>
