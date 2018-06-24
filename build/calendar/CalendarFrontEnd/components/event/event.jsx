import React from "react";

export default class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventModalShown: false,
      eventDescription: this.props.event.description,
      month: this.props.displayMonthStr,
      day: this.props.currentDayStr,
      startTime: this.props.event.start_date.slice(10),
      endTime: this.props.event.end_date.slice(10)
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderEventModal = this.renderEventModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeEvent = this.removeEvent.bind(this);

    this.populateDate = this.populateDate.bind(this);
  }

  stringInt(int) {
    if (int < 10) {
      return "0" + String(int);
    } else {
      return String(int);
    }
  }

  openModal(e) {
    e.stopPropagation();

    if (!this.state.eventModalShown) {
      this.setState({ eventModalShown: true });
    }
  }

  closeModal() {
    if (this.state.eventModalShown) {
      this.setState({ eventModalShown: false });
    }
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });

      if (field === "startTime") {
        let startTimeHour = e.target.value.slice(1, 3);
        let startTimeMin = e.target.value.slice(4, 6);

        let newEndTime;
        if (startTimeMin === "30") {
          newEndTime = `T${this.stringInt(
            parseInt(startTimeHour) + 1
          )}:00:00.000`;
        } else {
          newEndTime = `T${startTimeHour}:30:00.000`;
        }

        this.setState({ endTime: newEndTime });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.closeModal();

    this.props.updateEvent({
      event: {
        description: this.state.eventDescription,
        start_date: `2018-${this.state.month}-${this.state.day}${
          this.state.startTime
        }`,
        end_date: `2018-${this.state.month}-${this.state.day}${
          this.state.endTime
        }`,
        eventId: this.props.event.id
      }
    });
  }

  removeEvent() {
    this.props.removeEvent(this.props.event.id);
  }

  populateMonth() {
    const currentMonth = this.props.currentMonth;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return months.map((month, idx) => {
      let realMonth = idx + 1;
      if (realMonth < 10) {
        realMonth = "0" + String(realMonth);
      } else {
        realMonth = String(realMonth);
      }

      if (month === currentMonth) {
        return (
          <option selected value={`${realMonth}`} key={idx}>
            {month}
          </option>
        );
      } else {
        return (
          <option value={`${realMonth}`} key={idx}>
            {month}
          </option>
        );
      }
    });
  }

  populateDays() {
    const currentMonthKey = this.props.currentMonthKey;
    const currentDay = this.props.currentDay.num;
    const daysOfMonth = this.props.months[currentMonthKey].numDays;

    let days = [];
    for (let day = 1; day <= daysOfMonth; day++) {
      days.push(day);
    }

    return days.map((day, idx) => {
      let currentDayStr;
      if (day < 10) {
        currentDayStr = "0" + String(day);
      } else {
        currentDayStr = String(day);
      }

      if (day === currentDay) {
        return (
          <option selected value={currentDayStr} key={idx}>
            {day}
          </option>
        );
      } else {
        return (
          <option value={currentDayStr} key={idx}>
            {day}
          </option>
        );
      }
    });
  }

  populateDate() {
    return (
      <div id="date-select">
        <select id="month-select" onChange={this.handleChange("month")}>
          {this.populateMonth()}
        </select>

        <select id="day-select" onChange={this.handleChange("day")}>
          {this.populateDays()}
        </select>
        <p>, 2018</p>
      </div>
    );
  }

  populateTimes(setting = null) {
    let valHour = 0;
    let valHourStr;

    let hour = 12;
    let min = 0;
    let minStr;
    let amOrPm;

    if (!setting) {
      let newTimes = [];
      for (let i = 0; i < 48; i++) {
        valHourStr = String(valHour);
        if (valHourStr.length === 1) {
          valHourStr = "0" + valHourStr;
        }

        minStr = String(min);
        if (minStr.length === 1) {
          minStr = "0" + minStr;
        }

        amOrPm = valHour >= 11 ? "PM" : "AM";
        if (this.state.startTime === `T${valHourStr}:${minStr}:00.000Z`) {
          newTimes.push(
            <option
              selected
              value={`T${valHourStr}:${minStr}:00.000`}
              key={i}
            >{`${hour}:${minStr} ${amOrPm}`}</option>
          );
        } else {
          newTimes.push(
            <option
              value={`T${valHourStr}:${minStr}:00.000`}
              key={i}
            >{`${hour}:${minStr} ${amOrPm}`}</option>
          );
        }

        min += 30;

        if (min === 60) {
          valHour += 1;
          hour += 1;
          min = 0;
        }

        if (hour === 13) {
          hour = 1;
        }
      }

      return newTimes;
    } else {
      let newTimes = [];
      for (let i = 0; i < 48; i++) {
        valHourStr = String(valHour);
        if (valHourStr.length === 1) {
          valHourStr = "0" + valHourStr;
        }

        minStr = String(min);
        if (minStr.length === 1) {
          minStr = "0" + minStr;
        }

        amOrPm = valHour >= 12 ? "PM" : "AM";
        if (this.state.endTime === `T${valHourStr}:${minStr}:00.000`) {
          newTimes.push(
            <option
              selected
              value={`T${valHourStr}:${minStr}:00.000`}
              key={i}
            >{`${hour}:${minStr} ${amOrPm}`}</option>
          );
        } else {
          newTimes.push(
            <option
              value={`T${valHourStr}:${minStr}:00.000`}
              key={i}
            >{`${hour}:${minStr} ${amOrPm}`}</option>
          );
        }

        min += 30;

        if (min === 60) {
          valHour += 1;
          hour += 1;
          min = 0;
        }

        if (hour === 13) {
          hour = 1;
        }
      }

      let startHour = parseInt(this.state.startTime.slice(1, 3));
      let startMins = this.state.startTime.slice(4, 6);
      let orderSumStart = parseInt(startHour + String(startMins));

      return newTimes.filter(time => {
        let endHour = parseInt(time.props.value.slice(1, 3));
        let mins = time.props.value.slice(4, 6);
        let orderSumEnd = parseInt(endHour + String(mins));

        return endHour >= startHour && orderSumEnd > orderSumStart;
      });
    }
  }

  renderEventModal() {
    if (this.state.eventModalShown) {
      return (
        <div id="event-modal-container">
          <div id="event-modal-overlay" onClick={this.closeModal} />

          <div id="event-modal-detail-container">
            <div id="close-modal-x" onClick={this.closeModal}>
              <p>X</p>
            </div>

            <div id="event-modal-detail">
              <form action="submit" method="post" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder={this.props.event.description}
                  value={this.state.eventDescription}
                  onChange={this.handleChange("eventDescription")}
                />

                <div id="timeframe">
                  {this.populateDate()}

                  <div id="time-select">
                    <select
                      id="start-time-select"
                      onChange={this.handleChange("startTime")}
                    >
                      {this.populateTimes()}
                    </select>

                    <p> to </p>

                    <select
                      id="end-time-select"
                      onChange={this.handleChange("endTime")}
                    >
                      {this.populateTimes("endTime")}
                    </select>
                  </div>
                </div>

                <button type="submit">Save</button>
              </form>

              <div id="delete-event-button" onClick={this.removeEvent}>
                <button>Delete Event</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <li id="event-list-item" onClick={this.openModal}>
        <p id="scheduled-time">{this.props.event.start_time}</p>

        <p id="description">{this.props.event.description}</p>

        {this.renderEventModal()}
      </li>
    );
  }
}
