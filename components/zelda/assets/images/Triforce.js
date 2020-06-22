import * as React from 'react';

const Triforce = (props) => (
  <svg height='1em' width='1em' viewBox='0 0 100 100' {...props}>
    <path d='M74.75 50h-49.5L50 10.015zM50 89.984H.5L25.25 50zM99.5 89.984H50L74.75 50z' />
  </svg>
);

export default React.memo(Triforce);
