import React from 'react';
import QuoteContent from './QuoteContent';
import QuoteButtons from './QuoteButtons';

class QuoteMachine extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <QuoteContent />
        <QuoteButtons />
      </div>
    )
  }
};

export default QuoteMachine;