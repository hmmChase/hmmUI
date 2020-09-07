import React from 'react';
import styled from 'styled-components';

/*

justify-content

Aligns flex items along main-axis (default horizontally)
  Unless flex-direction is changed

flex-start - Items align to the left side of the container (default)
flex-end - Items align to the right side of the container
center - Items align at the center of the container
space-between - Items display with equal spacing between them
space-around - Items display with equal spacing around them
space-evenly - Spacing between any two items (and the space to the edges) is equal

*/

const JustifyContent = () => (
  <>
    <h2>flex-direction: row</h2>

    <h6>flex-start</h6>

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

    <h6>flex-end</h6>

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

    <h6>center</h6>

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

    <h6>space-between</h6>

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

    <h6>space-around</h6>

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

    <h6>space-evenly</h6>

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

    <h2>flex-direction: column</h2>

    <h6>flex-start</h6>

    <ContainerCol style={{ justifyContent: 'flex-start' }}>
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

    <ContainerCol style={{ justifyContent: 'flex-end' }}>
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

    <ContainerCol style={{ justifyContent: 'center' }}>
      <P style={{ backgroundColor: 'blue' }}>1</P>
      <P style={{ backgroundColor: 'blue' }}>2</P>
      <P style={{ backgroundColor: 'blue' }}>3</P>
      <P style={{ backgroundColor: 'blue' }}>4</P>
      <P style={{ backgroundColor: 'blue' }}>5</P>
      <P style={{ backgroundColor: 'blue' }}>6</P>
      <P style={{ backgroundColor: 'blue' }}>7</P>
      <P style={{ backgroundColor: 'blue' }}>8</P>
    </ContainerCol>

    <h6>space-between</h6>

    <ContainerCol style={{ justifyContent: 'space-between' }}>
      <P style={{ backgroundColor: 'tomato' }}>1</P>
      <P style={{ backgroundColor: 'tomato' }}>2</P>
      <P style={{ backgroundColor: 'tomato' }}>3</P>
      <P style={{ backgroundColor: 'tomato' }}>4</P>
      <P style={{ backgroundColor: 'tomato' }}>5</P>
      <P style={{ backgroundColor: 'tomato' }}>6</P>
      <P style={{ backgroundColor: 'tomato' }}>7</P>
      <P style={{ backgroundColor: 'tomato' }}>8</P>
    </ContainerCol>

    <h6>space-around</h6>

    <ContainerCol style={{ justifyContent: 'space-around' }}>
      <P style={{ backgroundColor: 'deepskyblue' }}>1</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>2</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>3</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>4</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>5</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>6</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>7</P>
      <P style={{ backgroundColor: 'deepskyblue' }}>8</P>
    </ContainerCol>

    <h6>space-evenly</h6>

    <ContainerCol style={{ justifyContent: 'space-evenly' }}>
      <P style={{ backgroundColor: 'gold' }}>1</P>
      <P style={{ backgroundColor: 'gold' }}>2</P>
      <P style={{ backgroundColor: 'gold' }}>3</P>
      <P style={{ backgroundColor: 'gold' }}>4</P>
      <P style={{ backgroundColor: 'gold' }}>5</P>
      <P style={{ backgroundColor: 'gold' }}>6</P>
      <P style={{ backgroundColor: 'gold' }}>7</P>
      <P style={{ backgroundColor: 'gold' }}>8</P>
    </ContainerCol>
  </>
);

export default JustifyContent;

const Container = styled.div`
  display: flex;
  border: 1px dashed silver;
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
