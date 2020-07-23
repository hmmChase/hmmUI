import React from 'react';
import { Grid0, GridInline, GridCard1, GridCard2 } from './grid';

export default { title: 'components|Grid' };

export const grid = () => (
  <>
    <Grid0 />
    <br />
    <GridInline />
    <br />
  </>
);

export const gridCard1 = () => <GridCard1 />;

export const gridCard2 = () => <GridCard2 />;
