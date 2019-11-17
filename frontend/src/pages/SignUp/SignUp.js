import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import { Input } from 'components/Input';
import { Button } from 'components/Button';

import { capitalizeFirstLetter } from 'common/helpers';
import {
  fieldValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation
} from 'common/validation';

const validationSchema = Yup.object().shape({
  username: fieldValidation('Username is required'),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation
});

const submitUserData = data => {
  //TODO: Send data to the DB
  //Temporary: Alert the results
  alert(`Success!\n User: ${JSON.stringify(data, null, 2)}`);
};

const InputGroup = ({ ...props }) => {
  const [field, meta] = useField(props); //Formik Hook
  return (
    //Styled Input
    <Input touched={meta.touched} error={meta.error} {...field} {...props} />
  );
};

const renderFields = values => {
  return values.map((el, index) => (
    <InputGroup
      label={capitalizeFirstLetter(el)}
      name={el}
      type={el === 'confirmPassword' || el === 'password' ? 'password' : 'text'}
      key={index}
    />
  ));
};

const SignUp = () => {
  return (
    <>
      <h2>Create An Account</h2>
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
          const { initialValues, handleSubmit } = formikProps;
          return (
            <Form onSubmit={handleSubmit}>
              {renderFields(Object.keys(initialValues))}
              <Button type='submit'>Sign Up</Button>
            </Form>
          );
        }}
      </Formik>
      <span>
        Already a member? <Link to='/signin'>Sign In</Link>
      </span>
    </>
  );
};

export { SignUp };
