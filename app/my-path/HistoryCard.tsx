import React from 'react'
import useIcon from '../hooks/useIcon';
import { formatDate } from '@/lib/date';
import { HistoryEntry } from '@/lib/interfaces';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ChevronRightCircle, ChevronRightCircleIcon, ChevronRightSquare } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

export default function HistoryCard(entry: HistoryEntry) {
	const icon = useIcon(entry.type);
	return (
		<div className='history-card group hover:bg-slate-100 rounded-lg w-full flex p-2 gap-2 items-stretch transition-all duration-300 ease-in-out'
		>
			<div
				className="relative w-20 min-h-[3.5rem] shrink-0 bg-slate-300 rounded-md flex justify-center items-center"
			>
				<Image
					src={entry.cover}
					alt={entry.title}
					height={100} width={100}
					className='object-cover h-full w-full opacity-60 group-hover:opacity-100 rounded-md duration-500'
				/>
				<div className="absolute top-0 left-0 p-1 bg-orange-100 rounded-tl-md rounded-br-md">{icon}</div>
			</div>
			<div className='w-full h-full flex flex-col shrink'>
				<span className='text-base font-medium'>{formatDate(entry.date)}</span>
				<span className='text-sm '>{entry.title}</span>
				<div className='text-sm font-normal flex gap-2 py-1'>
					{entry.tags.map((tag, index) =>
						<Badge key={index} variant="secondary" className='font-normal capitalize group-hover:bg-slate-100 group-hover:border group-hover:border-slate-600 delay-100 duration-500'>{tag}</Badge>
					)}
				</div>
			</div>
			<div className='flex items-center shrink-0 p-1'>
				<Link href={`my-path/${entry.slug}`}>
					<ChevronRightCircle strokeWidth={1} className='group-hover:fill-primary group-hover:stroke-secondary' />
				</Link>
			</div>
		</div>
	)
}


export const HistoryCardSmall = (entry: HistoryEntry) => {
	return (
		<Link href={`${entry.slug}`}
			className='history-card-sm group hover:bg-slate-100 rounded-lg w-auto flex flex-col gap-2 p-2 justify-center items-center transition-all duration-300 ease-in-out'
		>
			<div
				className="relative w-24 h-16 shrink-0 bg-slate-300 rounded-md flex justify-center items-center"
			>
				<Image
					src={entry.cover}
					alt={entry.title}
					height={100} width={100}
					className='object-cover h-full w-full opacity-60 group-hover:opacity-100 rounded-md duration-500'
				/>
			</div>
			<div className='w-full h-full flex justify-center'>
				<span className='text-xs '>{format(entry.date, ' dd eee MMMM')}</span>
				{/* <ChevronRightCircle strokeWidth={1} className='group-hover:fill-primary group-hover:stroke-secondary' /> */}

			</div>
		</Link>
	)
}