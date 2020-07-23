import React from 'react';
import * as sc from './SiblingHover.style';

const SiblingHover = () => (
  <sc.Container>
    <sc.Button
      role='radio'
      aria-checked='false'
      tabindex='-1'
      aria-label='Select image one'
    >
      <img
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-1.jpg'
        alt='Image description'
      />
    </sc.Button>

    <sc.Button
      role='radio'
      aria-checked='false'
      tabindex='-1'
      aria-label='Select image two'
    >
      <img
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-2.jpg'
        alt='Image description'
      />
    </sc.Button>

    <sc.Button
      role='radio'
      aria-checked='false'
      tabindex='-1'
      aria-label='Select image three'
    >
      <img
        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-3.jpg'
        alt='Image description'
      />
    </sc.Button>
  </sc.Container>
);

export default React.memo(SiblingHover);
