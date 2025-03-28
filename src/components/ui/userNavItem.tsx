import React from "react";
import { Link } from "gatsby";
import { styled } from "@mui/material";

interface UserNavItemProps {
  toPage: string,
  text: string,
  activePage: boolean
}

const UserNavItem: React.FC<UserNavItemProps> = ({ toPage, text, activePage }) => {
  const StyledNavItem = styled('li')<{activePage: boolean}>(({ theme, activePage }) => ({
    fontSize: 24,
    color: theme.palette.customColors?.green,
    boxShadow: `inset 1px 0 0 0 ${theme.palette.customColors?.green}`,
    padding: '10px 15px',

    a: {
      textDecoration: 'none',
      backgroundImage: `linear-gradient(${theme.palette.customColors?.green}, ${theme.palette.customColors?.green})`,
      backgroundPosition: '0% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: activePage ? '100% 2px' : '0% 2px',
      transition: 'background-size .3s',
      cursor: activePage ? 'default' : 'pointer',
      pointerEvents: activePage ? 'none' : 'default'
    }
  }));


  return(
    <StyledNavItem activePage={activePage}>
      <Link to={toPage}>
        {text}
      </Link>
    </StyledNavItem>
  )
};

export default UserNavItem;
