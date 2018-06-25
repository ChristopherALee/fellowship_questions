import { connect } from "react-redux";
import Calendar from "./calendar";
import {
  fetchDisplayMonth,
  fetchCurrentDay,
  fetchCurrentMonth
} from "../../actions/uiActions";
import { fetchMonthEvents } from "../../actions/monthActions";
import { fetchMonthEventsDetails } from "../../actions/eventActions";

const mapStateToProps = (state, ownProps) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const months = {
    Jan2018: {
      numDays: 31,
      start: "Monday",
      end: "Wednesday",
      parsed: "January 2018",
      url: "Jan2018",
      month: 1
    },
    Feb2018: {
      numDays: 28,
      start: "Thursday",
      end: "Wednesday",
      parsed: "February 2018",
      url: "Feb2018",
      month: 2
    },
    Mar2018: {
      numDays: 31,
      start: "Thursday",
      end: "Saturday",
      parsed: "March 2018",
      url: "Mar2018",
      month: 3
    },
    Apr2018: {
      numDays: 30,
      start: "Sunday",
      end: "Monday",
      parsed: "April 2018",
      url: "Apr2018",
      month: 4
    },
    May2018: {
      numDays: 31,
      start: "Tuesday",
      end: "Thursday",
      parsed: "May 2018",
      url: "May2018",
      month: 5
    },
    Jun2018: {
      numDays: 30,
      start: "Friday",
      end: "Saturday",
      parsed: "June 2018",
      url: "Jun2018",
      month: 6
    },
    Jul2018: {
      numDays: 31,
      start: "Sunday",
      end: "Tuesday",
      parsed: "July 2018",
      url: "Jul2018",
      month: 7
    },
    Aug2018: {
      numDays: 31,
      start: "Wednesday",
      end: "Friday",
      parsed: "August 2018",
      url: "Aug2018",
      month: 8
    },
    Sept2018: {
      numDays: 30,
      start: "Saturday",
      end: "Sunday",
      parsed: "September 2018",
      url: "Sept2018",
      month: 9
    },
    Oct2018: {
      numDays: 31,
      start: "Monday",
      end: "Wednesday",
      parsed: "October 2018",
      url: "Oct2018",
      month: 10
    },
    Nov2018: {
      numDays: 30,
      start: "Thursday",
      end: "Friday",
      parsed: "November 2018",
      url: "Nov2018",
      month: 11
    },
    Dec2018: {
      numDays: 31,
      start: "Saturday",
      end: "Monday",
      parsed: "December 2018",
      url: "Dec2018",
      month: 12
    }
  };

  let monthKeys = Object.keys(months);

  let displayMonthIdx, currentMonth, currentDay;

  if (state.ui.displayMonthIdx || state.ui.displayMonthIdx === 0) {
    displayMonthIdx = state.ui.displayMonthIdx;
  }

  currentMonth = state.ui.currentMonth ? state.ui.currentMonth : null;

  currentDay = state.ui.today ? state.ui.today : null;

  return {
    days,
    months,
    monthKeys,
    displayMonthIdx,
    currentMonth,
    currentDay
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDisplayMonth: month => dispatch(fetchDisplayMonth(month)),
    fetchCurrentDay: day => dispatch(fetchCurrentDay(day)),
    fetchCurrentMonth: month => dispatch(fetchCurrentMonth(month)),
    fetchMonthEvents: monthId => dispatch(fetchMonthEvents(monthId)),
    fetchMonthEventsDetails: monthId =>
      dispatch(fetchMonthEventsDetails(monthId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
