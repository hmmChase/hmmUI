import React from 'react';
import styled from 'styled-components';

const SeedOfLife = props => (
  <Container>
    <Center>
      <Middle></Middle>
      <Circle1></Circle1>
      <Circle2></Circle2>
      <Circle3></Circle3>
      <Circle4></Circle4>
      <Circle5></Circle5>
      <Circle6></Circle6>
    </Center>
  </Container>
);

export default React.memo(SeedOfLife);

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* border: 1px dashed silver; */
  background-color: black;

  /* z-index: 10; */
`;

export const Center = styled.div`
  position: relative;
  /* border: 1px solid black; */
`;

export const Middle = styled.div`
  background-color: white;
  position: absolute;
  bottom: -50px;
  left: -50px;
  /* z-index: 1; */

  /* opacity: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Circle1 = styled.div`
  /* background-color: orange; */
  position: absolute;
  top: -100px;
  left: -50px;
  z-index: 1;

  /* opacity: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Circle2 = styled.div`
  /* background-color: yellow; */
  position: absolute;
  bottom: -25px;
  right: -93.301px;
  z-index: 2;

  /* opacity: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Circle3 = styled.div`
  /* background-color: green; */
  position: absolute;
  bottom: -75px;
  right: -93.301px;
  z-index: 3;

  /* opacity: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Circle4 = styled.div`
  /* background-color: blue; */
  position: absolute;
  left: -50px;
  z-index: 4;

  /* opacity: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Circle5 = styled.div`
  /* background-color: purple; */
  position: absolute;
  bottom: -75px;
  left: -93.301px;
  z-index: 5;

  /* opacity: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Circle6 = styled.div`
  /* background-color: red; */
  position: absolute;
  bottom: -25px;
  left: -93.301px;
  z-index: 6;

  /* opacity: 50%; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;
