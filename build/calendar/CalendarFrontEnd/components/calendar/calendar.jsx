import React from "react";
import { Route } from "react-router-dom";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.currentMonth = this.currentMonth.bind(this);
    this.navPrevMonth = this.navPrevMonth.bind(this);
    this.navNextMonth = this.navNextMonth.bind(this);
  }

  componentDidMount() {
    let date = new Date();
    let currentMonth = date.getMonth();
    let monthKeys = this.props.monthKeys;
    this.props.history.push(`${monthKeys[currentMonth]}`);
    this.props.fetchDisplayMonth(currentMonth);
    this.props.fetchMonthEvents(currentMonth + 1);
    this.props.fetchMonthEventsDetails(currentMonth + 1);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      let keyMonth = this.props.monthKeys.findIndex(
        month => month === newProps.location.pathname.slice(1)
      );

      this.props.fetchDisplayMonth(keyMonth);
      this.props.fetchMonthEvents(keyMonth + 1);
      this.props.fetchMonthEventsDetails(keyMonth + 1);
    }
  }

  currentMonth() {
    if (this.props.displayMonthIdx || this.props.displayMonthIdx === 0) {
      let month = this.props.monthKeys[this.props.displayMonthIdx];
      return this.props.months[month].parsed;
    }
  }

  populateGrid() {
    if (this.props.displayMonthIdx || this.props.displayMonthIdx === 0) {
      let keyMonth = this.props.monthKeys[this.props.displayMonthIdx];
      let month = this.props.months[keyMonth];
      let start = month.start;
      let grid = [];

      let monthDate = 1;
      let dayIdx = this.props.days.findIndex(el => el === start);
      for (let day = 1; day <= 42; day++) {
        if (grid.length < dayIdx) {
          grid.push(null);
        } else if (monthDate > month.numDays) {
          grid.push(null);
        } else {
          grid.push({
            num: monthDate,
            name: this.props.days[dayIdx]
          });

          monthDate += 1;

          if (dayIdx === this.props.days.length - 1) {
            dayIdx = 0;
          } else {
            dayIdx += 1;
          }
        }
      }

      return grid.map((day, idx) => {
        if (!day) {
          return <li key={idx} id="grid-day" className="inactive-day" />;
        } else {
          return (
            <li key={idx} id="grid-day">
              <p>{day.num}</p>
              <p>{day.name}</p>
            </li>
          );
        }
      });
    }
  }

  navPrevMonth() {
    if (this.props.displayMonthIdx === 0) {
      return;
    } else {
      let prevMonth = this.props.displayMonthIdx - 1;
      prevMonth = this.props.monthKeys[prevMonth];
      this.props.history.push(prevMonth);
    }
  }

  navNextMonth() {
    if (this.props.displayMonthIdx === 11) {
      return;
    } else {
      let nextMonth = this.props.displayMonthIdx + 1;
      nextMonth = this.props.monthKeys[nextMonth];
      this.props.history.push(nextMonth);
    }
  }

  render() {
    return (
      <div id="calendar-container">
        <section id="header">
          <div id="header-sub">
            <div id="left-arrow-container" onClick={this.navPrevMonth}>
              <div id="left-arrow" />
            </div>

            <h1 id="month">{this.currentMonth()}</h1>

            <div id="right-arrow-container" onClick={this.navNextMonth}>
              <div id="right-arrow" />
            </div>
          </div>
        </section>

        <section id="days-of-week">
          <p id="day">Sunday</p>
          <p id="day">Monday</p>
          <p id="day">Tuesday</p>
          <p id="day">Wednesday</p>
          <p id="day">Thursday</p>
          <p id="day">Friday</p>
          <p id="day">Saturday</p>
        </section>

        <section id="calendar-grid">{this.populateGrid()}</section>
      </div>
    );
  }
}
