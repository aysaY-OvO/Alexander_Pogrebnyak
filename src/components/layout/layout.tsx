import React, { ReactElement } from "react";
import { theme } from "../../theme";
import { globalStyles } from "../../theme/globalStyles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { styled } from "@mui/material";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

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
