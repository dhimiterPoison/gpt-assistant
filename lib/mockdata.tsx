import { FridgeItem, HistoryEntry, TaskInterface } from './interfaces';
import { Cookie, LogOut, Settings } from "lucide-react";

export const arrayToSort: TaskInterface[] = [
	{
		id: 1,
		task: 'Task 1',
		status: 'Pending',
		impact: 1,
		ease: 3,
		quest: 'main',
	},
	{
		id: 2,
		task: 'Task 2',
		status: 'Pending',
		impact: 2,
		ease: 1,
		quest: 'main',
	},
	{
		id: 3,
		task: 'Task 3',
		status: 'Pending',
		impact: 3,
		ease: 2,
		quest: 'main',
	},
	{
		id: 4,
		task: 'Task 4',
		status: 'Pending',
		impact: 2,
		ease: 3,
		quest: 'main',
	},
];

export const colors = ['', 'gray', 'cyan', 'green'];

export const accountActions = [

	{
		id: 3,
		label: "Sign out",
		icon: <LogOut />
	},
	// {
	// 	id: 1,
	// 	label: "Clear cache",
	// 	icon: <Cookie/>
	//   },
];

export const account = {
	name: "Dhimiter",
	surname: "Helmi",
	label: "Dhimiter Helmi",
	email: "dhimiter.helmi@gmail.com",
	icon: (
		<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<title>DhimRealm</title>
			<path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
		</svg>
	),
};


const accounts = [{
	label: "Dhimiter Helmi",
	email: "dhimiter.helmi@gmail.com",
	icon: (
		<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<title>DhimRealm</title>
			<path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
		</svg>
	),
}, {
	label: "Alicia Koch",
	email: "alicia@example.com",
	icon: (
		<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<title>Vercel</title>
			<path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
		</svg>
	),
},];



export const history: HistoryEntry[] = [
	{
	  id: 1,
	  date: new Date('2024-02-18'),
	  slug: '18-02-2024',
	  tags: ['cycling', 'rain', 'wet', 'projects'],
	  title: 'Finding peace while staying focused',
	  cover: 'https://source.unsplash.com/random/800x600',
	  type: 'video'
	},
	{
	  id: 2,
	  date: new Date('2024-02-17'),
	  slug: '17-02-2024',
	  tags: ['cycling', 'rain', 'wet', 'projects'],
	  title: 'Finding peace while staying focused',
	  cover: 'https://source.unsplash.com/random/800x600',
	  type: 'audio'
	},
	{
	  id: 3,
	  date: new Date('2024-02-16'),
	  slug: '16-02-2024',
	  tags: ['cycling', 'rain', 'wet', 'projects'],
	  title: 'Finding peace while staying focused',
	  cover: 'https://source.unsplash.com/random/800x600',
	  type: 'text'
	},
	{
	  id: 3,
	  date: new Date('2024-02-15'),
	  slug: '15-02-2024',
	  tags: ['cycling', 'rain', 'wet', 'projects'],
	  title: 'Finding peace while staying focused',
	  cover: 'https://source.unsplash.com/random/800x600',
	  type: 'handwritten'
	},
	{
	  id: 4,
	  date: new Date('2024-02-14'),
	  slug: '14-02-2024',
	  tags: ['cycling', 'rain', 'wet', 'projects'],
	  title: 'Finding peace while staying focused',
	  cover: 'https://source.unsplash.com/random/800x600',
	  type: 'handwritten'
	},
	{
	  id: 5,
	  date: new Date('2024-02-13'),
	  slug: '13-02-2024',
	  tags: ['cycling', 'rain', 'wet', 'projects'],
	  title: 'Finding peace while staying focused',
	  cover: 'https://source.unsplash.com/random/800x600',
	  type: 'handwritten'
	},
	{
	  id: 6,
	  date: new Date('2024-02-12'),
	  slug: '12-02-2024',
	  tags: ['cycling', 'rain', 'wet', 'projects'],
	  title: 'Finding peace while staying focused',
	  cover: 'https://source.unsplash.com/random/800x600',
	  type: 'handwritten'
	}
  ];

  export const fridgeItems: FridgeItem[] = [
	{
		id: 1,
		cover: 'https://source.unsplash.com/random/800x600',
		name: 'Pumpkin',
		quantity: 450,
		unit: 'g',
		where: 'freezer',
		expiration: new Date('2024-02-18'), //if freezer, expiration is 6 months
		note: 'first drawer'
	},
	{
		id: 2,
		cover: 'https://source.unsplash.com/random/800x600',
		name: 'Peppers',
		quantity: 4,
		unit: 'stuk',
		where: 'fridge',
		expiration: new Date('2024-02-18'), //if fridge, expiration is 2 weeks
		note: null
	}
]