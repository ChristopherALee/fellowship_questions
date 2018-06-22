import React from "react";
import { Route, Switch } from "react-router-dom";
import CalendarContainer from "./calendar/calendarContainer";

const App = () => {
  return (
    <main id="calendar-app">
      <Route path="/" component={CalendarContainer} />
    </main>
  );
};

export default App;
