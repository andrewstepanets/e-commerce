
import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItem;