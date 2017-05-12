export function toggleTile(row, col, player) {
  return { type: 'TOGGLE_TILE', row, col, player };
};

export function clearBoard() {
  return { type: 'CLEAR_BOARD' };
}
