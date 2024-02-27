import { Clock, Fullscreen, MapPinned } from 'lucide-react'
import React from 'react'

import { formatDate } from '@/lib/date'
import Image from 'next/image'
import { HistoryEntry } from '@/lib/interfaces'
import { Badge } from '@/components/ui/badge'

interface Props {
	entry: HistoryEntry,
	variant: 'split' | 'full',
	className?: string
}

const HistoryDetailView = ({ entry, variant }: Props) => {
	let className = '';
	switch (variant) {
		case 'split': {
			className = 'hidden lg:flex flex-col lg:w-1/2 '
			break;
		}
		case 'full': {
			className = 'flex flex-col w-full'
			break
		}
	}

	return (
		<div className={`${className} relative gap-4 rounded-lg shadow-sm border p-4 h-full overflow-y-scroll`}>
			<div className='flex justify-evenly '>
				<span className='flex gap-2 items-center'>
					<Clock strokeWidth={1.5} className='w-4 h-4' />
					{formatDate(entry.date)}
				</span>
				<span className='flex gap-2 items-center'>
					<MapPinned strokeWidth={1.5} className='w-4 h-4' />
					Amsterdam
				</span>
			</div>
			<div className="relative h-1/4">
				<Image
					src={entry.cover}
					alt={entry.title}
					height={100} width={100}
					className='object-cover h-full w-full opacity-60 hover:opacity-100 rounded-md duration-500'
				/>
				<div className="absolute top-2 right-2 rounded-md bg-slate-900 text-slate-50 cursor-pointer w-8 h-8 p-1">
					<Fullscreen />
				</div>
			</div>
			<h2 className='text-lg font-semibold'>{entry.title}</h2>
			<div className='text-sm font-normal flex gap-2'>
				{entry.tags.map((tag, index) =>
					<Badge key={index} variant="secondary" className='font-normal capitalize group-hover:bg-slate-100 group-hover:border group-hover:border-slate-600 delay-100 duration-500'>{tag}</Badge>
				)}
			</div>
			<div className="history-page-content flex flex-col gap-4">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sapien nec justo auctor tempus
					eget nec libero. Nullam nec elit eget libero aliquam luctus. Nulla facilisi. Donec eget sapien nec justo
					auctor tempus eget nec libero. Nullam nec elit eget libero aliquam luctus. Nulla facilisi.
				</p>

				{/* todolist with 4 checkbox elements styled with tailwind. if one element is checked i want its label to have text decoration line through*/}
				<div className="flex flex-col gap-2">
					<label className="group flex items-center gap-2">
						<input type="checkbox" />
						<span className='group-has-[:checked]:line-through group-has-[:checked]:text-muted-foreground group-has-[:checked]:group-hover:decoration-slate-800/30 group-has-[:checked]:group-hover:text-slate-950'>
							Do something
						</span>
					</label>
					<label className="group flex items-center gap-2">
						<input type="checkbox" />
						<span className='group-has-[:checked]:line-through group-has-[:checked]:text-muted-foreground group-has-[:checked]:group-hover:decoration-slate-800/30 group-has-[:checked]:group-hover:text-slate-950'>
							Do something else
						</span>
					</label>
					<label className="group flex items-center gap-2">
						<input type="checkbox" />
						<span className='group-has-[:checked]:line-through group-has-[:checked]:text-muted-foreground group-has-[:checked]:group-hover:decoration-slate-800/30 group-has-[:checked]:group-hover:text-slate-950'>
							Do something else
						</span>
					</label>
					<label className="group flex items-center gap-2">
						<input type="checkbox" />
						<span className='group-has-[:checked]:line-through group-has-[:checked]:text-muted-foreground group-has-[:checked]:group-hover:decoration-slate-800/30 group-has-[:checked]:group-hover:text-slate-950'>
							Do something else
						</span>
					</label>
				</div>
				<p>
					Donec eget sapien nec justo auctor tempus eget nec libero. Nullam nec elit eget libero aliquam luctus.
					Nulla facilisi. Donec eget sapien nec justo auctor tempus eget nec libero. Nullam nec elit eget libero
					aliquam luctus. Nulla facilisi.
				</p>
				<div className="relative h-1/4">
					<Image
						src={entry.cover}
						alt={entry.title}
						height={100} width={100}
						className='object-cover h-full w-full opacity-60 hover:opacity-100 rounded-md duration-500'
					/>
					<div className="absolute top-2 right-2 rounded-md bg-slate-900 text-slate-50 cursor-pointer w-8 h-8 p-1">
						<Fullscreen />
					</div>
				</div>
				<p>
					Donec eget sapien nec justo auctor tempus eget nec libero. Nullam nec elit eget libero aliquam luctus.
					Nulla facilisi. Donec eget sapien nec justo auctor tempus eget nec libero. Nullam nec elit eget libero
					aliquam luctus. Nulla facilisi.
				</p>
				<p>
					Donec eget sapien nec justo auctor tempus eget nec libero. Nullam nec elit eget libero aliquam luctus.
					Nulla facilisi. Donec eget sapien nec justo auctor tempus eget nec libero. Nullam nec elit eget libero
					aliquam luctus. Nulla facilisi.
				</p>
			</div>

		</div>
	)
}

export default HistoryDetailView