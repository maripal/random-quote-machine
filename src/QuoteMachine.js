import React from 'react';
import './QuoteMachine.css';
import QuoteContent from './QuoteContent';
import QuoteButtons from './QuoteButtons';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: "Anger is the ultimate destroyer of your own peace of mind.",
          author: "Dalai Lama"
        },
        {
          quote: "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
          author: "Michelle Obama"
        },
        {
          quote: "If you want to see a rainbow you have to learn to see the rain.",
          author: "Paulo Coelho"
        },
        {
          quote: "I learned really to practice mustard seed faith, and positive thinking, and remarkable things happened.",
          author: "Sir John Walton"
        },
        {
          quote: "Life itself is the proper binge.",
          author: "Julia Child"
        },
        {
          quote: "If you can't see the bright side of life, polish the dull side.",
          author: "Unknown"
        },
        {
          quote: "People say nothing is impossible, but I do nothing every day.",
          author: "A. A. Milne"
        },
        {
          qutoe: "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
          author: "Abraham Lincoln"
        }
      ]
    };
  };

  //method to show random quote when page first loads.

  //method for new quote button & pass it as prop to quotebuttons.
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