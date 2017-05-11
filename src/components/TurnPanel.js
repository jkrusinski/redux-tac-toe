import React from 'react';

const styles = {
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
};

const TurnPanel = () => (
  <div style={styles.panel}>
    <h2 style={styles.turnHeader}>Player Two's Turn</h2>
  </div>
);

export default TurnPanel;
