import React from 'react';
import styled from 'styled-components';

const CommentCard = () => (
  <Container>
    <Row>
      <Group>
        <PaddedTopBottom>Author</PaddedTopBottom>

        <PaddedTopBottom>Time</PaddedTopBottom>

        <PaddedTopBottom>Date</PaddedTopBottom>
      </Group>

      <Ellipsis style={{ backgroundColor: 'olive' }}>...</Ellipsis>
    </Row>

    <span>
      Magnam fuga officia in qui et at fugiat atque enim. Quaerat dolorem libero
      qui illum inventore est. Assumenda officiis aliquid praesentium saepe
      blanditiis. Aut et impedit. Consequuntur id quis placeat itaque qui nam
      dolor officiis.
    </span>
  </Container>
);

export default React.memo(CommentCard);

const Container = styled.div`
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 1rem 1rem;

  * * {
    /* border: 1px dashed red; */
    /* background-color: lightcoral; */
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Group = styled.div`
  display: flex;
  gap: 1rem;
`;

const Ellipsis = styled.span`
  padding: 1rem;
  line-height: 0.5rem;
`;

const PaddedTopBottom = styled.span`
  padding: 1rem 0;
`;
