import React from 'react';
import Player from './Player.js';

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignContent: 'center'
};

const Players = () => (
  <div style={styles}>
    <Player score={8} number={1} />
    <Player score={4} number={2} />
  </div>
);

export default Players;
