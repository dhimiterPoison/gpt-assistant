import { history } from '@/lib/mockdata';
import { Input } from '../components/ui/input';
import HistoryCard from './HistoryCard';
import HistoryDetailView from './HistoryDetailView';

const PathPage = () => {
	console.log(new Date().toISOString());
	return (
		<div className='flex h-full w-full flex-col gap-4 lg:flex-row'>
			<div className='flex h-2/3 flex-col gap-4 rounded-lg p-4 shadow-sm lg:h-full lg:w-1/2'>
				<div className=' flex h-3/4 flex-col gap-4 overflow-y-scroll'>
					{history.map((entry, index) => {
						return (
							<HistoryCard key={index} {...entry}></HistoryCard>
						);
					})}
				</div>
				{/* <div className=' h-1/4 rounded-lg border p-4 shadow-sm'>
					<span className='font-semibold'>Time machine</span>
					<br />
					<span className='text-sm'>
						Check out a summary of your life for the selected time
						period
					</span>
					<div className='grid grid-cols-[100px_1fr] items-center gap-4 p-4'>
						From
						<Input type='date' value={new Date().toString()} />
						To
						<Input type='date' />
					</div>
				</div> */}
			</div>
			<HistoryDetailView entry={history[0]} variant='split' />
		</div>
	);
};

export default PathPage;
