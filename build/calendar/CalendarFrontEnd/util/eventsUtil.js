export const getMonthEvents = monthId => {
  return $.ajax({
    method: "GET",
    url: `/api/events/${monthId}`
  });
};
