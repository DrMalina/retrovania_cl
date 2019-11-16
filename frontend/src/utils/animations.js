import { css, keyframes } from 'styled-components';

const darkenBorder = color => css`
  border-color: ${color};
  box-shadow: none;
`;

const lightenBorder = color => css`
  border-color: ${color};
  box-shadow: 0 0 15px -1px ${color}, 0 0 12px -1px ${color} inset;
`;

const borderFlicker = (colorLight, colorDark) => {
  const lighten = lightenBorder(colorLight);
  const darken = darkenBorder(colorDark);

  return keyframes`
    2% {
      ${lighten}
    }
    3% {
      ${darken}
    }
    6% {
      ${lighten}
    }
    10% {
      ${lighten}
    }
    14% {
      ${darken}
    }
    18% {
      ${darken}
    }
    22% {
      ${lighten}
    }
    37% {
      ${lighten}
    }
    39% {
      ${darken}
    }
    40% {
      ${lighten}
    }
    100% {
      ${lighten}
    }
  `;
};

const textGlow = (colorLight, colorDark) => keyframes`
  from {
    text-shadow: 0 0 10px ${colorLight}, 
      0 0 20px ${colorLight}, 
      0 0 30px ${colorDark},
      0 0 40px ${colorDark};
  }
  to {
    text-shadow: 0 0 5px ${colorLight}, 
      0 0 10px ${colorLight},  
      0 0 15px ${colorDark}, 
      0 0 20px ${colorDark};
  }
`;

const animations = { borderFlicker, textGlow };

export { animations };
