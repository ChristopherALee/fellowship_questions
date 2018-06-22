import * as MonthApiUtil from "../util/monthsUtil";

export const RECEIVE_MONTH_EVENTS = "RECEIVE_MONTH_EVENTS";

const receiveMonthEvents = events => {
  return {
    events,
    type: RECEIVE_MONTH_EVENTS
  };
};

export const fetchMonthEvents = monthId => dispatch => {
  return MonthApiUtil.getMonthEvents(monthId).then(events => {
    dispatch(receiveMonthEvents(events));
    return events;
  });
};
