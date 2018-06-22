import React from "react";
import EventContainer from "../event/eventContainer";

export default class Day extends React.Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
    this.isCurrentDay = this.isCurrentDay.bind(this);
  }

  isCurrentDay() {
    if (this.props.currentDay) {
      return "current-day";
    } else {
      return "not-current-day";
    }
  }

  renderEvents() {
    if (this.props.events && this.props.events.length) {
      return this.props.events.map(event => {
        return <EventContainer key={event.id} event={event} />;
      });
    }
  }

  render() {
    return (
      <div id="grid-day" className={this.isCurrentDay()}>
        <p id="grid-day-num">{this.props.day.num}</p>
        <p>{this.props.day.name}</p>

        <ul id="event-list">{this.renderEvents()}</ul>
      </div>
    );
  }
}
