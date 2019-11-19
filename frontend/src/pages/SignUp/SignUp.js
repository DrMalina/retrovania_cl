import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { renderFormFields } from 'common/helpers';
import {
  confirmPasswordValidation,
  emailValidation,
  fieldValidation,
  passwordValidation
} from 'common/validation';

import { Button } from 'components/Button';

const validationSchema = Yup.object().shape({
  username: fieldValidation('Username is required'),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation
});

const submitUserData = data => {
  //TODO: Send data to the server
  //Temporary: Alert the results
  alert(`Success!\n User: ${JSON.stringify(data, null, 2)}`);
};

const SignUp = () => (
  <Formik
    initialValues={{
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }}
    validationSchema={validationSchema}
    onSubmit={({ username, email, password }) =>
      submitUserData({ username, email, password })
    }
  >
    {formikProps => {
      const { handleSubmit, initialValues } = formikProps;
      return (
        <Form onSubmit={handleSubmit}>
          <h2>Create An Account</h2>
          {renderFormFields(Object.keys(initialValues))}
          <Button type='submit'>Sign Up</Button>
          <p>
            Already a member? <Link to='/signin'>Sign In</Link>
          </p>
        </Form>
      );
    }}
  </Formik>
);

export { SignUp };
