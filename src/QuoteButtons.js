import React from 'react';

const QuoteButtons = props => {
  return (
    <div>
      <button id="tweet-quote">Tweet button</button>
      <button id="new-quote" onClick={props.onClick}>New Quote</button>
    </div>
  );
};

export default QuoteButtons;