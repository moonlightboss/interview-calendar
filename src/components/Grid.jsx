import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 20px;
  padding:10px;
  column-gap: 82px;
`;

const GridItem = styled.div`
  grid-column: span ${(props) => props.columns};
  grid-row: span ${(props) => props.rows};
  background-color: #fff;
  padding: 2px;
  border: 1px solid #000;
  font-size: 10px;
  width:30px;
`;

const Grid = () => {
  return (
    <GridContainer>
      {Array.from({ length: 24 * 7 }, (_, index) => (
        <GridItem key={index + 1} columns={1} rows={1}>
          {index + 1}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;


