import React from 'react';
import { Provider } from 'react-redux';

import Main from './components/main';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Main />
      </Provider>
    )
  }
}