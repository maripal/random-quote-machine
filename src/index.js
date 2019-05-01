import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import QuoteMachine from './QuoteMachine';

ReactDOM.render(<QuoteMachine />, document.getElementById('root'));