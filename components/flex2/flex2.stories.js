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
