import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { emailValidation, passwordValidation } from '../../common/validation';
import { Link } from 'react-router-dom';

const SignIn = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('Logging in', values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: emailValidation,
      password: passwordValidation
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <Input
            label='Email'
            id='email'
            name='email'
            type='text'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && 'error'}
            error={errors.email}
            touched={touched.email}
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
