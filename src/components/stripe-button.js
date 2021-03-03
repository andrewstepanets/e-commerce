import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-commerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/UfH.svg'
      description={`You total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  )
}

export default StripeCheckoutButton;