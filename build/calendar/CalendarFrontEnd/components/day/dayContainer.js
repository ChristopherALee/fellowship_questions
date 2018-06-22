import { connect } from "react-redux";
import Day from "./day";

const mapStateToProps = (state, ownProps) => {
  let eventIds, events;
  let month = state.ui.displayMonthIdx + 1;

  if (state.entities.months[month]) {
    eventIds = state.entities.months[month].events;
  }

  if (Object.values(state.entities.events).length) {
    events = Object.values(state.entities.events).filter(event => {
      return event.month === month && event.day === ownProps.day.num;
    });
    debugger;
  }

  return {
    month,
    eventIds,
    events
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
