import * as EventApiUtil from "../util/eventsUtil";
export const RECEIVE_MONTH_EVENTS_DETAILS = "RECEIVE_MONTH_EVENT_DETAILS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

const receiveMonthEventsDetails = events => {
  return {
    events,
    type: RECEIVE_MONTH_EVENTS_DETAILS
  };
};

const receiveEvent = event => {
  return {
    event,
    type: RECEIVE_EVENT
  };
};

const deleteEvent = eventId => {
  return {
    eventId,
    type: DELETE_EVENT
  };
};

export const fetchMonthEventsDetails = monthId => dispatch => {
  return EventApiUtil.getMonthEventsDetails(monthId).then(events => {
    dispatch(receiveMonthEventsDetails(events));
    return events;
  });
};

export const createEvent = event => dispatch => {
  return EventApiUtil.createEvent(event).then(event => {
    dispatch(receiveEvent(event));
    return event;
  });
};

export const updateEvent = event => dispatch => {
  return EventApiUtil.updateEvent(event).then(event => {
    dispatch(receiveEvent(event));
    return event;
  });
};
export const removeEvent = eventId => dispatch => {
  return EventApiUtil.deleteEvent(eventId).then(event => {
    dispatch(deleteEvent(event));
    return event;
  });
};
