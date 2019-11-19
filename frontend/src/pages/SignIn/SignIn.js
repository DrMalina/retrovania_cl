import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { renderFormFields } from 'common/helpers';
import { fieldValidation } from 'common/validation';

import { Button } from 'components/Button';

const SignIn = () => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('Logging in', values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      username: fieldValidation('Username is required'),
      password: fieldValidation('Password is required')
    })}
  >
    {formikProps => {
      const { handleSubmit, initialValues, isSubmitting } = formikProps;
      return (
        <form onSubmit={handleSubmit}>
          {renderFormFields(Object.keys(initialValues))}
          <Button type='submit' disabled={isSubmitting}>
            Login
          </Button>
          <p>
            Not a member? <Link to='/signup'>Sign up</Link>
          </p>
        </form>
      );
    }}
  </Formik>
);

export { SignIn };
