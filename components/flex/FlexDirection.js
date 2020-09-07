import React from 'react';
import styled from 'styled-components';

/*

flex-direction

The direction items are placed in the container
Establishes the main-axis

row - Items are placed the same as the text direction (default)
row-reverse - Items are placed opposite to the text direction
column - Items are placed top to bottom
column-reverse - Items are placed bottom to top

*/

export const FlexDirection = () => (
  <>
    <h6>row</h6>

    <Container style={{ flexDirection: 'row' }}>
      <P style={{ backgroundColor: 'red' }}>one</P>
      <P style={{ backgroundColor: 'green' }}>two</P>
      <P style={{ backgroundColor: 'blue' }}>three</P>
      <P style={{ backgroundColor: 'yellow' }}>four</P>
    </Container>

    <h6>row-reverse</h6>

    <Container style={{ flexDirection: 'row-reverse' }}>
      <P style={{ backgroundColor: 'red' }}>one</P>
      <P style={{ backgroundColor: 'green' }}>two</P>
      <P style={{ backgroundColor: 'blue' }}>three</P>
      <P style={{ backgroundColor: 'yellow' }}>four</P>
    </Container>

    <h6>column</h6>

    <Container style={{ flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'red' }}>one</P>
      <P style={{ backgroundColor: 'green' }}>two</P>
      <P style={{ backgroundColor: 'blue' }}>three</P>
      <P style={{ backgroundColor: 'yellow' }}>four</P>
    </Container>

    <h6>column-reverse</h6>

    <Container style={{ flexDirection: 'column-reverse' }}>
      <P style={{ backgroundColor: 'red' }}>one</P>
      <P style={{ backgroundColor: 'green' }}>two</P>
      <P style={{ backgroundColor: 'blue' }}>three</P>
      <P style={{ backgroundColor: 'yellow' }}>four</P>
    </Container>
  </>
);

export default FlexDirection;

const Container = styled.div`
  display: flex;
  border: 1px dashed silver;
`;

const P = styled.p`
  padding: 5px;
  width: 50px;
  height: 50px;
  margin: 10px;
  line-height: 40px;
  color: white;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  border: 1px dashed silver;
`;
