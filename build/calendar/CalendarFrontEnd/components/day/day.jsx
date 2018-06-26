import React from "react";
import EventContainer from "../event/eventContainer";
import CreateEventForm from "../event/createEvent/createEventContainer";
import ExtendedEvent from "../event/extendedEvent/extendedEvent";

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

    this.moreEventsMessage = this.moreEventsMessage.bind(this);
    this.openExtendedEvent = this.openExtendedEvent.bind(this);
    this.closeExtendedEvent = this.closeExtendedEvent.bind(this);
    this.renderExtendedEvent = this.renderExtendedEvent.bind(this);
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

  openForm(e) {
    if (
      (e.target.id === "grid-day" ||
        e.target.id === "grid-day-header" ||
        e.target.id === "add-event-symbol") &&
      !this.state.renderCreateEventForm
    ) {
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

  moreEventsMessage() {
    if (
      this.props.events &&
      this.props.events.length &&
      this.props.events.length >= 7
    ) {
      return (
        <div id="more-events-msg" onClick={this.openExtendedEvent}>
          <p>+ more events</p>
        </div>
      );
    }
  }

  openExtendedEvent(e) {
    e.stopPropagation();

    if (!this.state.renderExtendedEvent) {
      this.setState({ renderExtendedEvent: true });
    }
  }

  closeExtendedEvent() {
    if (this.state.renderExtendedEvent) {
      this.setState({ renderExtendedEvent: false });
    }
  }

  renderExtendedEvent() {
    if (this.state.renderExtendedEvent) {
      return (
        <ExtendedEvent
          events={this.props.events}
          months={this.props.months}
          currentDay={this.props.day}
          closeExtendedEvent={this.closeExtendedEvent}
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
        <div id="grid-day-header" onClick={this.openForm}>
          <div id="grid-day-num">{this.props.day.num}</div>
          <div id="add-event-symbol" onClick={this.openForm}>
            +
          </div>
        </div>

        <ul id="event-list" className={`event-list-${this.props.day.num}`}>
          {this.renderEvents()}
          {this.moreEventsMessage()}
        </ul>

        {this.renderExtendedEvent()}
        {this.renderCreateEventForm()}
      </div>
    );
  }
}
