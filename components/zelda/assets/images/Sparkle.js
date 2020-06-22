import * as React from 'react';

const Sparkle = (props) => (
  <svg width='1em' height='1em' viewBox='0 0 53 53' fill='none' {...props}>
    <path
      d='M26.5 0s1.462 13.647 7.157 19.343C39.353 25.038 53 26.5 53 26.5s-13.647 1.462-19.343 7.157C27.962 39.353 26.5 53 26.5 53s-1.462-13.647-7.157-19.343C13.647 27.962 0 26.5 0 26.5s13.647-1.462 19.343-7.157C25.038 13.647 26.5 0 26.5 0z'
      fill='#C4C4C4'
    />
  </svg>
);

export default React.memo(Sparkle);
