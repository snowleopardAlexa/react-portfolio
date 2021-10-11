import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterContainer, LinkColumn, LinkList, LinkItem, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
      <FooterContainer>
          <LinkList>
             <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href="tel: 646-932-1024">646-932-1024</LinkItem>
             </LinkColumn>
             <LinkColumn>
                 <LinkTitle>Email</LinkTitle>
                 <LinkItem href="mailto:aleksandravslomska@gmail.com">aleksandravslomska@gmail.com</LinkItem>
             </LinkColumn>
          </LinkList>
          <SocialIconsContainer>
              <CompanyContainer>
                  <Slogan>
                      Learning
                  </Slogan>
              </CompanyContainer>
              <SocialContainer>
                  <SocialIcons href="">
                      <AiFillGithub size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="">
                      <AiFillLinkedin size="3rem" />
                  </SocialIcons>
              </SocialContainer>
          </SocialIconsContainer>
      </FooterContainer>
    );
};

export default Footer;