import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

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

    const { turn } = this.props;

    return (
      <div style={styles.board}>
        <TurnPanel turn={turn} />
        <Players />
      </div>
    );
  }
}

const mapStateToProps = function({ turn }) {
  return { turn };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
