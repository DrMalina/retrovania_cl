import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { colors, typography } from 'utils';

const { input, text } = colors;
const { sizes } = typography;

const StyledDayPicker = styled(DayPicker)`
  .DayPicker-wrapper {
    font-size: ${sizes.small};
  }

  .DayPicker-Caption {
    color: ${text.secondary.hex};
  }

  .DayPicker-Day {
    border-radius: 5px;

    &--disabled {
      color: ${input.error.hex};
    }

    &--today {
      color: ${text.tertiary.hex};
    }
  }

  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${text.secondary.hex} !important;
  }

  .DayPicker-Day--start:not(.DayPicker-Day--outside),
  .DayPicker-Day--end:not(.DayPicker-Day--outside) {
    background-color: ${text.secondary.hex} !important;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: rgba(${text.secondary.rgb}, 0.6) !important;
  }
`;

export { StyledDayPicker };
