export function turn(state = 'x', action) {

  switch (action.type) {

    case 'TOGGLE_TURN':
      return state === 'x' ? 'o' : 'x';

    case 'CHANGE_TURN':
      return action.player;

    default:
      return state;
  }
};
