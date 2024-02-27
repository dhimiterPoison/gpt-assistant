import { history } from '@/lib/mockdata'
import { History } from 'lucide-react'
import { notFound } from 'next/navigation'
import { HistoryCardSmall } from '../HistoryCard'
import HistoryDetailView from '../HistoryDetailView'

const HistoryDetail = ({ params }: { params: { slug: string } }) => {

	const entry = history.find(
		(el) => el.slug == params?.slug
	);

	if (!entry) {
		return notFound();
	}

	return (
		<div className='w-full h-full flex flex-col lg:flex-row gap-4'>
			<div className='w-full lg:w-36 rounded-lg shadow-sm p-1 lg:h-full flex flex-row lg:flex-col gap-2 overflow-auto '>
				<span className='self-center text-sm lg:text-base flex gap-2 items-center'><History className='w-4 h-4' strokeWidth={1.5} /> Browse</span>
				{history.map((entry, index) => {
					return <HistoryCardSmall key={index} {...entry}></HistoryCardSmall>

				})}
			</div>
			<HistoryDetailView entry={entry} variant='full' />
		</div>
	)
}

export default HistoryDetail