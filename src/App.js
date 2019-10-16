import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Main from './components/main';


// import DrubPad from './drum-pad';

export default class App extends Component {
  
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}