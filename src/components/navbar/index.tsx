'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence, type Variants, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import StripsBackground from 'public/strips.svg';

import Logo from '../Logo';
import { Button } from '../ui/button';
import Lights from './Lights';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const navItemVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerDirection: 1,
        staggerChildren: 0.1,
        ease: 'anticipate',
      },
    },
  };

  return (
    <div className='fixed top-0  z-[2] w-full pt-4'>
      <div className='absolute left-1/2 top-0 mx-auto w-full max-w-screen-lg -translate-x-1/2'>
        <Image
          src={StripsBackground as unknown as string}
          alt='StripsBackground'
          className='h-full w-full object-cover'
        />
        <div className='absolute right-1/2 top-0 w-full max-w-screen-lg translate-x-1/2'>
          <Lights />
        </div>
      </div>

      <motion.div
        layout='size'
        layoutId='navbar'
        className='top-0 mx-auto flex h-full w-full max-w-screen-lg flex-col rounded-2xl border border-[#151633] bg-[#cecefb0a] px-8 backdrop-blur-md'
      >
        <motion.div
          className='flex w-full flex-row items-center justify-between'
          layout='preserve-aspect'
        >
          <Logo size={24} fill='#000' className='' />
          <div className='hidden w-full max-w-sm flex-row items-center gap-4 md:flex'>
            {navLinks.map((link) => (
              <Button
                asChild
                key={link.label}
                variant='nav'
                className='transition-all ease-in'
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
          <div className='hidden sm:flex'>Get Started</div>
          <Button
            size='icon'
            variant='link'
            onClick={() => setIsOpen(!isOpen)}
            className='flex sm:hidden'
          >
            {isOpen ? (
              <X size={24} className='text-foreground' />
            ) : (
              <Menu size={24} className='text-foreground' />
            )}
          </Button>
        </motion.div>
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.div
              key='nav-mobile-menu'
              className='flex flex-col gap-4 py-3'
              variants={navItemVariants}
              animate='animate'
              initial='initial'
              exit='exit'
            >
              {navLinks.map((link, index) => (
                <motion.div
                  variants={navItemVariants}
                  key={link.label}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: {
                      delay: 0.1 * index,
                      ease: 'anticipate',
                    },
                  }}
                >
                  <Button
                    asChild
                    variant='nav'
                    className='w-full transition-all ease-in'
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Navbar;
