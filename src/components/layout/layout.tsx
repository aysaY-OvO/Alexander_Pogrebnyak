import React, { ReactElement } from "react";
import { theme } from "../../theme";
import { globalStyles } from "../../theme/globalStyles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledContainer } from "../../styled/utils/container";
import { styled } from "@mui/material";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <StyledContainer>
          <CssBaseline />
          {globalStyles}
          {children}
        </StyledContainer>
      </Wrapper>
    </ThemeProvider>
  )
};
