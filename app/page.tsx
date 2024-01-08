/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fRXBRRrRqDT
 */
import Link from 'next/link';
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
	CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import TextualChat from './ui/TextualChat';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	ArchiveIcon,
	SettingsIcon,
	TickIcon,
	XIcon,
} from '@/components/lib/icons';
import VideoUpload from './ui/VideoUpload';

const statuses = [
	{
		id: 1,
		name: 'Pending Review',
		color: 'bg-yellow-500',
	},
	{
		id: 2,
		name: 'In Progress',
		color: 'bg-blue-500',
	},
	{
		id: 3,
		name: 'Approved',
		color: 'bg-green-500',
	},
];

type Status = {
	id: number;
	name: string;
	color: string;
};

type Action = {
	id: number;
	name: string;
	description?: string;
	status: Status['id'];
	suggestedDateTime?: string;
};

const outputActions : Action[] = [
	{
		id: 1,
		name: 'Relaxing bath',
		description:
			'This should help you reconnect with yourself. You get the most when you act from a place of peace and harmony.',
		status: 1,
		suggestedDateTime: '2021-10-05T22:00:00',
	},
	{
		id: 2,
		name: 'Visit hoorn',
		description: `It's better to visit hoorn on a sunny day. Based on the forecast i suggest you can go on Tuesday 9 January. I will update you if the weather changes.`,
		suggestedDateTime: '2021-10-09T10:00:00',
		status: 2,
	},
	{
		id: 3,
		name: 'Grocery shopping',
		description:
			'You are running out of milk and eggs. You should go shopping as soon as possible to be able to prepare your breakfast tomorrow.',
		status: 3,
	},
];

export default function Component() {
	return (
		<main className='h-full grid grid-cols-3 grid-rows-2 overflow-auto'>
			<section className='col-span-1 row-span-3 flex flex-col p-6 gap-6'>
				<VideoUpload></VideoUpload>
				<TextualChat></TextualChat>
			</section>
			<section className='col-start-2 row-span-3 p-6 ' id='output'>
				<Card className='h-full overflow-y-auto'>
					<CardHeader>
						<CardTitle>Output</CardTitle>
						<CardDescription>
							The output of the uploaded content will appear here.
						</CardDescription>
					</CardHeader>
					<CardContent className='h-48 overflow-auto p-4 bg-gray-100 dark:bg-gray-800'>
						<p className='text-gray-500 dark:text-gray-400'>
							No content uploaded yet.
						</p>
					</CardContent>
					<CardFooter className='flex flex-col gap-4 p-4'>
						<h2 className='font-semibold'>Found some actions, review them:</h2>
						<div className='flex flex-col gap-4'>
							{outputActions.map((action) => {
								const statusColor = statuses.find(
									(el) => el.id === action.status
								)?.color;
								const options = {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								};
								const date = new Date(action.suggestedDateTime || Date.now());

								return (
									<Card
										className='p-4 rounded-xl shadow-none w-80'
										key={action.id}
									>
										<CardTitle>{action.name}</CardTitle>
										<CardDescription>
											{action.description ? action.description : null}
											<div className='flex h-10 justify-between flex-wrap content-center'>
												<div className='flex text-center gap-2'>
													<div
														className={`w-6 h-4 rounded-xl ${statusColor}`}
													></div>
													{statuses.find((el) => el.id === action.status)?.name}
												</div>
												<div className='datetime'>
													{action.suggestedDateTime
														? date.toLocaleDateString('it-IT')
														: 'No date'}
												</div>
											</div>
											<div className='flex gap-2 justify-end'>
												<Button
													size='icon'
													variant='outline'
													className='border-green-700 text-green-700 hover:bg-green-700 hover:text-slate-200'
												>
													<TickIcon className='h-4 w-4' />
												</Button>
												<Button
													size='icon'
													variant='outline'
													className='border-red-700 text-red-700 hover:bg-red-700 hover:text-slate-200'
												>
													<XIcon className='h-4 w-4' />
												</Button>
												<Button
													size='icon'
													variant='outline'
													className='border-primary text-primary hover:bg-primary hover:text-secondary'
												>
													<SettingsIcon className='h-4 w-4' />
												</Button>
												<Button
													size='icon'
													variant='outline'
													className='border-gray-700 hover:bg-primary hover:text-secondary'
												>
													<ArchiveIcon className='h-4 w-4' />
												</Button>
											</div>
										</CardDescription>
									</Card>
								);
							})}
						</div>
					</CardFooter>
				</Card>
			</section>
			<section className='col-start-3 row-span-3 p-6' id='events'>
				<Card className='h-full'>
					<CardHeader>
						<CardTitle>Agenda</CardTitle>
						<CardDescription>
							Your events and tasks for the day, sorted by priority.
						</CardDescription>
					</CardHeader>
					<CardContent className='overflow-auto'>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Priority</TableHead>
									<TableHead>Time</TableHead>
									<TableHead>Event/Task</TableHead>
									<TableHead>Details</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>
										<span className='inline-block h-3 w-3 rounded-full bg-red-500' />
									</TableCell>
									<TableCell>10:00 AM</TableCell>
									<TableCell>Team Meeting</TableCell>
									<TableCell>Discuss project updates</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<span className='inline-block h-3 w-3 rounded-full bg-yellow-500' />
									</TableCell>
									<TableCell>1:00 PM</TableCell>
									<TableCell>Client Call</TableCell>
									<TableCell>Discuss contract details</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<span className='inline-block h-3 w-3 rounded-full bg-green-500' />
									</TableCell>
									<TableCell>5:00 PM</TableCell>
									<TableCell>Project Deadline</TableCell>
									<TableCell>Submit final deliverables</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}

function FlagIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
			<line x1='4' x2='4' y1='22' y2='15' />
		</svg>
	);
}

function UploadIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
			<polyline points='17 8 12 3 7 8' />
			<line x1='12' x2='12' y1='3' y2='15' />
		</svg>
	);
}

function UserIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
			<circle cx='12' cy='7' r='4' />
		</svg>
	);
}
