const defaultBoard = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];

const indexReplace = function(array, index, value) {
  return [ ...array.slice(0, index), value, ...array.slice(index + 1) ];
};

export function board(state = defaultBoard, action) {

  switch (action.type) {

    case 'TOGGLE_TILE':
      var newRow = indexReplace(state[action.row], action.col, action.player);
      return indexReplace(state, action.row, newRow);

    case 'CLEAR_BOARD':
      return defaultBoard;

    default:
      return state;
  }
};
