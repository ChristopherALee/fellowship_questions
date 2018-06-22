export const getAllMonths = () => {
  return $.ajax({
    method: "GET",
    url: "/api/months"
  });
};

export const getMonthEvents = monthId => {
  return $.ajax({
    method: "GET",
    url: `/api/months/${monthId}`
  });
};
