import React from 'react';

const styles = {
  player: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px'
  },
  number: {
    fontSize: '30px',
    color: 'lemonchiffon'
  },
  score: {
    fontSize: '64px',
    color: 'lemonchiffon'
  }
};

const Player = ({ score, number }) => (
  <div style={ styles.player }>
    <div style={ styles.number }>Player { number }</div>
    <div style={ styles.score }>{ score }</div>
  </div>
);

export default Player;
