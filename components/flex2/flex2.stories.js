import React from 'react';
import {
  Flex0,
  Flex1,
  Flex2,
  Flex3,
  FlexButton,
  FlexStackRow,
  FlexStackCol
} from './flex2';
import FlexCorners from '../flex2/FlexCorners';
import QuestionCard from './QuestionCard';
import CommentCard from './CommentCard';
import AnswerCard from './AnswerCard';

export default { title: 'components|Flex2' };

export const flex = () => (
  <>
    <Flex0 />
    <br />
    <Flex1 />
    <br />
    <Flex2 />
    <br />
    <Flex3 />
    <br />
  </>
);

export const flexButton = () => <FlexButton />;

export const flexStack = () => (
  <>
    <FlexStackRow />
    <br />
    <br />
    <FlexStackCol />
  </>
);

export const flexCorners = () => <FlexCorners />;

export const questionCard = () => <QuestionCard />;

export const commentCard = () => <CommentCard />;

export const answerCard = () => <AnswerCard />;
