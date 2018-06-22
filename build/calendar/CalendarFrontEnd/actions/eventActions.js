import * as EventApiUtil from "../util/eventsUtil";
export const RECEIVE_MONTH_EVENTS_DETAILS = "RECEIVE_MONTH_EVENT_DETAILS";

const receiveMonthEventsDetails = events => {
  return {
    events,
    type: RECEIVE_MONTH_EVENTS_DETAILS
  };
};

export const fetchMonthEventsDetails = monthId => dispatch => {
  return EventApiUtil.getMonthEventsDetails(monthId).then(events => {
    dispatch(receiveMonthEventsDetails(events));
    return events;
  });
};
