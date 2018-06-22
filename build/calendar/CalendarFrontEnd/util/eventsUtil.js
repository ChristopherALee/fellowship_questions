export const fetchMonthEvents = month => {
  return $.ajax({
    method: "GET",
    url: `/api/events/${month}`
  });
};
