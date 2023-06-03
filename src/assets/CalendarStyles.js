import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const MonthYear = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const NavigationButtons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:last-child {
    margin-right: 0;
  }
`;

export const DatesRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 740px;
  padding: 10px;
`;

export const DateCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateText = styled.div`
  text-align: center;
  font-weight: ${(props) => (props.isToday ? 'bold' : 'normal')};
  color: ${(props) => (props.isToday ? 'red' : 'inherit')};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  margin-right: 10px;
  margin-bottom: 0; 
`;

export const AddDescriptionButton = styled(Button)`
  color: red;
  background-color: transparent;
  border: none;
  margin-left: 10px; 
`;

