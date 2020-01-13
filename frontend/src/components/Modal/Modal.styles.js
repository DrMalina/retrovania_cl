import styled from 'styled-components';

import { Button } from 'components/Button';
import { GamesListItemWrapper } from 'components/GamesListItem/GamesListItem.styles';

import { colors, typography } from 'utils';

const { backdrop, button, text } = colors;
const { sizes } = typography;

const Backdrop = styled.div`
  background: rgba(${backdrop.rgb}, 0.7);
  bottom: 0;
  left: 0;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s;
  z-index: ${({ isOpened }) => (isOpened ? 99999 : -99999)};
`;

const Modal = styled(GamesListItemWrapper)`
  background: ${button.background.hex};
  color: ${text.primary.hex};
  left: 50%;
  max-width: 1400px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  padding: 40px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;

  & > *:not(:last-child) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

const ModalActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const ModalButton = styled(Button)`
  font-size: ${sizes.tiny};
  padding: 21px 43px 18px 46px;
`;

const ModalHeading = styled.h2`
  margin: 10px 0;
`;

export { Backdrop, Modal, ModalActionsWrapper, ModalButton, ModalHeading };
