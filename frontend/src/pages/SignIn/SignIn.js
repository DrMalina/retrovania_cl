import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { fieldValidation } from 'common/validation';
import { Link } from 'react-router-dom';

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
    {formik => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = formik;
      return (
        <form onSubmit={handleSubmit}>
          <Input
            label='Username'
            id='username'
            name='username'
            type='text'
            placeholder='Enter your email or username'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && 'error'}
            error={errors.username}
            touched={touched.username}
          />

          <Input
            label='Password'
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && 'error'}
            error={errors.password}
            touched={touched.password}
          />
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
