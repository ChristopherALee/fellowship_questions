export const RECEIVE_DISPLAY_MONTH = "RECEIVE_DISPLAYED_MONTH";
export const RECEIVE_CURRENT_DAY = "RECEIVE_CURRENT_DAY";

const receiveDisplayMonth = month => {
  return {
    month,
    type: RECEIVE_DISPLAY_MONTH
  };
};

const receiveCurrentDay = day => {
  return {
    day,
    type: RECEIVE_CURRENT_DAY
  };
};

export const fetchDisplayMonth = month => dispatch => {
  dispatch(receiveDisplayMonth(month));
};

export const fetchCurrentDay = day => dispatch => {
  dispatch(receiveCurrentDay(day));
};
