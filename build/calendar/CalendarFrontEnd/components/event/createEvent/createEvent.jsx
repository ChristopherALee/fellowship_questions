import React from "react";

export default class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDate: `${this.props.currentMonth} ${this.props.currentDay}, 2018`,
      eventDescription: "",
      month: this.props.displayMonthStr,
      day: this.props.currentDayStr,
      startTime: "T00:00:00.000-04:00",
      endTime: "T00:30:00.000-04:00"
    };

    this.populateTimes = this.populateTimes.bind(this);

    this.populateMonth = this.populateMonth.bind(this);
    this.populateDate = this.populateDate.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeForm();

    let dateStr;
    if (String(this.props.currentDay.num).length === 1) {
      dateStr = "0" + String(this.props.currentDay.num);
    } else {
      dateStr = String(this.props.currentDay.num);
    }

    this.props.createEvent({
      event: {
        description: this.state.eventDescription,
        start_date: `2018-${this.state.month}-${dateStr}${
          this.state.startTime
        }`,
        end_date: `2018-${this.state.month}-${dateStr}${this.state.endTime}`,
        month: this.props.displayMonthIdx + 1
      }
    });
  }

  populateMonth() {
    const currentMonth = this.props.currentMonth;
    const displayMonthStr = this.props.displayMonthStr;

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
          <option selected value={`${realMonth}`}>
            {month}
          </option>
        );
      } else {
        return <option value={`${realMonth}`}>{month}</option>;
      }
    });
  }

  populateDays() {
    const currentMonthKey = this.props.currentMonthKey;
    const currentDay = this.props.currentDay.num;
    const currentDayStr = this.props.currentDayStr;
    const daysOfMonth = this.props.months[currentMonthKey].numDays;

    let days = [];
    for (let day = 1; day <= daysOfMonth; day++) {
      days.push(day);
    }

    return days.map(day => {
      if (day === currentDay) {
        return (
          <option selected value={currentDayStr}>
            {day}
          </option>
        );
      } else {
        return <option value={currentDayStr}>{day}</option>;
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
        <div id="event-modal-overlay" onClick={this.props.closeForm} />

        <div id="event-modal-detail-container">
          <div id="close-modal-x" onClick={this.props.closeForm}>
            <p>X</p>
          </div>

          <div id="event-modal-detail">
            <form action="submit" method="post" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter event..."
                value={this.state.eventDescription}
                onChange={this.handleChange("eventDescription")}
              />

              <div id="timeframe">
                {this.populateDate()}

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
