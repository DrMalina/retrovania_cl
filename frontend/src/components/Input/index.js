import React from 'react';

const Input = props => {
  return (
    <div>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className}
      />
      {props.error && props.touched && (
        <div className='input-feedback'>{props.error}</div>
      )}
    </div>
  );
};

export default Input;
