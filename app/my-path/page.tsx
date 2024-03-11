import { history } from '@/lib/mockdata';
import { Input } from '../components/ui/input';
import HistoryCard from './HistoryCard';
import HistoryDetailView from './HistoryDetailView';

const PathPage = () => {
	console.log(new Date().toISOString());
	return (
		<div className='flex h-full w-full flex-col gap-4  pb-4 lg:flex-row'>
			{/* lg:left main container, sm:top main container*/}
			<div className='relative grid grid-rows-[1fr_200px] grid-cols-1 h-full w-full gap-4 rounded-lg  shadow-sm lg:h-full lg:w-1/2 2xl:w-1/3'>
				<div className='border-1 w-full overflow-x-clip overflow-y-scroll rounded-md border p-1 shadow-sm'>
					{history.map((entry, index) => {
						return (
							<HistoryCard key={index} {...entry}></HistoryCard>
						);
					})}
				</div>
				<div className='w-full rounded-lg border p-4 shadow-sm'>
					<span className='font-semibold'>Time machine</span>
					<br />
					<span className='text-sm'>
						Check out a summary of your life for the selected time
						period
					</span>
					{/* <div className='grid grid-cols-[100px_1fr] items-center gap-4 p-4'>
						From
						<Input type='date' value={new Date().toString()} />
						To
						<Input type='date' />
					</div> */}
				</div>
			</div>
			<HistoryDetailView entry={history[0]} variant='split' />
		</div>
	);
};

export default PathPage;
