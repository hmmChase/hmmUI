import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import * as sc from './Layers.style';

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

const Layers = props => {
  const { x, y, handleMouseMove } = useMove();

  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   const setFromEvent = e =>
  //     setPosition({
  //       x: -(window.innerWidth / 2 - e.clientX) / 10,
  //       y: (window.innerHeight / 2 - e.clientY) / 10
  //     });
  //   window.addEventListener('mousemove', setFromEvent);
  //   return () => window.removeEventListener('mousemove', setFromEvent);
  // }, []);

  const [depth, setDepth] = useState(0);
  const [isVisable1, toggleIsVisable1] = useState('false');
  const [isVisable2, toggleIsVisable2] = useState('false');
  const [isVisable3, toggleIsVisable3] = useState('false');
  const [isVisable4, toggleIsVisable4] = useState('false');
  const [isVisable5, toggleIsVisable5] = useState('false');

  const handleClick = () => {
    if (depth === 0) {
      setDepth(100);

      gsap.to(':root', { duration: 1, '--spacing': '100px' });
    } else {
      gsap.to(':root', { duration: 1, '--spacing': '0px' });

      setDepth(0);
    }
  };

  // const handleVisibilty = (index, bool) => {
  //   const cardContentImage = document.getElementById(`img${index}`);
  //   const liNth = document.getElementById(`li${index}`);

  //   if (bool) {
  //     bool = false;

  //     cardContentImage.classList.remove('hide');
  //     liNth.classList.remove('active');
  //   } else {
  //     bool = true;

  //     cardContentImage.classList.add('hide');
  //     liNth.classList.add('active');
  //   }
  // };

  const handleClick1 = () => toggleIsVisable1(!isVisable1);

  const handleClick2 = () => toggleIsVisable2(!isVisable2);

  const handleClick3 = () => toggleIsVisable3(!isVisable3);

  const handleClick4 = () => toggleIsVisable4(!isVisable4);

  const handleClick5 = () => toggleIsVisable5(!isVisable5);

  return (
    <sc.Wrapper onMouseMove={handleMouseMove}>
      <p>click to toggle layers</p>

      <sc.UL>
        <li
          id='li1'
          onClick={handleClick1}
          className={isVisable1 ? '' : 'active'}
        >
          <img src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/1.png?raw=true' />
        </li>

        <li
          id='li2'
          onClick={handleClick2}
          className={isVisable2 ? '' : 'active'}
        >
          <img src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/2.png?raw=true' />
        </li>

        <li
          id='li3'
          onClick={handleClick3}
          className={isVisable3 ? '' : 'active'}
        >
          <img src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/3.png?raw=true' />
        </li>

        <li
          id='li4'
          onClick={handleClick4}
          className={isVisable4 ? '' : 'active'}
        >
          <img src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/4.png?raw=true' />
        </li>

        <li
          id='li5'
          onClick={handleClick5}
          className={isVisable5 ? '' : 'active'}
        >
          <img src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/5.png?raw=true' />
        </li>
      </sc.UL>

      <sc.Card
        onClick={handleClick}
        style={{
          transform: `rotateY(${x}deg) rotateX(${y}deg)`,
          WebkitTransform: `rotateY(${x}deg) rotateX(${y}deg)`
        }}
      >
        <sc.CardContent>
          <img
            id='img1'
            src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/1.png?raw=true'
            className={isVisable1 ? '' : 'hide'}
          />

          <img
            id='img2'
            src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/2.png?raw=true'
            className={isVisable2 ? '' : 'hide'}
          />

          <img
            id='img3'
            src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/3.png?raw=true'
            className={isVisable3 ? '' : 'hide'}
          />

          <img
            id='img4'
            src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/4.png?raw=true'
            className={isVisable4 ? '' : 'hide'}
          />

          <img
            id='img5'
            src='https://github.com/emiled/image-hosting/blob/master/pissarro/print-layers/5.png?raw=true'
            className={isVisable5 ? '' : 'hide'}
          />
        </sc.CardContent>
      </sc.Card>
    </sc.Wrapper>
  );
};

export default Layers;
