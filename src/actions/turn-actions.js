export function toggleTurn() {
  return { type: 'TOGGLE_TURN' };
};

export function changeTurn(player) {
  return { type: 'CHANGE_TURN', player };
};
