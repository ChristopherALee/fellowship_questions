import { combineReducers } from "redux";
import monthsReducer from "./months/monthsReducer";
import eventsReducer from "./events/eventsReducer";

const entitiesReducer = combineReducers({
  months: monthsReducer,
  events: eventsReducer
});

export default entitiesReducer;
