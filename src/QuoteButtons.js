import React from 'react';
import './QuoteButtons.css'

const QuoteButtons = props => {
  const buttonsSection = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
    marginTop: '50px'
  }

  return (
    <div style={buttonsSection}>
      <a href={`https://twitter.com/intent/tweet/?text=${props.text} - ${props.author}`} id="tweet-quote">Tweet Quote</a>
      <button id="new-quote" onClick={props.onClick}>New Quote</button>
    </div>
  );
};

export default QuoteButtons;