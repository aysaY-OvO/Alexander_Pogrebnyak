import { styled } from "@mui/material";

export const StyledHeader = styled('header')`
  padding: 39px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Navigation = styled('div')`
  display: flex;
  column-gap: 30px;
`;

export const UserNav = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;

  a:hover {
    background-size: 100% 2px;
  }
`;

export const LangSwitchers = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
`;
