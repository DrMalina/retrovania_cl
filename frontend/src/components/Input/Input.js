import React from 'react';
import { useField } from 'formik';

import * as S from './Input.styles';

const Input = props => {
  const [field, meta] = useField(props); //Formik Hook
  const { label, name, type, ...rest } = props;
  return (
    <S.InputWrapper>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input name={name} meta={meta} type={type} {...field} {...rest} />
      {meta.touched && meta.error ? (
        <S.ErrorMessage>{meta.error}</S.ErrorMessage>
      ) : null}
    </S.InputWrapper>
  );
};

export { Input };
