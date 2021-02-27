import React from 'react';

import CheckoutItemBlock from '../styles/checkout-item-block.styles';

function CheckoutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <CheckoutItemBlock className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} item`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>

    </CheckoutItemBlock>
  )
}

export default CheckoutItem;