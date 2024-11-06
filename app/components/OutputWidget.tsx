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

const OutputWidget = async () => {
	const whisperOutput = await fetch('/api/audio', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const whisperOutputText = await whisperOutput.json();

	return (
		<Card className='h-full w-full overflow-auto'>
			<CardHeader className=''>
				<CardTitle>Output</CardTitle>
				<CardDescription>
					The output of the uploaded content will appear here.
				</CardDescription>
			</CardHeader>
			<CardContent className='h-full overflow-auto rounded-xl bg-gray-100 p-4 dark:bg-gray-800'>
				<p className='text-gray-500 dark:text-gray-400'>
					<span>{whisperOutputText}</span>
				</p>
			</CardContent>
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
		</Card>
	);
};

export default OutputWidget;
