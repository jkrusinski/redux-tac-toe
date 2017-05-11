import React, { Component } from 'react';

const styles ={
  board: {
    width: '300px',
    height: '300px',
    backgroundColor: 'lightyellow',
    padding: '5px',
    borderRadius: '5px'
  }
}

class ScoreBoard extends Component {
  render() {
    return (
      <div style={styles.board}>&nbsp;</div>
    );
  }
}

export default ScoreBoard;
