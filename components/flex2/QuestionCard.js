import React from 'react';
import styled from 'styled-components';

const QuestionCard = () => (
  <Container>
    <Row>
      <Group>
        <PaddedTopBottom>AuthorName</PaddedTopBottom>

        <PaddedTopBottom>Date</PaddedTopBottom>
      </Group>

      <GroupTopRight>
        <Fav>Fav</Fav>

        <Ellipsis style={{ backgroundColor: 'olive' }}>...</Ellipsis>
      </GroupTopRight>
    </Row>

    <Row>
      <Title>
        Magnam fuga officia in qui et at fugiat atque enim. Quaerat dolorem
        libero qui illum inventore est. Assumenda officiis aliquid praesentium
        saepe blanditiis. Aut et impedit. Consequuntur id quis placeat itaque
        qui nam dolor officiis.
      </Title>
    </Row>

    <Row>
      <Group>
        <span>AnswerCount</span>

        <span>CommentCount</span>
      </Group>

      <ViewLink>View Thread</ViewLink>
    </Row>
  </Container>
);

export default React.memo(QuestionCard);

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

const Title = styled.span`
  margin-bottom: 1rem;
`;

const Group = styled.div`
  display: flex;
  gap: 1rem;
`;

const GroupTopRight = styled.div`
  display: flex;
`;

const Fav = styled.span`
  /* padding: 1rem; */
  margin: auto 1rem auto 0;
`;

const Ellipsis = styled.span`
  padding: 1rem;
  line-height: 0.5rem;
`;

const PaddedTopBottom = styled.span`
  padding: 1rem 0;
`;

const ViewLink = styled.span`
  margin-right: 1rem;
`;
