export const Teams = [
  {
    name: 'All',
    key: 'all',
  },
  {
    name: 'Tech Team',
    key: 'tech',
  },
  {
    name: 'Design Team',
    key: 'design',
  },

  {
    name: 'Events Team',
    key: 'events',
  },
  {
    name: 'Social Media Team',
    key: 'social-media',
  },
] as const;

export type TeamType = (typeof Teams)[number]['key'];

export interface Social {
  name: 'twitter' | 'instagram' | 'linkedin' | 'email';
  link: string;
}

export interface ExecutiveProps {
  name: string;
  image: string;
  position: string;
  socials: Social;
}

export interface MemberProps {
  name: string;
  team: TeamType;
  position: string;
  image: string;
  socials: Social;
}
