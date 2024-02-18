import React from 'react'
import useIcon from '../hooks/useIcon';
import { formatDate } from '@/lib/date';
import { HistoryEntry } from '@/lib/interfaces';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const HistoryCard = (entry: HistoryEntry) => {
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
				<div className="absolute">{icon}</div>
			</div><div className='w-full h-full flex flex-col'>
				<span className='text-base font-medium'>{formatDate(entry.date)}</span>
				<span className='text-sm '>{entry.title}</span>
				<span className='text-sm font-normal flex gap-2 py-1'>
					{entry.tags.map((tag, index) =>
						<Badge key={index} variant="secondary" className='font-normal capitalize group-hover:bg-slate-100 group-hover:border group-hover:border-slate-600 delay-100 duration-500'>{tag}</Badge>
					)}
				</span>
			</div>
		</div>
	)
}

export default HistoryCard