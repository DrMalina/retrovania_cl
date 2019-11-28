import styled, { css } from 'styled-components';

import { colors } from 'utils';

const SpinnerLocalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 200px;
  justify-content: center;
  margin-bottom: 100px;
  position: relative;
  width: 100%;
  min-width: 200px;
`;

const spinnerLocalCss = css`
  transform: translateX(-167%);

  & > div:nth-of-type(-n + 2) {
    z-index: 100;
  }

  & > div:nth-last-of-type(-n + 4) {
    background-color: ${colors.text.primary.hex};
    z-index: 99;
  }
`;

export { SpinnerLocalContainer, spinnerLocalCss };
