import {
  RECEIVE_MONTH_EVENTS_DETAILS,
  RECEIVE_EVENT,
  DELETE_EVENT
} from "../../actions/eventActions";

const eventsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MONTH_EVENTS_DETAILS:
      newState = Object.assign({}, state, action.events);
      return newState;
    case RECEIVE_EVENT:
      newState = Object.assign({}, state, { [action.event.id]: action.event });
      return newState;
    case DELETE_EVENT:
      newState = Object.assign({}, state);
      newState = newState.filter(event => event.id !== action.eventId);
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;
