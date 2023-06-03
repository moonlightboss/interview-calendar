import React from "react";
import Calendar from "./components/Calendar";
import Grid from "./components/Grid";
import { CalendarWrapper, CalendarContainer } from "./assets/AppStyles";

const App = () => {
  return (
    <div>
      <CalendarWrapper>
        <CalendarContainer>
          <Calendar />
          <Grid></Grid>
        </CalendarContainer>
      </CalendarWrapper>
    </div>
  );
};

export default App;
