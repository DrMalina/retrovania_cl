import React from 'react';
import { Input } from 'components/Input';

//e.g. 'confirmPassword' => 'Confirm Password'
export const capitalizeFirstLetter = string => {
  return string
    .replace(/([A-Z])/g, ' $1') // insert a space before all caps
    .replace(/^./, str => str.toUpperCase()); // capitalize first letter
};

export const renderFormFields = values => {
  return values.map((el, index) => (
    <Input
      key={index}
      label={capitalizeFirstLetter(el)}
      name={el}
      type={el === 'confirmPassword' || el === 'password' ? 'password' : 'text'}
    />
  ));
};
