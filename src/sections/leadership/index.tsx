import React from 'react';

import { LeadershipCard } from '~/components';

const Leadership = () => {
  return (
    <section
      id='leadership'
      className='flex flex-col items-center justify-center space-y-12 py-12'
    >
      <h2 className='title-gradient z-[2] text-[2.5rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl'>
        Our{' '}
        <span
          className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
          style={{
            backgroundImage:
              'url(https://framerusercontent.com/images/U6UbhIrFD2OnmiS03kViwM0Qb8.svg)',
          }}
        >
          Leadership
        </span>
      </h2>
      <div className='flex flex-col items-center gap-5 md:flex-row'>
        <LeadershipCard />
        <LeadershipCard />
        <LeadershipCard />
      </div>
    </section>
  );
};

export default Leadership;
