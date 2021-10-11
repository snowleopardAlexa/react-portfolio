import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons  } from './HeaderStyles';

const Header = () => (
    <Container>
    <Div1>
        <Link href="">
            <a><span>Portfolio</span></a>
        </Link>
    </Div1>
    <Div2>
        <li>
            <Link href="">
              <NavLink>Projects</NavLink>
            </Link>
        </li>
        <li>
            <Link href="">
                <NavLink>Technologies</NavLink>
            </Link>
        </li>
        <li>
            <Link href="">
                <NavLink>About</NavLink>
            </Link>
        </li>
    </Div2>
    <Div3>
        <SocialIcons href="https://google.com">
            <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
        </SocialIcons>
    </Div3>
</Container>
);

export default Header;