import * as React from 'react';

const Star = (props) => (
  <svg width='1em' height='1em' viewBox='0 0 96 91' fill='none' {...props}>
    <path
      d='M48 0l11.226 34.55h36.327l-29.39 21.352L77.39 90.45 48 69.098 18.61 90.451 29.837 55.9.447 34.55h36.327L48 0z'
      fill='#FDFDE7'
    />
  </svg>
);

export default React.memo(Star);
