import styled from 'styled-components';

const Ul = styled.ul`
  display: inline-block;
  align-self: center;
`;

const LI = styled.li`
  float: left;
  padding: 8px 10px;
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    text-shadow: 0px 0px 10px;
  }

  ${props => props.active && `color: yellow;`}
  ${props =>
    props.disabled &&
    `color: red;
    cursor: not-allowed;`}
`;
export { Ul, LI };
