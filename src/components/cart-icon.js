import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

import CartIconBlock from '../styles/cart-icon-block.styles';


function CartIcon({ toggleCartHidden }) {
  return (
    <CartIconBlock
      className="cart-icon"
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </CartIconBlock>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);