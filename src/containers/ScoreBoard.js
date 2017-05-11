import React, { Component } from 'react';
import TurnPanel from '../components/TurnPanel.js';
import Players from '../components/Players.js';

const styles ={
  board: {
    width: '300px',
    height: '300px',
    backgroundColor: 'lightsalmon',
    padding: '5px',
    borderRadius: '5px'
  }
}

class ScoreBoard extends Component {
  render() {
    return (
      <div style={styles.board}>
        <TurnPanel turn={true} />
        <Players />
      </div>
    );
  }
}

export default ScoreBoard;
