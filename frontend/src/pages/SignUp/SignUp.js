import { Formik, Form, useField } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { capitalizeFirstLetter } from '../../common/helpers';

//YUP as validation for Formik
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('E-mail is not valid')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must be longer than 6 characters')
    .max(16, 'Password is too long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Password confirmation is required!')
    .test('passwords-match', 'Passwords do not match', function(value) {
      return this.parent.password === value;
    })
});

const submitUserData = ({ username, email, password }) => {
  const newUserData = { username, email, password };
  //TODO: Send data to the DB
  //Temporary: Alert the results
  alert(`Success!\n User: ${JSON.stringify(newUserData, null, 2)}`);
};

//This is a must from Formik for Styled Components (not yet added)
const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.name || props.id}>
        {capitalizeFirstLetter(props.name)}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.name === 'confirmPassword' ? 'password' : props.name}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </React.Fragment>
  );
};

const renderFields = values => {
  return values.map((el, index) => <Input label={el} name={el} key={index} />);
};

const SignUp = () => {
  return (
    <React.Fragment>
      <header>Create An Account</header>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={values => submitUserData(values)}
      >
        {formik => {
          const { initialValues, handleSubmit } = formik;
          return (
            <Form onSubmit={handleSubmit}>
              {renderFields(Object.keys(initialValues))}
              <button type='submit'>Sign Up</button>
            </Form>
          );
        }}
      </Formik>
      <span>
        Already a member? <Link to='/signin'>Sign In</Link>
      </span>
    </React.Fragment>
  );
};

export { SignUp };
