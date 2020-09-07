import React from 'react';
import styled from 'styled-components';

export const FlexDirection = () => (
  <>
    <h2>The direction items are placed in the container</h2>
    <h3>Establishes the main-axis</h3>

    <Heading>row</Heading>

    <Desc> - Items are placed the same as the text direction (default)</Desc>

    <Container style={{ flexDirection: 'row' }}>
      <P style={{ backgroundColor: 'red' }}>one</P>
      <P style={{ backgroundColor: 'green' }}>two</P>
      <P style={{ backgroundColor: 'blue' }}>three</P>
      <P style={{ backgroundColor: 'yellow' }}>four</P>
    </Container>

    <Heading>row-reverse</Heading>

    <Desc> - Items are placed opposite to the text direction</Desc>

    <Container style={{ flexDirection: 'row-reverse' }}>
      <P style={{ backgroundColor: 'red' }}>one</P>
      <P style={{ backgroundColor: 'green' }}>two</P>
      <P style={{ backgroundColor: 'blue' }}>three</P>
      <P style={{ backgroundColor: 'yellow' }}>four</P>
    </Container>

    <Heading>column</Heading>

    <Desc> - Items are placed top to bottom</Desc>

    <Container style={{ flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'red' }}>one</P>
      <P style={{ backgroundColor: 'green' }}>two</P>
      <P style={{ backgroundColor: 'blue' }}>three</P>
      <P style={{ backgroundColor: 'yellow' }}>four</P>
    </Container>

    <Heading>column-reverse</Heading>

    <Desc> - Items are placed bottom to top</Desc>

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

const Code = styled.pre`
  font-weight: 800;
  color: red;
`;

const Heading = styled.p`
  display: inline-block;
  font-size: 1rem;
  font-weight: 800;
  margin: 1rem 0;
`;

const Desc = styled.span`
  font-size: 0.8rem;
`;

const P = styled.p`
  text-align: center;
  color: lightgray;
  font-weight: bold;
  border: 1px dashed silver;
`;
