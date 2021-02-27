import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../redux/cart/cart.actions'
import { selectCartItemsCount } from '../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

import CartIconBlock from '../styles/cart-icon-block.styles';


function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <CartIconBlock
      className="cart-icon"
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </CartIconBlock>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);