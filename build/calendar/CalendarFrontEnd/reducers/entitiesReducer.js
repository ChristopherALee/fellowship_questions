import { combineReducers } from "redux";
import monthsReducer from "./months/monthsReducer";

const entitiesReducer = combineReducers({
  months: monthsReducer
});

export default entitiesReducer;
