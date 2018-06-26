import EventContainer from "../eventContainer";
import React from "react";

const ExtendedEvent = props => {
  const renderEvents = () => {
    if (props.events && props.events.length) {
      return props.events
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
              months={props.months}
              currentDay={props.currentDay}
            />
          );
        });
    }
  };

  return (
    <div id="extended-events-container">
      <div id="extended-events-overlay" onClick={props.closeExtendedEvent} />

      <div id="extended-day">
        <div id="grid-day-num">{props.currentDay.num}</div>
        <ul>{renderEvents()}</ul>
      </div>
    </div>
  );
};

export default ExtendedEvent;
