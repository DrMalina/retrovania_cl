import styled from 'styled-components';

import { Form } from 'components/Form';

import { typography } from 'utils';

const { sizes } = typography;

const GameEditorForm = styled(Form)`
  & div:last-of-type {
    margin-bottom: 0;
  }
`;

const GameEditorWrapper = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-areas:
    '. release-date'
    '. release-date'
    '. release-date';
  grid-template-columns: 3fr 2fr;
`;

const GameEditorReleaseDate = styled.fieldset`
  align-self: center;
  border: none;
  grid-area: release-date;
  margin: 0;
  padding: 0;
`;

const ReleaseDateLabel = styled.legend`
  display: block;
  font-size: ${sizes.large};
  font-weight: 500;
  margin-bottom: 15px;
`;

export {
  GameEditorForm,
  GameEditorReleaseDate,
  GameEditorWrapper,
  ReleaseDateLabel
};
