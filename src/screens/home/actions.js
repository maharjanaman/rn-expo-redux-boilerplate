export const AWESOME_ACTION = "AWESOME_ACTION";

export function awesomeAction() {
  return dispatch => dispatch({ type: AWESOME_ACTION });
}
