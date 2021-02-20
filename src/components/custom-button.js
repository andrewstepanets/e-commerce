import React from 'react';
import Button from 'styles/custom-button.styles';

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <Button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </Button>
  )
}

export default CustomButton;