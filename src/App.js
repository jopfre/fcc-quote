import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Quote from './components/Quote';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-content">
            <h1 className="App-title">Random Quote Machine</h1>
            <Quote />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
