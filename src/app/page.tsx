import React from 'react';

import Image from 'next/image';

import Buildings from 'public/buildings.svg';
import CubesBackground from 'public/cube.svg';

const Home = () => {
  return (
    <div className='relative h-screen overflow-y-hidden text-center'>
      <div className='absolute top-0 overflow-y-hidden'>
        <Image
          src={CubesBackground as unknown as string}
          alt='Cubes Background'
          className='h-[50dvh] w-full translate-y-1/4 overflow-y-hidden object-cover md:h-[160dvh] md:-translate-y-1/4'
        />
      </div>
      <div className='relative mt-28 h-full w-full '>
        <div className='flex flex-col'>
          <h1 className='title px-4 py-12 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl lg:text-7xl'>
            <span
              className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
              style={{
                backgroundImage:
                  'url(https://framerusercontent.com/images/U6UbhIrFD2OnmiS03kViwM0Qb8.svg)',
              }}
            >
              Empowering
            </span>{' '}
            your vision
            <br />
            From Idea to Impact.
          </h1>
          <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-lg lg:max-w-4xl'>
            From brainstorming to pitch deck, Entrepreneurship Cell, NIT
            Agartala equips you with the tools and guidance you need to launch
            your disruptive idea and thrive.
          </p>
        </div>

        <div className=''>
          <Image
            src={Buildings as unknown as string}
            alt='Buildings'
            className='mx-auto w-full max-w-[24rem] overflow-y-hidden sm:max-w-2xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
