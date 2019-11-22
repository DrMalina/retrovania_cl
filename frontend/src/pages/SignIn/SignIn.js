import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { renderFormFields } from 'common/helpers';
import { fieldValidation } from 'common/validation';

import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

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
        <Section>
          <MainHeading>Sign In</MainHeading>
          <form onSubmit={handleSubmit}>
            {renderFormFields(Object.keys(initialValues))}
            <Button type='submit' disabled={isSubmitting}>
              Login
            </Button>
            <p>
              Not a member? <Link to='/signup'>Sign up</Link>
            </p>
          </form>
        </Section>
      );
    }}
  </Formik>
);

export { SignIn };
