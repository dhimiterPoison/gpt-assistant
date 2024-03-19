import { formatExpirationDate } from '@/lib/date';
import { FridgeItem } from '@/lib/interfaces';
import { CalendarClock, LocateFixed } from 'lucide-react';

interface FridgeItemProps {
	item: FridgeItem;
}
const FridgeItemComponent = ({ item }: FridgeItemProps) => {
	return (
		<div className='flex items-center gap-2 px-2 py-1 shadow-sm'>
			<div className='h-12 w-14 bg-slate-300'></div>
			<div className='flex grow flex-col'>
				<span className='text-lg capitalize'>{item.name}</span>
				<span>
					{item.quantity} {item.unit}
				</span>
			</div>
			<div>
				<div className='flex flex-col'>
					{/* could make a badge with red/orange color if the date is near */}
					{/* also could make filters to order by expiration date */}
					<span className='flex items-center gap-1'>
						<CalendarClock className='h-4 w-4' />
						{formatExpirationDate(item.expiration)}
					</span>
					<span className='flex items-center gap-1 capitalize'>
						<LocateFixed className='h-4 w-4' />
						{item.where}
					</span>
				</div>
			</div>
		</div>
	);
};

export default FridgeItemComponent;
