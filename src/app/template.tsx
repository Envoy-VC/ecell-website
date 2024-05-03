'use client';

import { type Variants, motion } from 'framer-motion';

const variants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  enter: { opacity: 1, y: 0, scale: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className='mt-28'
      variants={variants}
      initial='hidden'
      animate='enter'
      transition={{ ease: 'anticipate', duration: 0.65 }}
    >
      {children}
    </motion.main>
  );
}
