import React, { useState } from 'react';
import moment from 'moment';
import { Header, Title,TitleContainer, NavigationButtons, Button, AddDescriptionButton, DatesRow, DateCell, DateText } from '../assets/CalendarStyles';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const handlePrevWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, 'week'));
  };

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, 'week'));
  };

  const handleAddDescription = () => {
    // Добавить функционал добавления дескрипшна
    console.log('Добавление дескрипшна');
  };

  const renderDates = () => {
    const startOfWeek = moment(currentDate).startOf('isoWeek');
  
    return Array.from({ length: 7 }, (_, index) => {
      const date = moment(startOfWeek).add(index, 'days');
      const dayOfWeek = date.format('ddd')[0];
      const dayOfMonth = date.format('D');
      const isToday = date.isSame(moment(), 'day');
  
      return (
        <DateCell key={index}>
          <DateText>{dayOfWeek}</DateText>
          <DateText isToday={isToday}>{dayOfMonth}</DateText>
        </DateCell>
      );
    });
  };
  
  

  return (
        <>
        <Header>
          <TitleContainer>
            <Title>Interview Calendar</Title>
              <AddDescriptionButton onClick={handleAddDescription}>+</AddDescriptionButton>
          </TitleContainer>
        </Header>
        <NavigationButtons>
          <Button onClick={handlePrevWeek}>Prev</Button>
          <Button onClick={handleNextWeek}>Next</Button>
        </NavigationButtons>
      <DatesRow>{renderDates()}</DatesRow>
      </>
  );
};

export default Calendar;
