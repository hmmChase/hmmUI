import React from 'react';
import styled from 'styled-components';

/*

flex-wrap

*/

export const FlexWrap = () => (
  <>
    <h2>Changes line wrapping behavior</h2>

    <Code>flex-direction: row</Code>

    <Heading>nowrap</Heading>

    <Desc> - All flex items will be on one line (default)</Desc>

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

    <Heading>wrap</Heading>

    <Desc> - Flex items will wrap onto multiple lines, from top to bottom</Desc>

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

    <Heading>wrap-reverse</Heading>

    <Desc> - Flex items will wrap onto multiple lines from bottom to top</Desc>

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

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: row</Code>
    <pre>items: </pre>
    <Code>width: 100px</Code>

    <Heading>nowrap</Heading>

    <Container style={{ flexWrap: 'nowrap' }}>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>1</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>2</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>3</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>4</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>5</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>6</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>7</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>8</P>
    </Container>

    <Heading>wrap</Heading>

    <Container style={{ flexWrap: 'wrap' }}>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>8</P>
    </Container>

    <Heading>wrap-reverse</Heading>

    <Container style={{ flexWrap: 'wrap-reverse' }}>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>1</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>2</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>3</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>4</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>5</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>6</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>7</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>8</P>
    </Container>

    {/* ==================================================================== */}

    <br />
    <hr />

    <Code>flex-direction: column</Code>

    <Heading>nowrap</Heading>

    <Container style={{ flexWrap: 'nowrap', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </Container>

    <Heading>wrap</Heading>

    <Container style={{ flexWrap: 'wrap', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'deepskyblue' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>8</P>
    </Container>

    <Heading>wrap-reverse</Heading>

    <Container style={{ flexWrap: 'wrap-reverse', flexDirection: 'column' }}>
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
    <pre>items: </pre>
    <Code>width: 100px</Code>

    <Heading>nowrap</Heading>

    <Container style={{ flexWrap: 'nowrap', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>1</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>2</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>3</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>4</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>5</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>6</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>7</P>
      <P style={{ backgroundColor: 'tomato', width: '100px' }}>8</P>
    </Container>

    <Heading>wrap</Heading>

    <Container style={{ flexWrap: 'wrap', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue', width: '100px' }}>8</P>
    </Container>

    <Heading>wrap-reverse</Heading>

    <Container style={{ flexWrap: 'wrap-reverse', flexDirection: 'column' }}>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>1</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>2</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>3</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>4</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>5</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>6</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>7</P>
      <P style={{ backgroundColor: 'gold', width: '100px' }}>8</P>
    </Container>
  </>
);

export default FlexWrap;

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
