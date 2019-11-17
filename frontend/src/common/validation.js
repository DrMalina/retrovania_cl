import * as Yup from 'yup';

export const fieldValidation = msg => Yup.string().required(msg);

export const emailValidation = Yup.string()
  .email('E-mail is not valid')
  .required('E-mail is required');

export const passwordValidation = Yup.string()
  .min(6, 'Password must be longer than 6 characters')
  .max(16, 'Password is too long')
  .required('Password is required');

export const confirmPasswordValidation = Yup.string()
  .required('Password confirmation is required!')
  .test('passwords-match', 'Passwords do not match', function(value) {
    return this.parent.password === value;
  });
