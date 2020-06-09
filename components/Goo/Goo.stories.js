import React from 'react';
// import { action } from '@storybook/addon-actions';
import allCombos from '../../.storybook/allCombos';
import Goo from './Goo';
import * as sc from './Goo.style';

export default { title: 'components|Goo', component: Goo };

const Blob = () => (
  <svg>
    <g style={{ animation: 'rotate_back 9s linear infinite' }}>
      <circle
        cx='50%'
        cy='50%'
        r='42'
        fill='lightseagreen'
        style={{
          animation: 'blob_four 12s ease-in-out -3s infinite alternate',
        }}
      />

      <circle
        cx='50%'
        cy='50%'
        r='36'
        fill='mediumaquamarine'
        style={{
          animation: 'blob_three 9s ease-in-out -3s infinite alternate',
        }}
      />

      <circle
        cx='50%'
        cy='50%'
        r='30'
        fill='palegreen'
        style={{
          animation: 'blob_two 6s ease-in-out -3s infinite alternate',
        }}
      />

      <circle
        cx='50%'
        cy='50%'
        r='24'
        fill='mediumspringgreen'
        style={{
          animation: 'blob_one 3s ease-in-out -3s infinite alternate',
        }}
      />
    </g>
  </svg>
);

const Line = () => (
  <svg>
    <g>
      <circle
        cx='25%'
        cy='50%'
        r='20'
        fill='darkorchid'
        style={{ animation: 'sway 0.4s ease-out infinite alternate' }}
      />

      <circle
        cx='45%'
        cy='50%'
        r='20'
        fill='blueviolet'
        style={{
          animation: 'sway 0.4s -0.4s ease-out infinite alternate',
        }}
      />

      <circle
        cx='65%'
        cy='50%'
        r='20'
        fill='rebeccapurple'
        style={{ animation: 'sway 0.4s ease-out infinite alternate' }}
      />
    </g>
  </svg>
);

const Rotate = () => (
  <svg>
    <g style={{ animation: 'rotate 5s linear infinite' }}>
      <circle cx='50%' cy='30%' r='24' fill='blueviolet' />

      <circle cx='70%' cy='50%' r='24' fill='darkorchid' />

      <circle cx='50%' cy='70%' r='24' fill='darkmagenta' />

      <circle cx='30%' cy='50%' r='24' fill='rebeccapurple' />

      <circle
        cx='50%'
        cy='30%'
        r='24'
        fill='hotpink'
        style={{ animation: 'rotate 2.5s linear infinite' }}
      />

      <circle
        cx='50%'
        cy='70%'
        r='24'
        fill='hotpink'
        style={{ animation: 'rotate 2.5s linear infinite' }}
      />
    </g>
  </svg>
);

const data = {
  children: [<Blob />, <Line />, <Rotate />],
  composite: false,
  blur: 12,
};

// const actions = {
//   onClick: action('onClick')
// };

export const goo = () => allCombos(Goo, data);
