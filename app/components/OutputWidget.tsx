import { SettingsIcon, TickIcon, XIcon } from '@/lib/icons';
import { Button } from '@/app/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';
import { ArchiveIcon } from '@radix-ui/react-icons';
import React from 'react';
import RecorderController from './RecorderController';
import { getXataClient } from '@/lib/xata';
import { CloudUpload } from 'lucide-react';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';


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

const xata = getXataClient();

const outputActions: Action[] = [
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

let whisperOutputText = '';

const OutputWidget = async () => {
	


	const thoughts = (await xata.db.thoughts.sort('xata.createdAt', 'desc').getAll());


	return (
		// <Card className='flex relative h-full grow-[2] flex-col overflow-y-hidden'>
		<Card className='card flex relative h-full grow-[2] flex-col overflow-y-hidden pb-1'>
			<CardHeader className=''>
				<CardTitle>Output</CardTitle>
				<CardDescription className='flex flex-col gap-2'>
					{thoughts.map(thought => {
						return <div className='font-normal text-lg text-slate-100 flex gap-2 items-center p-2 bg-green-800 shadow-lg'>
							<CloudUpload className='w-4 h-4 shrink-0'/>
							<span>{thought.text}</span>
						</div>
					})}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col h-full p-6 bg-gray-100'>
			{/* <CardContent className='flex flex-col grow overflow-auto rounded-xl bg-gray-100 p-4 dark:bg-gray-800'> */}
				<div className='text-gray-500 dark:text-gray-400 h-full'>
					<span>{whisperOutputText}</span>
				</div>
			</CardContent>
			<RecorderController></RecorderController>
		</Card>
	);
};

export default OutputWidget;


{/* <CardFooter className='flex flex-col items-stretch gap-4 p-4 '>
				<h2 className='font-semibold'>Found some actions, review them:</h2>
				<div className='flex flex-col gap-4 '>
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
								className='p-4 rounded-xl shadow-none w-80 border'
								key={action.id}
							>
								<CardTitle className='text-md'>{action.name}</CardTitle>
								<CardDescription>
									{action.description ? action.description : null}
								</CardDescription>
								<CardContent className='p-0'>
									<div className='flex h-10 justify-between flex-wrap content-center text-sm text-muted-foreground'>
										<div className='flex text-center items-center justify-start gap-2'>
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
								</CardContent>
							</Card>
						);
					})}
				</div>
			</CardFooter> */}