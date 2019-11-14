import * as Yup from 'yup';

export const userNameValidation = Yup.string().required(
  'This field is required'
);

export const passwordValidation = Yup.string()
  .required('No password provided.')
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/(?=.*[0-9])/, 'Password must contain a number.');
