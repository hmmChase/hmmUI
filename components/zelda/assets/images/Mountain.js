import * as React from 'react';

const Mountain = (props) => (
  <svg width='1em' height='1em' viewBox='0 0 32 24' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 24L10 .5l6.5 10 3-5L32 24H0zm9-14l1.5-3 2 3H9zm9.5 3.5L20 11l1.5 2.5h-3z'
      fill='#89C610'
    />
  </svg>
);

export default React.memo(Mountain);
