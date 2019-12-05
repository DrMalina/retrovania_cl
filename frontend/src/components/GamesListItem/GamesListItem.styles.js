import styled from 'styled-components';

import { Button } from 'components/Button/Button.styles';

import { colors, typography } from 'utils';

const { text } = colors;
const { sizes } = typography;

const GamesListItemWrapper = styled.li`
  align-items: center;
  border: 3px solid ${text.secondary.hex};
  border-radius: 10px;
  box-shadow: 0 0 10px -1px ${text.secondary.hex},
    0 0 7px -1px ${text.secondary.hex} inset;
  display: flex;
  flex-flow: column nowrap;
  padding: 40px;
  text-align: center;
`;

const GameDetails = styled.div`
  flex: 1;
`;

const GameGenres = styled.p`
  font-size: ${sizes.tiny};
`;

const GameHighlight = styled.span`
  color: ${text.tertiary.hex};
`;

const GameLink = styled(Button)`
  display: inline-block;
  flex: 0;
  font-size: ${sizes.tiny};
`;

const GameSummary = styled.p`
  line-height: 1.2;
`;

const GameTitle = styled.h2`
  line-height: 1.25;
  margin-top: 0;
`;

export {
  GamesListItemWrapper,
  GameDetails,
  GameGenres,
  GameHighlight,
  GameLink,
  GameSummary,
  GameTitle
};
