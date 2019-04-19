import React from 'react';

const QuoteButtons = props => {
  return (
    <div>
      <a href={`https://twitter.com/intent/tweet/?text=${props.text} - ${props.author}`} id="tweet-quote">Tweet Quote</a>
      <button id="new-quote" onClick={props.onClick}>New Quote</button>
    </div>
  );
};

export default QuoteButtons;