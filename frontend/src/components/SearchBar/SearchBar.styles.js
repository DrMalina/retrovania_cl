import styled from 'styled-components';

import { Button } from 'components/Button/Button.styles';
import { Input } from 'components/Input/Input.styles';

const SearchInput = styled(Input)`
  background-image: none;
  box-shadow: none;
  padding-right: 20px;
  width: 500px;
  margin-bottom: 30px;
`;

const SearchButton = styled(Button)`
  font-size: 2rem;
  padding: 15px 54px 17px 57px;
  margin-left: 10px;
`;

export { SearchButton as Button, SearchInput as Input };
