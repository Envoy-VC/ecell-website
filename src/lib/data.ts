import type { ExecutiveProps, MemberProps } from '~/types';

import {
  Carpediem,
  Ignite,
  Illuminate,
  Initiate,
  Inizio,
} from '~/assets/events';

interface InitiativeType {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const initiatives: InitiativeType[] = [
  {
    date: 'January 27, 2023',
    title: 'Initiate',
    description:
      'Initiated the spark of entrepreneurship in the freshers by introducing them to different segments of the club. The success stories of students from our institute served as an inspiration for the young minds. This event was successful in cultivating awareness towards the entrepreneurial ecosystem.',
    image: Initiate.src,
  },
  {
    title: 'ILLUMINATE',
    date: 'January 28, 2023',
    description:
      'Annual event organised by E-Cell NIT Agartala exclusively for the 1st year students. Participants were divided in teams and given a problem statement after workshops on Entrepreneurship & Business models. They had 24 hours to brainstorm the potential solution & present before the jury.',
    image: Illuminate.src,
  },
  {
    title: `IGNITE`,
    date: '22nd-26th January 2023',
    description: `A three day event where participants were graced with the opportunity to partake in enlightening speaker sessions featuring eminent figures from the entrepreneurial realm.The case solving event which themed as 'Local before global' cultivated the problem solving mindset among the attendances`,
    image: Ignite.src,
  },
  {
    title: 'Carpe diem',
    date: '28th January 2023',
    description: `Carpe diem, in a literal sense means 'Seize the day'. And it is the same feeling that we instil in our event. Carpe Diem is the flagship event of E-Cell NIT, Agartala and was the first ever E-Summit of North East India. It's motive is to outreach the concepts of entrepreneurship among the students and give them a hands-on learning experience. With immense enthusiasm and zeal we conduct these events that  encourage and motivate budding entrepreneurs to succeed in their ventures.`,
    image: Carpediem.src,
  },
  {
    title: 'Inizio',
    date: '28th January 2023',
    description: `A platform to exhibit entrepreneurial skills via the Idea Pitching Competition. The event spanned two rounds: first, participants submitted their innovative ideas, detailing their startup concepts. In the second round, shortlisted candidates presented their ideas, highlighting the potential impact, feasibility, and uniqueness.`,
    image: Inizio.src,
  },
];

export interface TeamType {
  name: string;
  members: TeamMember[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: Record<string, string>;
}

export const executives: ExecutiveProps[] = [
  {
    name: 'Saadhvi Bhukya',
    image:
      'https://drive.google.com/uc?export=download&id=1eKDpGxD2Pit3fF6F4DivtRCjhZvg8hWR',
    position: 'President',
    socials: {
      name: 'email',
      link: 'mailto:saadhvibhukya2323@gmail.com',
    },
  },
  {
    name: 'Ashutosh Sahu',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    position: 'General Secretory',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
  {
    name: 'G Nivitha Krishnan',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    position: 'Head Of Operations(Non-technical)',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
  {
    name: 'Aditya Kanu',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    position: 'Head Of Technical Operations',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
];

export const members: MemberProps[] = [
  {
    name: 'Rishabh Kumar',
    team: 'tech',
    position: 'Member',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
  {
    name: 'Rishabh Kumar 2',
    team: 'tech',
    position: 'MEMBER 2',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
  {
    name: 'Rishabh Kumar 3',
    team: 'design',
    position: 'MEMBER 3',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
  {
    name: 'Rishabh Kumar 4',
    team: 'design',
    position: 'MEMBER 4',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
  {
    name: 'Rishabh Kumar 5',
    team: 'design',
    position: 'MEMBER 5',
    image:
      'https://framerusercontent.com/images/ypKVpsH8eytIFqYMqPCPcXsz5k.png',
    socials: {
      name: 'email',
      link: 'mailto:',
    },
  },
];
