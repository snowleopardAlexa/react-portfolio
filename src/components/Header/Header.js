import Link from 'next/link';
import React from 'react';
import { Container, Div1 } from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a><span>Portfolio</span></a>
            </Link>
        </Div1>
    </Container>
);

export default Header;