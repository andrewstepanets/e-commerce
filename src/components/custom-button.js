import React from 'react';
import Button from '../styles/custom-button.styles';

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <Button
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </Button>
  )
}

export default CustomButton;