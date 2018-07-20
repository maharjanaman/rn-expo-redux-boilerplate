import { AWESOME_ACTION } from "./actions";

const INITIAL_STATE = {
  isAwesome: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AWESOME_ACTION:
      return {
        ...state,
        isAwesome: !state.isAwesome
      };
    default:
      return state;
  }
};
