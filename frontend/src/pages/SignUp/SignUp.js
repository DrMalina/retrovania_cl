import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { renderFormFields } from 'common/helpers';
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation,
  usernameValidation
} from 'common/validation';

import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { Link } from 'components/Link';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

import { signInReq } from 'redux/users/utils';

const validationSchema = Yup.object().shape({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation
});

const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={({ username, email, password }) => {
        dispatch(signInReq('signup', { name: username, email, password }));
      }}
    >
      {formikProps => {
        const { initialValues } = formikProps;
        return (
          <Section>
            <MainHeading>Sign Up</MainHeading>
            <Form>
              {renderFormFields(Object.keys(initialValues))}
              <Button type='submit'>Sign Up</Button>
            </Form>
            <p>
              Already a member? <Link to='/signin'>Sign In</Link>
            </p>
          </Section>
        );
      }}
    </Formik>
  );
};

export { SignUp };
