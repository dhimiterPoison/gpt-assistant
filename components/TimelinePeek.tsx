import React from 'react';

const TimelinePeek = () => {
	return (
		<div className='flex h-28 flex-col gap-2 bg-slate-50 p-2 shadow-sm overflow-hidden'>
			<div className='flex gap-2 -translate-y-8 opacity-60'>
				<div className='flex w-12 flex-col justify-between'>
					<span>13:30</span>
					<span>14:00</span>
				</div>
				<div className='slot w-full rounded-md bg-yellow-700 p-2 text-slate-50'>
					Gementee appointment
				</div>
			</div>
			<div className='flex gap-2 -translate-y-8'>
				<div className='flex w-12 flex-col justify-between'>
				<span>15:00</span>
					<span>15:30</span>
				</div>
				<div className='slot w-full rounded-md bg-blue-800 p-2 text-slate-50'>
					Bike pick-up at Swapfiets
				</div>
			</div>
			<div className='flex gap-2 -translate-y-8 opacity-60'>
				<div className='flex w-12 flex-col justify-between'>
					<span>15:30</span>
					<span>16:40</span>
				</div>
				<div className='slot w-full rounded-md bg-orange-900 p-2 text-slate-50'>
					Cycle to diemen
				</div>
			</div>
		</div>
	);
};

export default TimelinePeek;
