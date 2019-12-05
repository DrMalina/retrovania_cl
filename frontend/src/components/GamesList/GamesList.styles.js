import styled from 'styled-components';

const GamesListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 60px;
  list-style: none;
  padding: 0;
  width: 100%;
`;

export { GamesListWrapper };
