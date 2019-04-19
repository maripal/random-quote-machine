import React from 'react';
import './QuoteMachine.css';
import QuoteContent from './QuoteContent';
import QuoteButtons from './QuoteButtons';
import QuoteData from './QuoteData';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: '', author: '' };
  };

  //method to show random quote when page first loads.
  showFirstQuote = () => {
    let firstQuote = QuoteData[Math.floor(Math.random() * QuoteData.length)];
    //console.log(firstQuote);
    this.setState({ quote: firstQuote.quote, author: firstQuote.author })
   } 

   componentDidMount = () => {
     this.showFirstQuote()
   } 

  //method for new quote button & pass it as prop to quotebuttons.
  changeQuote = event => {

  }

  render() {
    console.log(QuoteData);
    console.log(this.state);
    return (
      <div id="quote-box">
        <QuoteContent quoteText={this.state.quote} quoteAuthor={this.state.author} />
        <QuoteButtons />
      </div>
    )
  }
};

export default QuoteMachine;