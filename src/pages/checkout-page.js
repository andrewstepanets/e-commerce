import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';

import CheckoutItem from '../components/checkout-item';
import StripeCheckoutButton from '../components/stripe-button';

import CheckoutPageBlock from '../styles/checkout-page.styles';

function CheckoutPage({ cartItems, total }) {
  return (
    <CheckoutPageBlock className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem} />
        )
      }
      <div className="total">
        <span>TOTAL: $ {total}</span>
      </div>
      <div className="test-warning">
        <p>*Please use the following test credit card for payments*</p>
        <p>4242&nbsp;4242&nbsp;4242&nbsp;4242 - Exp: 05/22 - CVV: 123</p>
      </div>
      <StripeCheckoutButton price={total} />
    </CheckoutPageBlock>
  )
}


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);