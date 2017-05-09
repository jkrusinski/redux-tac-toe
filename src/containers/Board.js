import React, { Component } from 'react';
import Tile from '../components/Tile.js';

const styles = {
  board: {
    width: '300px',
    height: '300px',
    backgroundColor: 'lightblue',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px'
  },
  row: {
    display: 'flex',
    flexGrow: '1'
  }
};

// dummy data
const tiles = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

class Board extends Component {
  render() {
    return (
      <div style={styles.board}>
        {tiles.map(row => (
          <div style={styles.row}>
            {row.map(tile => (
              <Tile />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
