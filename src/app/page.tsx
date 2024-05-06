import React from 'react';

import Image from 'next/image';

import CubesBackground from '~/assets/cube.svg';
import { Hero, Values } from '~/sections';

const Home = () => {
  return (
    <div className='h-full w-full'>
      <div className='relative min-h-screen overflow-y-hidden text-center sm:h-screen'>
        <div className='absolute top-0 overflow-y-hidden'>
          <Image
            src={CubesBackground as unknown as string}
            alt='Cubes Background'
            className='h-[50dvh] w-full translate-y-1/4 overflow-y-hidden object-cover md:h-[160dvh] md:-translate-y-1/4'
          />
        </div>
        <Hero />
      </div>
      <Values />
    </div>
  );
};

export default Home;
