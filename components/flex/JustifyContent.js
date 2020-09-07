import React from 'react';
import styled from 'styled-components';

const JustifyContent = () => (
  <>
    <h2>Aligns flex items along main-axis (default horizontally)</h2>

    <Code>flex-direction: row</Code>

    <Heading>flex-start</Heading>

    <Desc> - Items align to the left side of the container (default)</Desc>

    <Container style={{ justifyContent: 'flex-start' }}>
      <P style={{ backgroundColor: 'red' }}>1</P>
      <P style={{ backgroundColor: 'red' }}>2</P>
      <P style={{ backgroundColor: 'red' }}>3</P>
      <P style={{ backgroundColor: 'red' }}>4</P>
      <P style={{ backgroundColor: 'red' }}>5</P>
      <P style={{ backgroundColor: 'red' }}>6</P>
      <P style={{ backgroundColor: 'red' }}>7</P>
      <P style={{ backgroundColor: 'red' }}>8</P>
    </Container>

    <Heading>center</Heading>

    <Desc> - Items align at the center of the container</Desc>

    <Container style={{ justifyContent: 'center' }}>
      <P style={{ backgroundColor: 'blue' }}>1</P>
      <P style={{ backgroundColor: 'blue' }}>2</P>
      <P style={{ backgroundColor: 'blue' }}>3</P>
      <P style={{ backgroundColor: 'blue' }}>4</P>
      <P style={{ backgroundColor: 'blue' }}>5</P>
      <P style={{ backgroundColor: 'blue' }}>6</P>
      <P style={{ backgroundColor: 'blue' }}>7</P>
      <P style={{ backgroundColor: 'blue' }}>8</P>
    </Container>

    <Heading>flex-end</Heading>

    <Desc> - Items align to the right side of the container</Desc>

    <Container style={{ justifyContent: 'flex-end' }}>
      <P style={{ backgroundColor: 'green' }}>1</P>
      <P style={{ backgroundColor: 'green' }}>2</P>
      <P style={{ backgroundColor: 'green' }}>3</P>
      <P style={{ backgroundColor: 'green' }}>4</P>
      <P style={{ backgroundColor: 'green' }}>5</P>
      <P style={{ backgroundColor: 'green' }}>6</P>
      <P style={{ backgroundColor: 'green' }}>7</P>
      <P style={{ backgroundColor: 'green' }}>8</P>
    </Container>

    <Heading>space-between</Heading>

    <Desc> - Items display with equal spacing between them</Desc>

    <Container style={{ justifyContent: 'space-between' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </Container>

    <Heading>space-around</Heading>

    <Desc> - Items display with equal spacing around them</Desc>

    <Container style={{ justifyContent: 'space-around' }}>
      <P style={{ backgroundColor: 'deepskyblue' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>8</P>
    </Container>

    <Heading>space-evenly</Heading>

    <Desc>
      - Spacing between any two items (and the space to the edges) is equal
    </Desc>

    <Container style={{ justifyContent: 'space-evenly' }}>
      <P style={{ backgroundColor: 'gold' }}>1</P>
      <P style={{ backgroundColor: 'gold' }}>2</P>
      <P style={{ backgroundColor: 'gold' }}>3</P>
      <P style={{ backgroundColor: 'gold' }}>4</P>
      <P style={{ backgroundColor: 'gold' }}>5</P>
      <P style={{ backgroundColor: 'gold' }}>6</P>
      <P style={{ backgroundColor: 'gold' }}>7</P>
      <P style={{ backgroundColor: 'gold' }}>8</P>
    </Container>

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: column</Code>

    <Heading>flex-start</Heading>

    <Container
      style={{ justifyContent: 'flex-start', flexDirection: 'column' }}
    >
      <P style={{ backgroundColor: 'red' }}>1</P>
      <P style={{ backgroundColor: 'red' }}>2</P>
      <P style={{ backgroundColor: 'red' }}>3</P>
      <P style={{ backgroundColor: 'red' }}>4</P>
      <P style={{ backgroundColor: 'red' }}>5</P>
      <P style={{ backgroundColor: 'red' }}>6</P>
      <P style={{ backgroundColor: 'red' }}>7</P>
      <P style={{ backgroundColor: 'red' }}>8</P>
    </Container>

    <Heading>center</Heading>

    <Container style={{ justifyContent: 'center', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'blue' }}>1</P>
      <P style={{ backgroundColor: 'blue' }}>2</P>
      <P style={{ backgroundColor: 'blue' }}>3</P>
      <P style={{ backgroundColor: 'blue' }}>4</P>
      <P style={{ backgroundColor: 'blue' }}>5</P>
      <P style={{ backgroundColor: 'blue' }}>6</P>
      <P style={{ backgroundColor: 'blue' }}>7</P>
      <P style={{ backgroundColor: 'blue' }}>8</P>
    </Container>

    <Heading>flex-end</Heading>

    <Container style={{ justifyContent: 'flex-end', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'green' }}>1</P>
      <P style={{ backgroundColor: 'green' }}>2</P>
      <P style={{ backgroundColor: 'green' }}>3</P>
      <P style={{ backgroundColor: 'green' }}>4</P>
      <P style={{ backgroundColor: 'green' }}>5</P>
      <P style={{ backgroundColor: 'green' }}>6</P>
      <P style={{ backgroundColor: 'green' }}>7</P>
      <P style={{ backgroundColor: 'green' }}>8</P>
    </Container>

    <Heading>space-between</Heading>

    <Container
      style={{ justifyContent: 'space-between', flexDirection: 'column' }}
    >
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </Container>

    <Heading>space-around</Heading>

    <Container
      style={{ justifyContent: 'space-around', flexDirection: 'column' }}
    >
      <P style={{ backgroundColor: 'deepskyblue' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>8</P>
    </Container>

    <Heading>space-evenly</Heading>

    <Container
      style={{ justifyContent: 'space-evenly', flexDirection: 'column' }}
    >
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

export default JustifyContent;

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
