import styled from "styled-components";

export const CalendarWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CalendarContainerWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* Выравнивание по верхней границе */
`;

export const TimeColumn = styled.div`
  width: 60px; /* Ширина колонки с временем */
  padding-right: 20px; /* Отступ справа */
`;

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 740px;
`;
export const TimeSlot = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;