import React, { Component } from 'react';
import{ Provider } from 'mobx-react';
import MainPage from './container/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider appState={this.props.appState}>
        <MainPage></MainPage>
      </Provider>
    );
  }
}

export default App;
