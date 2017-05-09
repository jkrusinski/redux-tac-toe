import React, { Component } from 'react';

import Board from './Board.js';

const styles = {
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <Board />
      </div>
    );
  }
}

export default App;