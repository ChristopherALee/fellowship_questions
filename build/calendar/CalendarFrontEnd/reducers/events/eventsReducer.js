import { RECEIVE_MONTH_EVENTS_DETAILS } from "../../actions/eventActions";

const eventsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MONTH_EVENTS_DETAILS:
      newState = Object.assign({}, state, action.events);
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;
