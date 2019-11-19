import * as messages from 'redux/placeholder/placeholderMessages';

export const placeholderCleanup = () => ({
  type: messages.PLACEHOLDER_CLEANUP,
});

export const placeholderChangeExample = (newExample) => ({
  type: messages.PLACEHOLDER_CHANGE_EXAMPLE,
  payload: {
    newExample,
  },
});
