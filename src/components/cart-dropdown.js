import React from 'react'
import { connect } from 'react-redux';

import CustomButton from '../components/custom-button'
import CartItem from '../components/cart-item';

import CartDropdownBlock from '../styles/cart-dropdown-block.styles'

function CartDropdown({ cartItems }) {
  return (
    <CartDropdownBlock className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <CustomButton>
        Go To Checkout
      </CustomButton>

    </CartDropdownBlock>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);