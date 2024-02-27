import { history } from '@/lib/mockdata';
import { Input } from '../components/ui/input';
import HistoryCard from './HistoryCard';
import HistoryDetailView from './HistoryDetailView';


const PathPage = () => {
  console.log(new Date().toISOString());
  return (
    <div className='w-full h-full flex flex-col lg:flex-row gap-4'>
      <div className='lg:w-1/2 rounded-lg shadow-sm p-4 h-2/3 lg:h-full flex flex-col gap-4'>
        <div className=' flex flex-col gap-4 overflow-y-scroll h-3/4'>
          {history.map((entry, index) => {
            return <HistoryCard key={index} {...entry}></HistoryCard>

          })}
        </div>
        <div className=' rounded-lg shadow-sm border p-4 h-1/4'>
          <span className='font-semibold'>Time machine</span><br />
          <span className='text-sm'>Check out a summary of your life for the selected time period</span>
          <div className='p-4 gap-4 grid grid-cols-[100px_1fr] items-center'>
            From<Input type='date' value={new Date().toString()} />
            To<Input type='date' /></div>
        </div>
      </div>

      <HistoryDetailView entry={history[0]} variant='split'/>
    </div>
  )
}

export default PathPage