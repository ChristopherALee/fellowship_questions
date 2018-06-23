export const getMonthEventsDetails = monthId => {
  return $.ajax({
    method: "GET",
    url: `/api/monthevents/${monthId}`
  });
};

export const createEvent = event => {
  return $.ajax({
    method: "POST",
    url: "/api/events",
    data: event
  });
};

export const updateEvent = event => {
  return $.ajax({
    method: "PATCH",
    url: `/api/events/${event.id}`
  });
};

export const deleteEvent = eventId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/events/${eventId}`
  });
};
