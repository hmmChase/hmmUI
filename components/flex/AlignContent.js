import React from 'react';
import styled from 'styled-components';

const AlignContent = () => (
  <>
    <h2>
      Aligns a flex container's lines within when there is extra space in the
      cross-axis
    </h2>
    <h3>
      Similar to how justify-content aligns individual items within the
      main-axis
    </h3>
    <h3>Determines how to account for extra space in the cross-axis</h3>
    <h3>
      It only applies if flex-wrap: wrap is present, and if there are multiple
      lines of flexbox/grid items
    </h3>

    <Code>flex-direction: row</Code>
    <Code>flex-wrap: wrap</Code>

    <Heading>stretch</Heading>

    <Desc> - Lines stretch to take up the remaining space (default)</Desc>

    <Container style={{ alignContent: 'stretch', flexWrap: 'wrap' }}>
      <P style={{ backgroundColor: 'yellow' }}>1</P>
      <P style={{ backgroundColor: 'yellow' }}>2</P>
      <P style={{ backgroundColor: 'yellow' }}>3</P>
      <P style={{ backgroundColor: 'yellow' }}>4</P>
      <P style={{ backgroundColor: 'yellow' }}>5</P>
      <P style={{ backgroundColor: 'yellow' }}>6</P>
      <P style={{ backgroundColor: 'yellow' }}>7</P>
      <P style={{ backgroundColor: 'yellow' }}>8</P>
    </Container>

    <Heading>flex-start</Heading>

    <Desc> - Lines packed to the start of the container</Desc>

    <Container style={{ alignContent: 'flex-start', flexWrap: 'wrap' }}>
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

    <Desc> - Lines packed to the center of the container</Desc>

    <Container style={{ alignContent: 'center', flexWrap: 'wrap' }}>
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

    <Desc> - Lines packed to the end of the container</Desc>

    <Container style={{ alignContent: 'flex-end', flexWrap: 'wrap' }}>
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

    <Desc>
      - Lines evenly distributed; the first line is at the start of the
      container while the last one is at the end
    </Desc>

    <Container style={{ alignContent: 'space-between', flexWrap: 'wrap' }}>
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

    <Desc> - Lines evenly distributed with equal space around each line</Desc>

    <Container style={{ alignContent: 'space-around', flexWrap: 'wrap' }}>
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

    <Container style={{ alignContent: 'space-evenly', flexWrap: 'wrap' }}>
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

    <Code>flex-direction: row</Code>
    <Code>flex-wrap: wrap</Code>
    <Code>height: 200px</Code>

    <Heading>stretch</Heading>

    <Container
      style={{ alignContent: 'stretch', flexWrap: 'wrap', height: '200px' }}
    >
      <P style={{ backgroundColor: 'yellow' }}>1</P>
      <P style={{ backgroundColor: 'yellow' }}>2</P>
      <P style={{ backgroundColor: 'yellow' }}>3</P>
      <P style={{ backgroundColor: 'yellow' }}>4</P>
      <P style={{ backgroundColor: 'yellow' }}>5</P>
      <P style={{ backgroundColor: 'yellow' }}>6</P>
      <P style={{ backgroundColor: 'yellow' }}>7</P>
      <P style={{ backgroundColor: 'yellow' }}>8</P>
    </Container>

    <Heading>flex-start</Heading>

    <Container
      style={{ alignContent: 'flex-start', flexWrap: 'wrap', height: '200px' }}
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

    <Container
      style={{ alignContent: 'center', flexWrap: 'wrap', height: '200px' }}
    >
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

    <Container
      style={{ alignContent: 'flex-end', flexWrap: 'wrap', height: '200px' }}
    >
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
      style={{
        alignContent: 'space-between',
        flexWrap: 'wrap',
        height: '200px'
      }}
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
      style={{
        alignContent: 'space-around',
        flexWrap: 'wrap',
        height: '200px'
      }}
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
      style={{
        alignContent: 'space-evenly',
        flexWrap: 'wrap',
        height: '200px'
      }}
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

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: row</Code>
    <Code>flex-wrap: wrap</Code>
    <Code>height: 200px</Code>
    <pre>items</pre>
    <Code>width: 200px</Code>

    <Heading>stretch</Heading>

    <Container
      style={{ alignContent: 'stretch', flexWrap: 'wrap', height: '200px' }}
    >
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>1</P>
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>2</P>
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>3</P>
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>4</P>
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>5</P>
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>6</P>
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>7</P>
      <P style={{ backgroundColor: 'yellow', width: '200px' }}>8</P>
    </Container>

    <Heading>flex-start</Heading>

    <Container
      style={{ alignContent: 'flex-start', flexWrap: 'wrap', height: '200px' }}
    >
      <P style={{ backgroundColor: 'red', width: '200px' }}>1</P>
      <P style={{ backgroundColor: 'red', width: '200px' }}>2</P>
      <P style={{ backgroundColor: 'red', width: '200px' }}>3</P>
      <P style={{ backgroundColor: 'red', width: '200px' }}>4</P>
      <P style={{ backgroundColor: 'red', width: '200px' }}>5</P>
      <P style={{ backgroundColor: 'red', width: '200px' }}>6</P>
      <P style={{ backgroundColor: 'red', width: '200px' }}>7</P>
      <P style={{ backgroundColor: 'red', width: '200px' }}>8</P>
    </Container>

    <Heading>center</Heading>

    <Container
      style={{ alignContent: 'center', flexWrap: 'wrap', height: '200px' }}
    >
      <P style={{ backgroundColor: 'blue', width: '200px' }}>1</P>
      <P style={{ backgroundColor: 'blue', width: '200px' }}>2</P>
      <P style={{ backgroundColor: 'blue', width: '200px' }}>3</P>
      <P style={{ backgroundColor: 'blue', width: '200px' }}>4</P>
      <P style={{ backgroundColor: 'blue', width: '200px' }}>5</P>
      <P style={{ backgroundColor: 'blue', width: '200px' }}>6</P>
      <P style={{ backgroundColor: 'blue', width: '200px' }}>7</P>
      <P style={{ backgroundColor: 'blue', width: '200px' }}>8</P>
    </Container>

    <Heading>flex-end</Heading>

    <Container
      style={{ alignContent: 'flex-end', flexWrap: 'wrap', height: '200px' }}
    >
      <P style={{ backgroundColor: 'green', width: '200px' }}>1</P>
      <P style={{ backgroundColor: 'green', width: '200px' }}>2</P>
      <P style={{ backgroundColor: 'green', width: '200px' }}>3</P>
      <P style={{ backgroundColor: 'green', width: '200px' }}>4</P>
      <P style={{ backgroundColor: 'green', width: '200px' }}>5</P>
      <P style={{ backgroundColor: 'green', width: '200px' }}>6</P>
      <P style={{ backgroundColor: 'green', width: '200px' }}>7</P>
      <P style={{ backgroundColor: 'green', width: '200px' }}>8</P>
    </Container>

    <Heading>space-between</Heading>

    <Container
      style={{
        alignContent: 'space-between',
        flexWrap: 'wrap',
        height: '200px'
      }}
    >
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>1</P>
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>2</P>
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>3</P>
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>4</P>
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>5</P>
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>6</P>
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>7</P>
      <P style={{ backgroundColor: 'tomato', width: '200px' }}>8</P>
    </Container>

    <Heading>space-around</Heading>

    <Container
      style={{
        alignContent: 'space-around',
        flexWrap: 'wrap',
        height: '200px'
      }}
    >
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '200px' }}>8</P>
    </Container>

    <Heading>space-evenly</Heading>

    <Container
      style={{
        alignContent: 'space-evenly',
        flexWrap: 'wrap',
        height: '200px'
      }}
    >
      <P style={{ backgroundColor: 'gold', width: '200px' }}>1</P>
      <P style={{ backgroundColor: 'gold', width: '200px' }}>2</P>
      <P style={{ backgroundColor: 'gold', width: '200px' }}>3</P>
      <P style={{ backgroundColor: 'gold', width: '200px' }}>4</P>
      <P style={{ backgroundColor: 'gold', width: '200px' }}>5</P>
      <P style={{ backgroundColor: 'gold', width: '200px' }}>6</P>
      <P style={{ backgroundColor: 'gold', width: '200px' }}>7</P>
      <P style={{ backgroundColor: 'gold', width: '200px' }}>8</P>
    </Container>

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: column</Code>
    <Code>flex-wrap: wrap</Code>

    <Heading>stretch</Heading>

    <Container
      style={{
        alignContent: 'stretch',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}
    >
      <P style={{ backgroundColor: 'yellow' }}>1</P>
      <P style={{ backgroundColor: 'yellow' }}>2</P>
      <P style={{ backgroundColor: 'yellow' }}>3</P>
      <P style={{ backgroundColor: 'yellow' }}>4</P>
      <P style={{ backgroundColor: 'yellow' }}>5</P>
      <P style={{ backgroundColor: 'yellow' }}>6</P>
      <P style={{ backgroundColor: 'yellow' }}>7</P>
      <P style={{ backgroundColor: 'yellow' }}>8</P>
    </Container>

    <Heading>flex-start</Heading>

    <Container
      style={{
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}
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

    <Container
      style={{
        alignContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}
    >
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

    <Container
      style={{
        alignContent: 'flex-end',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}
    >
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
      style={{
        alignContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}
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
      style={{
        alignContent: 'space-around',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}
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
      style={{
        alignContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}
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

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: column</Code>
    <Code>flex-wrap: wrap</Code>
    <Code>height: 500px</Code>

    <Heading>stretch</Heading>

    <Container
      style={{
        alignContent: 'stretch',
        flexWrap: 'wrap',
        height: '500px',
        flexDirection: 'column'
      }}
    >
      <P style={{ backgroundColor: 'yellow' }}>1</P>
      <P style={{ backgroundColor: 'yellow' }}>2</P>
      <P style={{ backgroundColor: 'yellow' }}>3</P>
      <P style={{ backgroundColor: 'yellow' }}>4</P>
      <P style={{ backgroundColor: 'yellow' }}>5</P>
      <P style={{ backgroundColor: 'yellow' }}>6</P>
      <P style={{ backgroundColor: 'yellow' }}>7</P>
      <P style={{ backgroundColor: 'yellow' }}>8</P>
    </Container>

    <Heading>flex-start</Heading>

    <Container
      style={{
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        height: '500px',
        flexDirection: 'column'
      }}
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

    <Container
      style={{
        alignContent: 'center',
        flexWrap: 'wrap',
        height: '500px',
        flexDirection: 'column'
      }}
    >
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

    <Container
      style={{
        alignContent: 'flex-end',
        flexWrap: 'wrap',
        height: '500px',
        flexDirection: 'column'
      }}
    >
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
      style={{
        alignContent: 'space-between',
        flexWrap: 'wrap',
        height: '500px',
        flexDirection: 'column'
      }}
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
      style={{
        alignContent: 'space-around',
        flexWrap: 'wrap',
        height: '500px',
        flexDirection: 'column'
      }}
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
      style={{
        alignContent: 'space-evenly',
        flexWrap: 'wrap',
        height: '500px',
        flexDirection: 'column'
      }}
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

export default AlignContent;

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
