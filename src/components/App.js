import React, { Component } from 'react';
import Board from '../containers/Board.js';

const styles = {
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    margin: '30px 0'
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <h1 style={styles.title}>Redux-Tac-Toe</h1>
        <Board />
      </div>
    );
  }
}

export default App;
