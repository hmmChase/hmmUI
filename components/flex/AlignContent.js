import React from 'react';
import styled from 'styled-components';

/*

align-content

Aligns a flex container's lines within when there is extra space in the cross-axis
Similar to how justify-content aligns individual items within the main-axis
Determines how to account for extra space in the cross-axis

stretch - Lines stretch to take up the remaining space (default)
flex-start - Lines packed to the start of the container
flex-end - Lines packed to the end of the container
center - Lines packed to the center of the container
space-between - Lines evenly distributed; the first line is at the start of the container while the last one is at the end
space-around - Lines evenly distributed with equal space around each line

*/

const AlignContent = () => (
  <>
    <h2>flex-direction: row</h2>

    <h6>stretch</h6>

    <Container style={{ alignContent: 'stretch' }}>
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

    <Container style={{ alignContent: 'flex-start' }}>
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

    <Container style={{ alignContent: 'flex-end' }}>
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

    <Container style={{ alignContent: 'center' }}>
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

    <Container style={{ alignContent: 'space-between' }}>
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

    <Container style={{ alignContent: 'space-around' }}>
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

    <Container style={{ alignContent: 'space-evenly' }}>
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

    <ContainerCol style={{ alignContent: 'flex-start' }}>
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

    <ContainerCol style={{ alignContent: 'flex-end' }}>
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

    <ContainerCol style={{ alignContent: 'center' }}>
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

    <ContainerCol style={{ alignContent: 'space-between' }}>
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

    <ContainerCol style={{ alignContent: 'space-around' }}>
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

    <ContainerCol style={{ alignContent: 'space-evenly' }}>
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

export default AlignContent;

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
