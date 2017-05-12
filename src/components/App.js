import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';

import GameBoard from '../containers/GameBoard.js';
import ScoreBoard from '../containers/ScoreBoard.js';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '50px 0'
  },
  title: {
    color: 'cadetblue',
    margin: '30px 0',
    width: '100%',
    textAlign: 'center',
    fontSize: '64px'
  }
};

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1 style={styles.title}>Redux-Tac-Toe</h1>
          <div style={styles.container}>
            <GameBoard />
            <ScoreBoard />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
