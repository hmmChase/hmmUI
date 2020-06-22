// https://www.gameuionweb.com/zelda-botw

import React from 'react';
import Triforce from './assets/images/Triforce';

const Index = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <h1 className='flex items-center font-bold text-5xl tracking-tight text-gray-900'>
        <span>Zelda BOTW Starter</span>

        <Triforce className='ml-4 w-20 h-20 text-zelda-yellow fill-current' />
      </h1>
    </div>
  );
};

export default Index;
