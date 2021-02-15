import React from 'react';
import HeaderBlock from 'styles/header.styles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';

function Header() {
    return (
        <HeaderBlock className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contact</Link>
            </div>
        </HeaderBlock>
    );
}

export default Header;