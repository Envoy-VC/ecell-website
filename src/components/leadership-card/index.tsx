import React from 'react';

const LeadershipCard = () => {
  return (
    <div className='relative sm:h-[28rem] w-[20rem] h-[24rem] sm:w-[24rem] overflow-hidden rounded-[20px]'>
      <img
        src='https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png'
        alt='Image'
        className='object-cover'
      />
      <div className='leadership-cover absolute bottom-0 z-[3] flex w-full flex-col px-8 py-4 text-white'>
        <div className='text-lg'>Emma Stones</div>
        <div className='text-sm text-white/70'>CEO and Co-founder</div>
      </div>
      <div className='leadership-cover absolute bottom-3 z-[2] w-full -rotate-[15deg] p-12'></div>
      <div className='leadership-cover absolute bottom-3 z-[1] w-full rotate-[15deg] p-12'></div>
    </div>
  );
};

export default LeadershipCard;
