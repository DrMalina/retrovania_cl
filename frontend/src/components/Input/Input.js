import React from 'react';
import { useField } from 'formik';

const Input = props => {
  const [field, meta] = useField(props); //Formik Hook
  const { label, name, type, ...rest } = props;
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type={type} {...field} {...rest} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export { Input };
