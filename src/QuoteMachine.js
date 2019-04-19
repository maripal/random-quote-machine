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

  //method to return a random quote
   getRandomQuote = () => {
    let firstQuote = QuoteData[Math.floor(Math.random() * QuoteData.length)];
    //console.log(firstQuote);
    this.setState({ quote: firstQuote.quote, author: firstQuote.author })
   } 

   //added getRandomQuote call here, to get a random quote on first page load. When I added this below in the render method,
   //it kept coming back w/ 'maximum update depth exceeded' error. It created an infinite loop, so I was calling it at the wrong time.
   //correct way is to call the function inside the componentDidMount function.
   componentDidMount = () => {
     this.getRandomQuote()
   } 

  //method for new quote button & pass it as prop to quotebuttons.
  changeQuote = () => {
    this.getRandomQuote();
  }

  render() {
    console.log(this.state);
    return (
      <div id="quote-box">
        <QuoteContent quoteText={this.state.quote} quoteAuthor={this.state.author} />
        <QuoteButtons onClick={this.changeQuote} text={this.state.quote} author={this.state.author} />
      </div>
    )
  }
};

export default QuoteMachine;