import { connect } from "react-redux";
import Calendar from "./calendar";
import { fetchDisplayMonth } from "../../actions/uiActions";
import { fetchMonthEvents } from "../../actions/monthActions";

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
      url: "Jan2018"
    },
    Feb2018: {
      numDays: 28,
      start: "Thursday",
      end: "Wednesday",
      parsed: "February 2018",
      url: "Feb2018"
    },
    Mar2018: {
      numDays: 31,
      start: "Thursday",
      end: "Saturday",
      parsed: "March 2018",
      url: "Mar2018"
    },
    Apr2018: {
      numDays: 30,
      start: "Sunday",
      end: "Monday",
      parsed: "April 2018",
      url: "Apr2018"
    },
    May2018: {
      numDays: 31,
      start: "Tuesday",
      end: "Thursday",
      parsed: "May 2018",
      url: "May2018"
    },
    Jun2018: {
      numDays: 30,
      idxStart: 5,
      start: "Friday",
      end: "Saturday",
      parsed: "June 2018",
      url: "Jun2018"
    },
    Jul2018: {
      numDays: 31,
      start: "Sunday",
      end: "Tuesday",
      parsed: "July 2018",
      url: "Jul2018"
    },
    Aug2018: {
      numDays: 31,
      start: "Wednesday",
      end: "Friday",
      parsed: "August 2018",
      url: "Aug2018"
    },
    Sept2018: {
      numDays: 30,
      start: "Saturday",
      end: "Sunday",
      parsed: "September 2018",
      url: "Sept2018"
    },
    Oct2018: {
      numDays: 31,
      start: "Monday",
      end: "Wednesday",
      parsed: "October 2018",
      url: "Oct2018"
    },
    Nov2018: {
      numDays: 30,
      start: "Thursday",
      end: "Friday",
      parsed: "November 2018",
      url: "Nov2018"
    },
    Dec2018: {
      numDays: 31,
      start: "Saturday",
      end: "Monday",
      parsed: "December 2018",
      url: "Dec2018"
    }
  };

  let monthKeys = Object.keys(months);

  let displayMonthIdx;
  if (state.ui.displayMonthIdx || state.ui.displayMonthIdx === 0) {
    displayMonthIdx = state.ui.displayMonthIdx;
  }

  return {
    days,
    months,
    monthKeys,
    displayMonthIdx
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDisplayMonth: month => dispatch(fetchDisplayMonth(month)),
    fetchMonthEvents: monthId => dispatch(fetchMonthEvents(monthId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
