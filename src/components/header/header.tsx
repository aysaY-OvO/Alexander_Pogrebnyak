import React from "react";
import logo from '../../images/svg/logo.svg';
import { Link } from "gatsby";
import LangButton from "../langButton/langButton";
import UserNavItem from "../ui/userNavItem";
import {
  StyledHeader,
  Navigation,
  UserNav,
  LangSwitchers
} from './styled';

interface HeaderProps {
  indexPage: boolean,
  activePage: string
}

const Header: React.FC<HeaderProps> = ({ indexPage, activePage }) => {
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
          {
            activePage === 'about'
            ?
            <UserNav>
              <UserNavItem
                toPage='/about'
                text='об авторе'
                activePage={true}
                />
              <UserNavItem
                toPage='/sound'
                text='саунд арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/media'
                text='медиа арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/photo'
                text='фото'
                activePage={false}
              />
            </UserNav>
            :
            activePage === 'sound' ?
            <UserNav>
              <UserNavItem
                toPage='/about'
                text='об авторе'
                activePage={false}
                />
              <UserNavItem
                toPage='/sound'
                text='саунд арт'
                activePage={true}
              />
              <UserNavItem
                toPage='/media'
                text='медиа арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/photo'
                text='фото'
                activePage={false}
              />
            </UserNav>
            :
            activePage === 'media'
            ?
            <UserNav>
              <UserNavItem
                toPage='/about'
                text='об авторе'
                activePage={false}
                />
              <UserNavItem
                toPage='/sound'
                text='саунд арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/media'
                text='медиа арт'
                activePage={true}
              />
              <UserNavItem
                toPage='/photo'
                text='фото'
                activePage={false}
              />
            </UserNav>
            :
            activePage === 'photo'
            ?
            <UserNav>
              <UserNavItem
                toPage='/about'
                text='об авторе'
                activePage={false}
                />
              <UserNavItem
                toPage='/sound'
                text='саунд арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/media'
                text='медиа арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/photo'
                text='фото'
                activePage={true}
              />
            </UserNav>
            :
            <UserNav>
              <UserNavItem
                toPage='/about'
                text='об авторе'
                activePage={false}
                />
              <UserNavItem
                toPage='/sound'
                text='саунд арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/media'
                text='медиа арт'
                activePage={false}
              />
              <UserNavItem
                toPage='/photo'
                text='фото'
                activePage={false}
              />
            </UserNav>
          }
        </nav>
      </Navigation>
    </StyledHeader>
  )
}

export default Header;
