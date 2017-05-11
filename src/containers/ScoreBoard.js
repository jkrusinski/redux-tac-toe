import React, { Component } from 'react';

const styles ={
  board: {
    width: '300px',
    height: '300px',
    backgroundColor: 'lightsalmon',
    padding: '5px',
    borderRadius: '5px'
  },
  panel: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'lemonchiffon',
    margin: '10px',
    borderRadius: '5px'
  },
  turnHeader: {
    display: 'inline-block',
    color: 'lightsalmon'
  }
}

class ScoreBoard extends Component {
  render() {
    return (
      <div style={styles.board}>
        <div style={styles.panel}>
          <h2 style={styles.turnHeader}>Player Two's Turn</h2>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
