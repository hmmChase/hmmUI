import React from 'react';
import styled from 'styled-components';

/*

align-items

Aligns flex items along cross-axis (default vertically)
  Unless flex-direction is changed
Requires the container to have a defined height (for default)

stretch - Items are stretched to fit the container (default)
flex-start - Items align to the top of the container
flex-end - Items align to the bottom of the container
center - Items align at the vertical center of the container
baseline - Items display at the baseline (the bottom of text) of the container

*/

const AlignItems = () => (
  <>
    <h2>flex-direction: row</h2>

    <h6>stretch</h6>

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

    <h6>flex-start</h6>

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

    <h6>flex-end</h6>

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

    <h6>center</h6>

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

    <h6>baseline</h6>

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

    <h2>flex-direction: column</h2>

    <h6>stretch</h6>

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

    <h6>flex-start</h6>

    <ContainerCol style={{ alignItems: 'flex-start' }}>
      <P style={{ backgroundColor: 'red' }}>1</P>
      <P style={{ backgroundColor: 'red' }}>2</P>
      <P style={{ backgroundColor: 'red' }}>3</P>
      <P style={{ backgroundColor: 'red' }}>4</P>
      <P style={{ backgroundColor: 'red' }}>5</P>
      <P style={{ backgroundColor: 'red' }}>6</P>
      <P style={{ backgroundColor: 'red' }}>7</P>
      <P style={{ backgroundColor: 'red' }}>8</P>
    </ContainerCol>

    <h6>flex-end</h6>

    <ContainerCol style={{ alignItems: 'flex-end' }}>
      <P style={{ backgroundColor: 'green' }}>1</P>
      <P style={{ backgroundColor: 'green' }}>2</P>
      <P style={{ backgroundColor: 'green' }}>3</P>
      <P style={{ backgroundColor: 'green' }}>4</P>
      <P style={{ backgroundColor: 'green' }}>5</P>
      <P style={{ backgroundColor: 'green' }}>6</P>
      <P style={{ backgroundColor: 'green' }}>7</P>
      <P style={{ backgroundColor: 'green' }}>8</P>
    </ContainerCol>

    <h6>center</h6>

    <ContainerCol style={{ alignItems: 'center' }}>
      <P style={{ backgroundColor: 'blue' }}>1</P>
      <P style={{ backgroundColor: 'blue' }}>2</P>
      <P style={{ backgroundColor: 'blue' }}>3</P>
      <P style={{ backgroundColor: 'blue' }}>4</P>
      <P style={{ backgroundColor: 'blue' }}>5</P>
      <P style={{ backgroundColor: 'blue' }}>6</P>
      <P style={{ backgroundColor: 'blue' }}>7</P>
      <P style={{ backgroundColor: 'blue' }}>8</P>
    </ContainerCol>

    <h6>baseline</h6>

    <ContainerCol style={{ alignItems: 'baseline' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </ContainerCol>
  </>
);

export default AlignItems;

const Container = styled.div`
  display: flex;
  border: 1px dashed silver;
  height: 100px;
`;

const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed silver;
  height: 600px;
`;

const P = styled.p`
  padding: 5px;
  width: 50px;
  height: 50px;
  margin: 0;
  line-height: 40px;
  color: white;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  border: 1px dashed silver;
`;
