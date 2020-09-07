import React from 'react';
import styled from 'styled-components';

/*

flex-wrap

Changes line wrapping behavior

nowrap - All flex items will be on one line (default)
wrap - Flex items will wrap onto multiple lines, from top to bottom
wrap-reverse - Flex items will wrap onto multiple lines from bottom to top

*/

export const FlexWrap = () => (
  <>
    <h6>nowrap</h6>

    <Container style={{ flexWrap: 'nowrap' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </Container>

    <h6>wrap</h6>

    <Container style={{ flexWrap: 'wrap' }}>
      <P style={{ backgroundColor: 'deepskyblue' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>8</P>
    </Container>

    <h6>wrap-reverse</h6>

    <Container style={{ flexWrap: 'wrap-reverse' }}>
      <P style={{ backgroundColor: 'gold' }}>1</P>
      <P style={{ backgroundColor: 'gold' }}>2</P>
      <P style={{ backgroundColor: 'gold' }}>3</P>
      <P style={{ backgroundColor: 'gold' }}>4</P>
      <P style={{ backgroundColor: 'gold' }}>5</P>
      <P style={{ backgroundColor: 'gold' }}>6</P>
      <P style={{ backgroundColor: 'gold' }}>7</P>
      <P style={{ backgroundColor: 'gold' }}>8</P>
    </Container>
  </>
);

export default FlexWrap;

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
