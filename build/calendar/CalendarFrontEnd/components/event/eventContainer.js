import { connect } from "react-redux";
import Event from "./event";
import { updateEvent, removeEvent } from "../../actions/eventActions";

const mapStateToProps = (state, ownProps) => {
  let displayMonthIdx,
    displayMonthStr,
    currentMonth,
    currentMonthKey,
    today,
    currentDayStr;

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

  currentMonthKey = state.ui.currentMonth ? state.ui.currentMonth : null;

  today = state.ui.today ? state.ui.today : null;

  if (ownProps.currentDay.num && ownProps.currentDay.num < 10) {
    currentDayStr = "0" + String(ownProps.currentDay.num);
  } else {
    currentDayStr = String(ownProps.currentDay.num);
  }

  return {
    displayMonthIdx,
    displayMonthStr,
    currentMonth,
    currentMonthKey,
    currentDayStr,
    today
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateEvent: event => dispatch(updateEvent(event)),
    removeEvent: eventId => dispatch(removeEvent(eventId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
