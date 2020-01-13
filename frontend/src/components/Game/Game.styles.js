import styled from 'styled-components';

import { colors, typography } from 'utils';

const { text } = colors;
const { sizes, weights } = typography;

const GameWrapper = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-areas:
    'title title'
    'release-date summary'
    'genres summary'
    'actions actions';
  grid-template-columns: 1fr 3fr;
  margin-bottom: 40px;
  width: 80%;
`;

const GameActionButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-columns: minmax(min-content, 1fr);
`;

const GameActions = styled.div`
  grid-area: actions;
  justify-self: center;
  margin-top: 30px;
  text-align: center;
`;

const GameGenres = styled.p`
  align-self: center;
  grid-area: genres;
`;

const GameHighlight = styled.span`
  color: ${text.tertiary.hex};
`;

const GameReleaseDate = styled.p`
  align-self: center;
  grid-area: release-date;
`;

const GameSummary = styled.p`
  grid-area: summary;
  line-height: 1.2;
`;

const GameTitle = styled.p`
  font-size: ${sizes.xLarge};
  font-weight: ${weights.bold};
  grid-area: title;
  justify-self: center;
  margin: 30px 0;
`;

export {
  GameActionButtons,
  GameActions,
  GameGenres,
  GameHighlight,
  GameReleaseDate,
  GameSummary,
  GameTitle,
  GameWrapper
};
