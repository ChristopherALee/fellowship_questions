export const RECEIVE_DISPLAY_MONTH = "RECEIVE_DISPLAYED_MONTH";

const receiveDisplayMonth = month => {
  return {
    month,
    type: RECEIVE_DISPLAY_MONTH
  };
};

export const fetchDisplayMonth = month => dispatch => {
  dispatch(receiveDisplayMonth(month));
};
