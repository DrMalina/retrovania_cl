import React from 'react';
import { useField } from 'formik';

import * as S from './Input.styles';

const Input = props => {
  const [field, meta] = useField(props); //Formik Hook
  const { element, label, name, type, ...rest } = props;

  const renderElement = () => {
    switch (element) {
      case 'textarea':
        return (
          <S.Textarea
            as='textarea'
            name={name}
            meta={meta}
            rows={10}
            {...field}
            {...rest}
          />
        );
      default:
        return (
          <>
            <S.Input name={name} meta={meta} type={type} {...field} {...rest} />
            {meta.touched && meta.error ? (
              <S.ErrorMessage>{meta.error}</S.ErrorMessage>
            ) : null}
          </>
        );
    }
  };

  return (
    <S.InputWrapper>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      {renderElement()}
    </S.InputWrapper>
  );
};

export { Input };
