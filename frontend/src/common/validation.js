import * as Yup from 'yup';

export const fieldValidation = msg => Yup.string().required(msg);

export const usernameValidation = Yup.string()
  .min(3, 'Username is too short')
  .max(64, 'Username is too long')
  .required('Username is required');

export const emailValidation = Yup.string()
  .email('E-mail is not valid')
  .required('E-mail is required');

export const passwordValidation = Yup.string()
  .min(8, 'Password must be longer than 8 characters')
  .max(64, 'Password is too long')
  .required('Password is required');

export const confirmPasswordValidation = Yup.string()
  .test('passwords-match', 'Passwords do not match', function(value) {
    return this.parent.password === value;
  })
  .required('Password confirmation is required!');
