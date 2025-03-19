import React, { ReactElement } from "react";
import { theme } from "../../theme";
import { globalStyles } from "../../theme/globalStyles";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Wrapper } from "./styled";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <CssBaseline />
        {globalStyles}
        {children}
      </Wrapper>
    </ThemeProvider>
  )
};
