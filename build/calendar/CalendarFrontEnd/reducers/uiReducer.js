import { RECEIVE_DISPLAY_MONTH } from "../actions/uiActions";

const uiReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DISPLAY_MONTH:
      newState = Object.assign({}, { displayMonthIdx: action.month });
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
