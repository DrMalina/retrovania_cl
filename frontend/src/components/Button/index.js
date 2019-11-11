import React from 'react';

const Button = props => {
  return (
    <button type={props.type} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
export default Button;
