import React from "react";
import Image from "../ui/image";

import tg from '../../images/svg/telegram.svg';
import email from '../../images/svg/email.svg';
import soundcloud from '../../images/svg/soundcloud.svg';

import {
  StyledFooter,
  FooterList,
  FooterListItem
} from './styled';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterList>
        <FooterListItem>
          <p>Development</p>
          <a href="https://t.me//aysaY_OvO">
            <Image src={tg} width={18} height={18} alt="" />
            <p>@aysaY_OvO</p>
          </a>
        </FooterListItem>
        <FooterListItem>
          <p>UX/UI</p>
          <a href="https://t.me//aspidarch">
            <Image src={tg} width={18} height={18} alt="" />
            <p>@aspidarch</p>
          </a>
        </FooterListItem>
      </FooterList>
      <FooterList>
        <FooterListItem>
          <a href="mailto:iru.sun@gmail.com">
            <Image src={email} width={22} height={18} alt="" />
            <p>iru.sun@gmail.com</p>
          </a>
        </FooterListItem>
        <FooterListItem>
          <a href="https://t.me//Oiloncanvass">
            <Image src={tg} width={18} height={18} alt="" />
            <p>@Oiloncanvass</p>
          </a>
        </FooterListItem>
        <FooterListItem>
          <a href="https://on.soundcloud.com/8r7kQ">
            <Image src={soundcloud} width={27} height={11} alt="" />
            <p>https://on.soundcloud.com/8r7kQ</p>
          </a>
        </FooterListItem>
      </FooterList>
    </StyledFooter>
  )
};

export default Footer;
