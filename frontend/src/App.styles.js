import { createGlobalStyle } from 'styled-components';

import { colors, typography } from 'utils';

const { mainBackground, text } = colors;
const { families, sizes } = typography;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: linear-gradient(
      to bottom,
      ${mainBackground.dark.hex},
      ${mainBackground.medium.hex}
    );
    color: ${text.primary.hex};
    font-family: ${families.sansSerif};
    font-size: ${sizes.small};
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }
`;

export { GlobalStyle };
