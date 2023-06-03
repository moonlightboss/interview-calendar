import React from "react";
import Calendar from "./components/Calendar";
import Grid from "./components/Grid";
import moment from 'moment';
import { CalendarWrapper, CalendarContainer, TimeColumn, CalendarContainerWrapper, TimeSlot } from "./assets/AppStyles";

const App = () => {
  const renderTimeSlots = () => {
    const timeSlots = [];
    const startTime = moment().startOf('day');

    for (let i = 0; i < 24; i++) {
      const timeSlot = startTime.clone().add(i, 'hours');
      timeSlots.push(
        <TimeSlot key={i}>
          {timeSlot.format('HH:mm')}
        </TimeSlot>
      );
    }

    return timeSlots;
  };

  return (
    <CalendarWrapper>
      <CalendarContainerWrapper>
         <TimeColumn>
          {renderTimeSlots()}
        </TimeColumn>
        <CalendarContainer>
          <Calendar/>
          <Grid/>
        </CalendarContainer>
      </CalendarContainerWrapper>
    </CalendarWrapper>
  );
};
export default App;

