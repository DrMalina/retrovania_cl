import React from 'react';

const Button = ({ type, disabled, children, ...rest }) => {
  return (
    <button type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
export default Button;
