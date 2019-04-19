import React from 'react';

const QuoteContent = props => {
  return (
    <div>
      <p id="text">{props.quoteText}</p>
      <h5 id="author">{props.quoteAuthor}</h5>
    </div>
  );
};

export default QuoteContent;