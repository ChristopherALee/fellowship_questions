import React from "react";

export default class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventModalShown: false,
      eventDescription: this.props.event.description,
      startTime: this.props.event.start_date.slice(10),
      endTime: this.props.event.end_date.slice(10)
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderEventModal = this.renderEventModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
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
    };
  }

  populateTimes(setting = null) {
    let times = [
      <option value="T00:00:00.000-04:00">12:00 AM</option>,
      <option value="T00:30:00.000-04:00">12:30 AM</option>,
      <option value="T01:00:00.000-04:00">1:00 AM</option>,
      <option value="T01:30:00.000-04:00">1:30 AM</option>,
      <option value="T02:00:00.000-04:00">2:00 AM</option>,
      <option value="T02:30:00.000-04:00">2:30 AM</option>,
      <option value="T03:00:00.000-04:00">3:00 AM</option>,
      <option value="T03:30:00.000-04:00">3:30 AM</option>,
      <option value="T04:00:00.000-04:00">4:00 AM</option>,
      <option value="T04:30:00.000-04:00">4:30 AM</option>,
      <option value="T05:00:00.000-04:00">5:00 AM</option>,
      <option value="T05:30:00.000-04:00">5:30 AM</option>,
      <option value="T06:00:00.000-04:00">6:00 AM</option>,
      <option value="T06:30:00.000-04:00">6:30 AM</option>,
      <option value="T07:00:00.000-04:00">7:00 AM</option>,
      <option value="T07:30:00.000-04:00">7:30 AM</option>,
      <option value="T08:00:00.000-04:00">8:00 AM</option>,
      <option value="T08:30:00.000-04:00">8:30 AM</option>,
      <option value="T09:00:00.000-04:00">9:00 AM</option>,
      <option value="T09:30:00.000-04:00">9:30 AM</option>,
      <option value="T10:00:00.000-04:00">10:00 AM</option>,
      <option value="T10:30:00.000-04:00">10:30 AM</option>,
      <option value="T11:00:00.000-04:00">11:00 AM</option>,
      <option value="T11:30:00.000-04:00">11:30 AM</option>,
      <option value="T12:00:00.000-04:00">12:00 PM</option>,
      <option value="T12:30:00.000-04:00">12:30 PM</option>,
      <option value="T13:00:00.000-04:00">1:00 PM</option>,
      <option value="T13:30:00.000-04:00">1:30 PM</option>,
      <option value="T14:00:00.000-04:00">2:00 PM</option>,
      <option value="T14:30:00.000-04:00">2:30 PM</option>,
      <option value="T15:00:00.000-04:00">3:00 PM</option>,
      <option value="T15:30:00.000-04:00">3:30 PM</option>,
      <option value="T16:00:00.000-04:00">4:00 PM</option>,
      <option value="T16:30:00.000-04:00">4:30 PM</option>,
      <option value="T17:00:00.000-04:00">5:00 PM</option>,
      <option value="T17:30:00.000-04:00">5:30 PM</option>,
      <option value="T18:00:00.000-04:00">6:00 PM</option>,
      <option value="T18:30:00.000-04:00">6:30 PM</option>,
      <option value="T19:00:00.000-04:00">7:00 PM</option>,
      <option value="T19:30:00.000-04:00">7:30 PM</option>,
      <option value="T20:00:00.000-04:00">8:00 PM</option>,
      <option value="T20:30:00.000-04:00">8:30 PM</option>,
      <option value="T21:00:00.000-04:00">9:00 PM</option>,
      <option value="T21:30:00.000-04:00">9:30 PM</option>,
      <option value="T22:00:00.000-04:00">10:00 PM</option>,
      <option value="T22:30:00.000-04:00">10:30 PM</option>,
      <option value="T23:00:00.000-04:00">11:00 PM</option>,
      <option value="T23:30:00.000-04:00">11:30 PM</option>
    ];

    if (!setting) {
      let valHour = 0;

      let hour = 12;
      let min = 0;
      let amOrPm;

      let newTimes = [];
      for (let i = 0; i < times.length; i++) {
        let valHourStr = String(valHour);
        if (valHourStr.length === 1) {
          valHourStr = "0" + valHourStr;
        }

        let minStr = String(min);
        if (minStr.length === 1) {
          minStr = "0" + minStr;
        }

        amOrPm = valHour >= 11 ? "PM" : "AM";
        if (this.state.startTime === `T${valHourStr}:${minStr}:00.000-04:00`) {
          newTimes.push(
            <option
              selected
              value={`T${valHourStr}:${minStr}:00.000-04:00`}
            >{`${hour}:${minStr} ${amOrPm}`}</option>
          );
        } else {
          newTimes.push(
            <option
              value={`T${valHourStr}:${minStr}:00.000-04:00`}
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
      let valHour = 0;

      let hour = 12;
      let min = 0;
      let amOrPm;

      let newTimes = [];
      for (let i = 0; i < times.length; i++) {
        let valHourStr = String(valHour);
        if (valHourStr.length === 1) {
          valHourStr = "0" + valHourStr;
        }

        let minStr = String(min);
        if (minStr.length === 1) {
          minStr = "0" + minStr;
        }

        amOrPm = valHour >= 11 ? "PM" : "AM";
        if (this.state.endTime === `T${valHourStr}:${minStr}:00.000-04:00`) {
          newTimes.push(
            <option
              selected
              value={`T${valHourStr}:${minStr}:00.000-04:00`}
            >{`${hour}:${minStr} ${amOrPm}`}</option>
          );
        } else {
          newTimes.push(
            <option
              value={`T${valHourStr}:${minStr}:00.000-04:00`}
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
          <div id="event-modal-overlay" />

          <div id="event-modal-detail-container">
            <div id="close-modal-x" onClick={this.closeModal}>
              <p>X</p>
            </div>

            <div id="event-modal-detail">
              <form action="submit" method="post">
                <input
                  type="text"
                  placeholder={this.props.event.description}
                  value={this.state.eventDescription}
                  onChange={this.handleChange("eventDescription")}
                />

                <div id="timeframe">
                  <select
                    id="start-time-select"
                    onChange={this.handleChange("startTime")}
                  >
                    {this.populateTimes()}
                  </select>

                  <select
                    id="end-time-select"
                    onChange={this.handleChange("endTime")}
                  >
                    {this.populateTimes("endTime")}
                  </select>
                </div>

                <button type="submit">Save</button>
              </form>
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
