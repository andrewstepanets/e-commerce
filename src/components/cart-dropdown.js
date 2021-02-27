import React from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart.selectors';
import { toggleCartHidden } from '../redux/cart/cart.actions';

import CustomButton from '../components/custom-button'
import CartItem from '../components/cart-item';


import CartDropdownBlock from '../styles/cart-dropdown-block.styles'

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <CartDropdownBlock className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          )
            : (
              <span className="empty-message">Your cart is empty</span>
            )
        }
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
        }}>
        Go To Checkout
      </CustomButton>

    </CartDropdownBlock>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));