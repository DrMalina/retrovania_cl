import styled from 'styled-components';

const Ul = styled.ul`
  display: inline-block;
  align-self: center;
`;

const Li = styled.li`
  float: left;
  padding: 8px 10px;
  text-decoration: none;
  list-style-type: none;

  ${props =>
    props.disabled &&
    `pointer-events:none; 
      color: #ddd;`}
`;
export { Ul, Li };
