import {
  RECEIVE_DISPLAY_MONTH,
  RECEIVE_CURRENT_DAY
} from "../actions/uiActions";

const uiReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DISPLAY_MONTH:
      newState = Object.assign({}, state, { displayMonthIdx: action.month });
      return newState;
    case RECEIVE_CURRENT_DAY:
      newState = Object.assign({}, state, { currentDay: action.day });
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
