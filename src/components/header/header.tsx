import React from "react";
import logo from '../../images/svg/logo.svg';
import { Link } from "gatsby";
import LangButton from "../langButton/langButton";
import {
  StyledHeader,
  Navigation,
  UserNav,
  UserNavItem,
  LangSwitchers
} from './styled';

interface HeaderProps {
  indexPage: boolean
}

const Header: React.FC<HeaderProps> = ({ indexPage }) => {
  return (
    <StyledHeader>
      <div>
        {
          indexPage ?
          <img src={logo} width={100} height={50} alt="логотип" /> :
          <Link to="/">
            <img src={logo} width={100} height={50} alt="логотип" />
          </Link>
        }
      </div>
      <Navigation>
        <LangSwitchers>
          <LangButton active={true} lang='RU' />
          <LangButton lang="EN"/>
        </LangSwitchers>

        <nav>
          <UserNav>
            <UserNavItem>
              <Link to='/about'>
                об авторе
              </Link>
            </UserNavItem>
            <UserNavItem>
              <Link to='/sound'>
                саунд арт
              </Link>
            </UserNavItem>
            <UserNavItem>
              <Link to='/media'>
                медиа арт
              </Link>
            </UserNavItem>
            <UserNavItem>
              <Link to='/photo'>
                фото
              </Link>
            </UserNavItem>
          </UserNav>
        </nav>
      </Navigation>
    </StyledHeader>
  )
}

export default Header;
