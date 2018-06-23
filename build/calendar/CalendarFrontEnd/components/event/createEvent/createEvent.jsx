import React from "react";

export default class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventDescription: "",
      date: `2018-${this.props.displayMonthStr}-${this.props.currentDayStr}`,
      displayDate: `${this.props.currentMonth} ${this.props.currentDay}, 2018`,
      startTime: "T00:00:00.000-04:00",
      endTime: "T00:30:00.000-04:00"
    };
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  populateTimes(setting) {
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
      return times;
    } else {
      let startHour = parseInt(this.state.startTime.slice(1, 3));
      let startMins = this.state.startTime.slice(4, 6);
      let orderSumStart = parseInt(startHour + String(startMins));

      return times.filter(time => {
        let endHour = parseInt(time.props.value.slice(1, 3));
        let mins = time.props.value.slice(4, 6);
        let orderSumEnd = parseInt(endHour + String(mins));

        return endHour >= startHour && orderSumEnd > orderSumStart;
      });
    }
  }

  render() {
    return (
      <div id="event-modal-container">
        <div id="event-modal-overlay" onClick={this.props.closeModal} />

        <div id="event-modal-detail-container">
          <div id="close-modal-x" onClick={this.props.closeModal}>
            <p>X</p>
          </div>

          <div id="event-modal-detail">
            <form action="submit" method="post">
              <input
                type="text"
                placeholder="Enter event..."
                value={this.state.eventDescription}
                onChange={this.handleChange("eventDescription")}
              />

              <div id="timeframe">
                <select id="date-select" onChange={this.handleChange("date")}>
                  <option value="" />
                </select>

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

              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
