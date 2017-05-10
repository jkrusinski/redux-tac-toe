import React from 'react';

const styles = {
  tile: {
    flexGrow: '1',
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    margin: '5px'
  }
};

const Tile = () => (
  <div style={styles.tile}>&nbsp;</div>
);

export default Tile;
