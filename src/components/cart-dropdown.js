import React from 'react'

import CustomButton from '../components/custom-button'

import CartDropdownBlock from '../styles/cart-dropdown-block.styles'

function CartDropdown() {
  return (
    <CartDropdownBlock className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>
        Go To Checkout
      </CustomButton>

    </CartDropdownBlock>
  )
}

export default CartDropdown;