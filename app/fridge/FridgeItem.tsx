import { formatDate, formatExpirationDate } from '@/lib/date';
import { FridgeItem } from '@/lib/interfaces';
import { CalendarClock, LocateFixed } from 'lucide-react';
import React from 'react';

interface FridgeItemProps {
	item: FridgeItem;
}
const FridgeItem = ({ item }: FridgeItemProps) => {
	return (
		<div className='flex gap-2 shadow-sm items-center py-1 px-2'>
			<div className='h-12 w-14 bg-slate-300'></div>
			<div className='flex flex-col grow'>
				<span className='text-lg capitalize'>{item.name}</span>
				<span>{item.quantity} {item.unit}</span>
			</div>
			<div>
				<div className="flex flex-col">
					{/* could make a badge with red/orange color if the date is near */}
					{/* also could make filters to order by expiration date */}
					<span className='flex gap-1 items-center'><CalendarClock className='w-4 h-4' />{formatExpirationDate(item.expiration)}</span>
					<span className='flex gap-1 items-center capitalize'><LocateFixed className='w-4 h-4' />{item.where}</span>
				</div>
			</div>
		</div>
	);
};

export default FridgeItem;
