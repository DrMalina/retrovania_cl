import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { renderFormFields } from 'common/helpers';
import { fieldValidation } from 'common/validation';

import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { Link } from 'components/Link';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

import { signInReq } from 'redux/users/utils';

const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: fieldValidation('Email is required'),
        password: fieldValidation('Password is required')
      })}
      onSubmit={({ email, password }) => {
        dispatch(signInReq({ email, password }, '/signin'));
      }}
    >
      {formikProps => {
        const { initialValues } = formikProps;
        return (
          <Section>
            <MainHeading>Sign In</MainHeading>
            <Form>
              {renderFormFields(Object.keys(initialValues))}
              <Button type='submit'>Sign In</Button>
            </Form>
            <p>
              Not a member? <Link to='/signup'>Sign up</Link>
            </p>
          </Section>
        );
      }}
    </Formik>
  );
};

export { SignIn };
