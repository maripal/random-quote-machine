export const newQuote = (quote, author) => {
  return {
    type: 'NEW_QUOTE',
    payload: { quote, author }
  };
};

