import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

const Form = styled(FormikForm)`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 25px;
  width: 100%;

  & > div:last-of-type {
    margin-bottom: 60px;
  }
`;

export { Form };
