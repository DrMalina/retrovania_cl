import React from 'react';
import { Input } from 'components/Input';

//e.g. 'confirmPassword' => 'Confirm Password'
export const capitalizeFirstLetter = string => {
  return string
    .replace(/([A-Z])/g, ' $1') // insert a space before all caps
    .replace(/^./, str => str.toUpperCase()); // capitalize first letter
};

export const renderFormFields = (formProps, element = 'input') => {
  return formProps.map((prop, index) => (
    <Input
      element={element}
      key={index}
      label={capitalizeFirstLetter(prop)}
      name={prop}
      type={
        prop === 'confirmPassword' || prop === 'password' ? 'password' : 'text'
      }
    />
  ));
};

export const truncateString = (
  string,
  maxLength,
  endWith = '...',
  separator = ' '
) => {
  if (string.length <= maxLength) return string;
  return string.slice(0, string.lastIndexOf(separator, maxLength)) + endWith;
};

export const unixTimestampToDate = timestamp => new Date(timestamp * 1000);

export const dateToUnixTimestamp = date => date.getTime() / 1000;
