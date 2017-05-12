import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

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

class GameBoard extends Component {
  render() {
    const { board, toggleTile } = this.props;
    return (
      <div style={ styles.board }>
        { board.map(row => (
          <div style={ styles.row }>
            { row.map(tile => (
              <Tile type={ tile } onClick={() => toggleTile()}/>
            )) }
          </div>
        )) }
      </div>
    );
  }
}

const mapStateToProps = function({ board }) {
  return { board };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
