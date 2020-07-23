import React from 'react';
import * as sc from './Loaders.style';

export const Circles = () => (
  <sc.Container>
    <sc.OuterCircle>
      <sc.InnerCircle>
        <sc.CenterCircle>
          <sc.Content />
        </sc.CenterCircle>
      </sc.InnerCircle>
    </sc.OuterCircle>
  </sc.Container>
);

export default Circles;
