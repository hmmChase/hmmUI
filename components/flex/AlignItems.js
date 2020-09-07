import React from 'react';
import styled from 'styled-components';

const AlignItems = () => (
  <>
    <h2>Aligns flex items along cross-axis (default vertically)</h2>
    <h3>Requires the container to have a defined height (for default)</h3>

    <Code>flex-direction: row</Code>

    <Heading>stretch</Heading>

    <Desc> - Items are stretched to fit the container (default)</Desc>

    <Container style={{ alignItems: 'stretch' }}>
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

    <Desc> - Items align to the top of the container</Desc>

    <Container style={{ alignItems: 'flex-start' }}>
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

    <Desc> - Items align at the vertical center of the container</Desc>

    <Container style={{ alignItems: 'center' }}>
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

    <Desc> - Items align to the bottom of the container</Desc>

    <Container style={{ alignItems: 'flex-end' }}>
      <P style={{ backgroundColor: 'green' }}>1</P>
      <P style={{ backgroundColor: 'green' }}>2</P>
      <P style={{ backgroundColor: 'green' }}>3</P>
      <P style={{ backgroundColor: 'green' }}>4</P>
      <P style={{ backgroundColor: 'green' }}>5</P>
      <P style={{ backgroundColor: 'green' }}>6</P>
      <P style={{ backgroundColor: 'green' }}>7</P>
      <P style={{ backgroundColor: 'green' }}>8</P>
    </Container>

    <Heading>baseline</Heading>

    <Desc>
      - Items display at the baseline (the bottom of text) of the container
    </Desc>

    <Container style={{ alignItems: 'baseline' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </Container>

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: row</Code>
    <Code>height: 200px</Code>

    <Heading>stretch</Heading>

    <Container style={{ alignItems: 'stretch', height: '200px' }}>
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

    <Container style={{ alignItems: 'flex-start', height: '200px' }}>
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

    <Container style={{ alignItems: 'center', height: '200px' }}>
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

    <Container style={{ alignItems: 'flex-end', height: '200px' }}>
      <P style={{ backgroundColor: 'green' }}>1</P>
      <P style={{ backgroundColor: 'green' }}>2</P>
      <P style={{ backgroundColor: 'green' }}>3</P>
      <P style={{ backgroundColor: 'green' }}>4</P>
      <P style={{ backgroundColor: 'green' }}>5</P>
      <P style={{ backgroundColor: 'green' }}>6</P>
      <P style={{ backgroundColor: 'green' }}>7</P>
      <P style={{ backgroundColor: 'green' }}>8</P>
    </Container>

    <Heading>baseline</Heading>

    <Container style={{ alignItems: 'baseline', height: '200px' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </Container>

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: column</Code>

    <Heading>stretch</Heading>

    <Container style={{ alignItems: 'stretch', flexDirection: 'column' }}>
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

    <Container style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
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

    <Container style={{ alignItems: 'center', flexDirection: 'column' }}>
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

    <Container style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'green' }}>1</P>
      <P style={{ backgroundColor: 'green' }}>2</P>
      <P style={{ backgroundColor: 'green' }}>3</P>
      <P style={{ backgroundColor: 'green' }}>4</P>
      <P style={{ backgroundColor: 'green' }}>5</P>
      <P style={{ backgroundColor: 'green' }}>6</P>
      <P style={{ backgroundColor: 'green' }}>7</P>
      <P style={{ backgroundColor: 'green' }}>8</P>
    </Container>

    <Heading>baseline</Heading>

    <Container style={{ alignItems: 'baseline', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </Container>
  </>
);

export default AlignItems;

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
