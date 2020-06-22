import * as React from 'react';

const ArrowNoCurve = (props) => (
  <svg width='1em' height='1em' viewBox='0 0 46 100' fill='none' {...props}>
    <path d='M46 47.938L0 0l17 47.938L0 100l46-52.062z' fill='#FDFEE7' />
  </svg>
);

export default React.memo(ArrowNoCurve);
