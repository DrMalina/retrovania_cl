import React from 'react';

const Input = ({
  touched,
  error,
  label,
  name,
  value,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && touched && <div className='input-feedback'>{error}</div>}
    </div>
  );
};

export default Input;
