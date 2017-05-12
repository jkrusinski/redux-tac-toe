import React from 'react';

const styles = {
  tile: {
    flexGrow: '1',
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const renderType = function(type) {

  switch (type) {

    case 'o':
      return (
        <svg width="90" height="90">
          <circle cx="45" cy="45" r="30" stroke="lightblue" fill="transparent" strokeWidth="10" />
        </svg>
      );

    case 'x':
      return (
        <svg width="90" height="90">
          <line x1="15" x2="75" y1="15" y2="75" strokeWidth="10" stroke="lightblue"/>
          <line x1="75" x2="15" y1="15" y2="75" strokeWidth="10" stroke="lightblue"/>
        </svg>
      );

    default:
      return <div style={{ width: '90px', height: '90px' }}>&nbsp;</div>;
  }
};

const Tile = ({ type, row, col, clickHandler }) => (
  <div className="tile" style={ styles.tile } onClick={() => clickHandler(row, col, 'x')}>
    { renderType(type) }
  </div>
);

export default Tile;
