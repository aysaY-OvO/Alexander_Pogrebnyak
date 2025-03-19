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

export const UserNavItem = styled('li')(({theme}) => ({
  fontSize: 24,
  color: theme.palette.customColors?.green,
  boxShadow: `inset 1px 0 0 0 ${theme.palette.customColors?.green}`,
  padding: '10px 15px',

  a: {
    textDecoration: 'none',
    backgroundImage: `linear-gradient(${theme.palette.customColors?.green}, ${theme.palette.customColors?.green})`,
    backgroundPosition: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 2px',
    transition: 'background-size .3s',
  }
}));

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
