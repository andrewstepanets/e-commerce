import React from 'react';
import Button from 'styles/custom-button.styles';

function CustomButton({ children, ...otherProps }) {
  return (
    <Button className="custom-button" {...otherProps}>
      {children}
    </Button>
  )
}

export default CustomButton;