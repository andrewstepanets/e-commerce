import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

function CheckoutPage({ cartItems, total }) {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
        cartItems.map(cartItem =>
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem} />
        )
      }
      <TotalContainer>
        <span>TOTAL: $ {total}</span>
      </TotalContainer>
      <WarningContainer>
        <p>*Please use the following test credit card for payments*</p>
        <p>4242&nbsp;4242&nbsp;4242&nbsp;4242 - Exp: 05/22 - CVV: 123</p>
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  )
}


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);