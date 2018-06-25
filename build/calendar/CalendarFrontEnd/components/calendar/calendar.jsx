import React from "react";
import { Route } from "react-router-dom";
import DayContainer from "../day/dayContainer";
import CreateEventForm from "../event/createEvent/createEventContainer";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.currentMonth = this.currentMonth.bind(this);
    this.navPrevMonth = this.navPrevMonth.bind(this);
    this.navNextMonth = this.navNextMonth.bind(this);
    this.navCurrentMonth = this.navCurrentMonth.bind(this);
    this.activeLeftArrow = this.activeLeftArrow.bind(this);
    this.activeRightArrow = this.activeRightArrow.bind(this);
  }

  componentDidMount() {
    let date = new Date();
    let currentMonth = date.getMonth();
    let currentDay = date.getDate();
    let monthKeys = this.props.monthKeys;
    this.props.history.push(`${monthKeys[currentMonth]}`);
    this.props.fetchDisplayMonth(currentMonth);
    this.props.fetchCurrentMonth(monthKeys[currentMonth]);
    this.props.fetchCurrentDay(currentDay);
    this.props.fetchMonthEvents(currentMonth + 1);
    this.props.fetchMonthEventsDetails(currentMonth + 1);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      let keyMonth = this.props.monthKeys.findIndex(
        month => month === this.props.location.pathname.slice(1)
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
      let currentDay = this.props.currentDay;
      let currentMonth = this.props.currentMonth;
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
            name: this.props.days[dayIdx],
            month: month.url
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
          if (day.num === currentDay && day.month === currentMonth) {
            return (
              <DayContainer
                key={idx}
                day={day}
                currentDay={true}
                months={this.props.months}
              />
            );
          } else {
            return (
              <DayContainer
                key={idx}
                day={day}
                currentDay={false}
                months={this.props.months}
              />
            );
          }
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

  activeLeftArrow() {
    if (this.props.displayMonthIdx === 0) {
      return <div id="inactive-left-arrow" />;
    } else {
      return <div id="left-arrow" />;
    }
  }

  activeRightArrow() {
    if (this.props.displayMonthIdx === 11) {
      return <div id="inactive-right-arrow" />;
    } else {
      return <div id="right-arrow" />;
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

  navCurrentMonth() {
    if (
      this.props.currentMonth !== this.props.history.location.pathname.slice(1)
    ) {
      this.props.history.push(this.props.currentMonth);
    }
  }

  render() {
    return (
      <div id="calendar-container">
        <section id="header">
          <div id="today-button" onClick={this.navCurrentMonth}>
            Today
          </div>

          <div id="header-sub">
            <div id="left-arrow-container" onClick={this.navPrevMonth}>
              {this.activeLeftArrow()}
            </div>

            <h1 id="month">{this.currentMonth()}</h1>

            <div id="right-arrow-container" onClick={this.navNextMonth}>
              {this.activeRightArrow()}
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
