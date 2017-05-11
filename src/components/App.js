import React, { Component } from 'react';
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
    textAlign: 'center'
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.title}>Redux-Tac-Toe</h1>
        <div style={styles.container}>
          <GameBoard />
          <ScoreBoard />
        </div>
      </div>
    );
  }
}

export default App;
