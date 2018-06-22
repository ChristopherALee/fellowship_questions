import { RECEIVE_MONTH_EVENTS } from "../../actions/monthActions";

const monthsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MONTH_EVENTS:
      newState = Object.assign({}, state, {
        [action.events.id]: action.events
      });
      return newState;
    default:
      return state;
  }
};

export default monthsReducer;
