import { connect } from "react-redux";
import CreateEventForm from "./createEvent";

const mapStateToProps = (state, ownProps) => {
  let displayMonthIdx, displayMonthStr, currentMonth, currentMonthKey;
  if (state.ui.displayMonthIdx || state.ui.displayMonthIdx === 0) {
    displayMonthIdx = state.ui.displayMonthIdx;

    if (displayMonthIdx < 10) {
      displayMonthStr = "0" + String(displayMonthIdx + 1);
    } else {
      displayMonthStr = String(displayMonthIdx + 1);
    }

    if (state.entities.months[displayMonthIdx + 1]) {
      currentMonth = state.entities.months[displayMonthIdx + 1].month;
    }
  }

  if (state.ui.currentMonth) {
    currentMonthKey = state.ui.currentMonth;
  }

  let currentDay, currentDayStr;
  currentDay = state.ui.currentDay ? state.ui.currentDay : null;
  if (currentDay && currentDay > 10) {
    currentDayStr = "0" + String(currentDay);
  } else {
    currentDayStr = String(currentDay);
  }

  return {
    displayMonthIdx,
    displayMonthStr,
    currentMonth,
    currentMonthKey,
    // currentDay,
    currentDayStr
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEventForm);
