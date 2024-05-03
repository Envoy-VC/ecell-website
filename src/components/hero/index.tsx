import React from 'react';

import Image from 'next/image';

import LightsBackground from 'public/lights.svg';

const Hero = () => {
  return (
    <div className='h-screen'>
      {/* <Image
        src={LightsBackground as unknown as string}
        alt='StripsBackground'
        className='absolute left-1/2 top-0 -translate-x-1/2'
      /> */}
    </div>
  );
};

export default Hero;
