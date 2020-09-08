import React from 'react';
import styled from 'styled-components';

const FlexCorners = () => (
  <Container>
    <Row>
      <span style={{ backgroundColor: 'red' }}>top-left</span>
      <span style={{ backgroundColor: 'red' }}>top-middle</span>
      <span style={{ backgroundColor: 'red' }}>top-right</span>
    </Row>

    <Row>
      <span style={{ backgroundColor: 'blue' }}>middle-left</span>
      <span style={{ backgroundColor: 'blue' }}>middle-middle</span>
      <span style={{ backgroundColor: 'blue' }}>middle-right</span>
    </Row>

    <Row>
      <span style={{ backgroundColor: 'yellow' }}>bottom-left</span>
      <span style={{ backgroundColor: 'yellow' }}>bottom-middle</span>
      <span style={{ backgroundColor: 'yellow' }}>bottom-right</span>
    </Row>
  </Container>
);

export default React.memo(FlexCorners);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px dashed black;
  height: 300px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
