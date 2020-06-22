import * as React from 'react';

const Arrow = (props) => (
  <svg width='1em' height='1em' viewBox='0 0 46 100' fill='none' {...props}>
    <path
      d='M46 47.938L0 0s17.275 27.797 17.806 47.938C18.378 69.583 0 100 0 100l46-52.062z'
      fill='#FDFEE7'
    />
  </svg>
);

export default React.memo(Arrow);
