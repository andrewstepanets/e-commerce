
import React from 'react';

import CartItemBlock from '../styles/cart-item-block.styles'

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemBlock className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </CartItemBlock>
  )
}

export default CartItem;