import { styled } from "@mui/material";

export const StyledFooter = styled('footer')`
  padding: 29px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  column-gap: 20px;

  a:hover p {
    background-size: 100% 2px;
  }
`;

export const FooterListItem = styled('li')(({theme}) => ({
  display: 'flex',
  columnGap: 10,

  p: {
    color: theme.palette.customColors?.green,
    fontSize: 14,
    margin: 0,

    textDecoration: 'none',
    backgroundImage: `linear-gradient(${theme.palette.customColors?.green}, ${theme.palette.customColors?.green})`,
    backgroundPosition: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 2px',
    transition: 'background-size .3s',
  },

  a: {
    color: theme.palette.customColors?.green,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
  }
}));
