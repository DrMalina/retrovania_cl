import React from 'react';
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
import { Link } from 'components/Link';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

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
        <Section>
          <MainHeading>Sign Up</MainHeading>
          <Form onSubmit={handleSubmit}>
            {renderFormFields(Object.keys(initialValues))}
            <Button type='submit'>Sign Up</Button>
            <p>
              Already a member? <Link to='/signin'>Sign In</Link>
            </p>
          </Form>
        </Section>
      );
    }}
  </Formik>
);

export { SignUp };
