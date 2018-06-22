import * as EventApiUtil from "../util/eventsUtil";

export const RECEIVE_MONTH_EVENTS = "RECEIVE_MONTH_EVENTS";

const receiveMonthEvents = events => {
  return {
    events,
    type: RECEIVE_MONTH_EVENTS
  };
};

export const fetchMonthEvents = monthId => dispatch => {
  return EventApiUtil.getMonthEvents(monthId).then(events => {
    dispatch(receiveMonthEvents(events));
    return events;
  });
};
