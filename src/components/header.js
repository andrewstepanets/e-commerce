import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../redux/cart/cart.selectors'
import { selectCurrentUser } from '../redux/user/user.selectors'



import { auth } from '../firebase/firebase.utils';
import CartIcon from '../components/cart-icon';
import CartDropdown from '../components/cart-dropdown';

import HeaderBlock from '../styles/header.styles';
import { ReactComponent as Logo } from '../assets/crown.svg';


function Header({ currentUser, hidden }) {


    return (
        <HeaderBlock className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contact</Link>
                {
                    currentUser
                        ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                        : (<Link className="option" to="/signin">Sign In</Link>)
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderBlock>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);