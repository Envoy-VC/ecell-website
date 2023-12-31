interface InitiativeType {
	title: string;
	date: string;
	description: string;
	image: string;
}

interface EventType {
	title: string;
	image: string;
}

import {
	Initiate,
	Inizio,
	Carpediem,
	MentalHealth,
	IPLAuction,
	SpaceXRoundtable,
	Ignite,
	Illuminate,
} from '~/assets/events';

export const eventsData: EventType[] = [
	{
		title: 'SpaceX Roundtable',
		image: SpaceXRoundtable.src,
	},
	{
		title: 'boAt Case Study',
		image: '',
	},
	{
		title: 'IPL Auction',
		image: IPLAuction.src,
	},
	{
		title: 'Mental Health Workshop',
		image: MentalHealth.src,
	},
];

export const Initiatives: InitiativeType[] = [
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

export const TechTeamDetails: TeamType = {
	name: 'Tech Team',
	members: [
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
		{
			name: 'Sayan Mondal',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
			socials: {
				github: 'https://avatars.githubusercontent.com/u/47265493?v=4',
			},
		},
	],
};
