import React from "react";
import logo from '../../images/svg/logo.svg';
import { Link } from "gatsby";
import {
  StyledHeader,
  Navigation,
  UserNav
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
        <div className="lang-switch">
          <button>RU</button>
          <button>EN</button>
        </div>

        <nav>
          <UserNav>
            <li>
              <Link to='/about'>
                об авторе
              </Link>
            </li>
            <li>
              <Link to='/sound'>
                саунд арт
              </Link>
            </li>
            <li>
              <Link to='/media'>
                медиа арт
              </Link>
            </li>
            <li>
              <Link to='/photo'>
                фото
              </Link>
            </li>
          </UserNav>
        </nav>
      </Navigation>
    </StyledHeader>
  )
}

export default Header;
