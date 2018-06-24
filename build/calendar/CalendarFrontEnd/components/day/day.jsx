import React from "react";
import EventContainer from "../event/eventContainer";
import CreateEventForm from "../event/createEvent/createEventContainer";

export default class Day extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderCreateEventForm: false
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.isCurrentDay = this.isCurrentDay.bind(this);

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.renderCreateEventForm = this.renderCreateEventForm.bind(this);
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
      return this.props.events
        .sort((a, b) => {
          let aHour = parseInt(a.start_date.slice(11, 13));
          let bHour = parseInt(b.start_date.slice(11, 13));

          if (aHour < bHour) {
            return -1;
          } else if (aHour > bHour) {
            return 1;
          } else {
            return 0;
          }
        })
        .map(event => {
          return (
            <EventContainer
              key={event.id}
              event={event}
              months={this.props.months}
              currentDay={this.props.day}
            />
          );
        });
    }
  }

  openForm() {
    if (!this.state.renderCreateEventForm) {
      this.setState({ renderCreateEventForm: true });
    }
  }

  closeForm() {
    if (this.state.renderCreateEventForm) {
      this.setState({ renderCreateEventForm: false });
    }
  }

  renderCreateEventForm() {
    if (this.state.renderCreateEventForm) {
      return (
        <CreateEventForm
          closeForm={this.closeForm}
          months={this.props.months}
          currentDay={this.props.day}
        />
      );
    }
  }

  render() {
    return (
      <div
        id="grid-day"
        className={this.isCurrentDay()}
        onClick={this.openForm}
      >
        <p id="grid-day-num">{this.props.day.num}</p>

        <ul id="event-list">{this.renderEvents()}</ul>

        {this.renderCreateEventForm()}
      </div>
    );
  }
}
