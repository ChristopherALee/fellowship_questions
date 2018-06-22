import React from "react";

export default class Day extends React.Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
  }

  renderEvents() {
    if (this.props.events && this.props.events.length) {
      return this.props.events.map(event => {
        return (
          <li key={event.id}>
            <p id="scheduled-time">{event.start_time}</p>

            <p id="description">{event.description}</p>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div id="grid-day">
        <p>{this.props.day.num}</p>
        <p>{this.props.day.name}</p>

        <ul id="event-list">{this.renderEvents()}</ul>
      </div>
    );
  }
}
