import React from 'react';

import Four from '~/assets/four.svg';
import One from '~/assets/one.svg';
import Three from '~/assets/three.svg';
import Two from '~/assets/two.svg';

import { ValueCard, ValueCardLarge } from './ValueCard';

const Values = () => {
  return (
    <section className='flex h-full min-h-screen flex-col items-center justify-center gap-12 py-12'>
      <div className='flex flex-col gap-2 py-6 text-center'>
        <h2 className='title-gradient text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl'>
          Launch with{' '}
          <span
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
            }}
          >
            Confidence
          </span>
        </h2>
        <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-lg lg:max-w-4xl'>
          Gain the skills and support you need to confidently launch your
          startup with the E-Cell.
        </p>
      </div>
      <div className='flex w-full max-w-screen-xl flex-col gap-4 lg:flex-row'>
        <div className='flex basis-1/3 flex-col gap-5'>
          <ValueCard
            imgCls='right-0 top-0 rotate-[89deg] -translate-y-1/2 translate-x-2/3'
            title='Dedicated Customer Support'
            description={`Superior product quality refers to the exceptional standard of a product's design, performance, and durability, surpassing the expectations and satisfaction of customers.`}
            number={One as unknown as string}
            initial={{
              x: -30,
              y: -30,
            }}
          />
          <ValueCard
            imgCls='hidden'
            title='Dedicated Customer Support'
            description={`Superior product quality refers to the exceptional standard of a product's design, performance, and durability, surpassing the expectations and satisfaction of customers.`}
            number={Two as unknown as string}
            initial={{
              x: -30,
              y: 30,
            }}
          />
        </div>
        <ValueCardLarge
          imgCls='hidden'
          title='Dedicated Customer Support'
          initial={{
            x: 30,
            y: -30,
          }}
        />
        <div className='flex basis-1/3 flex-col gap-5'>
          <ValueCard
            imgCls='hidden'
            title='Dedicated Customer Support'
            description={`Superior product quality refers to the exceptional standard of a product's design, performance, and durability, surpassing the expectations and satisfaction of customers.`}
            number={Three as unknown as string}
            initial={{
              x: 30,
              y: -30,
            }}
          />
          <ValueCard
            imgCls='left-0 bottom-0 translate-y-1/2 -translate-x-2/3 rotate-0'
            title='Dedicated Customer Support'
            description={`Superior product quality refers to the exceptional standard of a product's design, performance, and durability, surpassing the expectations and satisfaction of customers.`}
            number={Four as unknown as string}
            initial={{
              x: 30,
              y: 30,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
