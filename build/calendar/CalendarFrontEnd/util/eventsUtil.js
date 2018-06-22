export const getMonthEventsDetails = monthId => {
  return $.ajax({
    method: "GET",
    url: `/api/monthevents/${monthId}`
  });
};
