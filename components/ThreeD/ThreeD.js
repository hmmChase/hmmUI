import React, { useState } from 'react';
import * as sc from './ThreeD.style';

const useMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    e.persist();

    setState(state => ({
      ...state,
      x: -(window.innerWidth / 2 - e.clientX) / 10,
      y: (window.innerHeight / 2 - e.clientY) / 10
    }));
  };

  return {
    x: state.x,
    y: state.y,
    handleMouseMove
  };
};

const ThreeD = () => {
  const { x, y, handleMouseMove } = useMove();

  return (
    <sc.ThreeD onMouseMove={handleMouseMove}>
      <div
        className='card'
        style={{
          transform: `rotateY(${x}deg) rotateX(${y}deg)`,
          WebkitTransform: `rotateY(${x}deg) rotateX(${y}deg)`
        }}
      >
        <div className='card-content'>
          <h1>Just hover around</h1>

          <p>
            <small>
              by{' '}
              <a href='http://ariona.net' target='_blank'>
                Ariona, Rian
              </a>
            </small>
          </p>

          <p className='related'>
            <strong>See also: </strong>

            <a href='https://codepen.io/ariona/pen/LEEadb' target='_blank'>
              Animated highlight text
            </a>
          </p>
        </div>
      </div>
    </sc.ThreeD>
  );
};

export default ThreeD;
