import React from 'react';
import './QuoteContent.css';

const QuoteContent = props => {
  return (
    <div className="quote-content">
      <p id="text">{props.quoteText}</p>
      <h5 id="author">- {props.quoteAuthor}</h5>
    </div>
  );
};

export default QuoteContent;